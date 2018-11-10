//root entry of our client side codebase , no server routes...
//can treat this as a normal react app 

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

ReactDOM.hydrate(<Home />, document.querySelector('#root') );//needs to get rendered into the same div that is already on page from index.js linked through 'root'.
//use hydrate instead of render