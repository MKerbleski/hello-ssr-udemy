//root entry of our client side codebase , no server routes...
//can treat this as a normal react app 
import 'babel-polyfill'; //necessary for async await 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
//redux libraries 
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import reducers from './reducers';

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))
//window.INITIAL_STATE is replaces empty object to set state to what it was from the server side
ReactDOM.hydrate(

    <Provider store={store}>
        <BrowserRouter>
            {/* <Routes /> OLD */}
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider> 
  , document.querySelector('#root')
);
    //needs to get rendered into the same div that is already on page from index.js linked through 'root'.
//use hydrate instead of render
//user browser router to incorporate routes