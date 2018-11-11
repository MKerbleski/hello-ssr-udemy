//this will be a shared resource between client and server side

import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

export default () => {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/hi" component={() => "hi"} />
      </div>
    );
  };