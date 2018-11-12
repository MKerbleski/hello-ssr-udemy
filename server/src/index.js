//root file for application server side 
import 'babel-polyfill'; //necessary for async await 
import express from 'express';
import proxy from 'express-http-proxy';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes'

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));
//^^any attempt to hit server that starts with api will be split off into a proxy to fullfil request. only put second optino for other sites

app.use(express.static('public'));
//this tells express that teh public folder is publicy availble (like to the user) to the outside world. 

app.get('*', (req, res) => {
    //req includes cookie
    const store = createStore(req);
    

    //take incoming request path and look at route config and only render necessary components   
    //also alows you to see component that needs to be rendered without rendering it
    const promises = matchRoutes(Routes, req.path).map(({ route }) =>  {
    //^^ promises is an array with a promise(s) of how far the fetches are in loading
        return route.loadData ? route.loadData(store) : null;
        //^^ route.loadData(store) is refrence to serverside redux stor e
    }).map(promise => {
        if (promise) {
            return new Promise((res, rej) => {
                promise.then(res).catch(res);
                //always resolve inner promise
            })
        }
    })
    //^^map envokes load data for every component 
    //(({ route})) is destructuring
    
    //promise.all takes an array of promises and returns the combined promises as one promise once all promises in array are resolved.
    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        
        if(context.url){
            return res.redirect(301, context.url)
        }

        if (context.notFound){
            //can be used for other status codes
            res.status(404);
            //ok to send seperate
        }
        res.send(content);
    })
    //bad approach because not specific
    // .catch(err => {
    //     res.send('40something ')
    // })
  });

app.listen(3000, () => {
    console.log('\n -- server running on 3000');
});