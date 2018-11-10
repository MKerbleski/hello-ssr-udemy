//root file for application

const express = require('express');
const React = require('react'); //wierd syntax but will change or make sense later
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/componets/home').default;//this is necessary to mix syntaxes from home
const app = express();

app.get('/', (req, res) => {
    const content = renderToString(<Home />);//JSX inside a node express server -- this is wierd 

    res.send(content);
});

app.listen(3200, () => {
    console.log('server running on 3200');
});