//root entry of our client side codebase , no server routes...
//can treat this as a normal react app 

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
//redux libraries 
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(

    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider> 
  , document.querySelector('#root')
);
    //needs to get rendered into the same div that is already on page from index.js linked through 'root'.
//use hydrate instead of render
//user browser router to incorporate routes