//root file for application server side 
import 'babel-polyfill'; //necessary for async await 
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
//this tells express that teh public folder is publicy availble (like to the user) to the outside world. 

app.get('*', (req, res) => {
    const store = createStore();
    //some logic to initilize and load data into the store
    res.send(renderer(req, store));
  });

app.listen(3200, () => {
    console.log('\n -- server running on 3200');
});