//root file for application

// const express = require('express');
// //wierd syntax but will change or make sense later
// const React = require('react'); 
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

//convert require to statements to import statements 
import express from 'express';
import React from 'react';
//this is necessary to mix syntaxes from home
import { renderToString } from 'react-dom/server';
import Home from './client/components/home'
const app = express();

app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    //JSX inside a node express server -- this is wierd 

    res.send(content);
});

app.listen(3200, () => {
    console.log('server running on 3200');
});