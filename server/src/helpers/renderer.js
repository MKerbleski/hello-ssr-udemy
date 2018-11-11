//this file will rendere our react app and return a string
import React from 'react';
import { renderToString } from 'react-dom/server';//this is necessary to mix syntaxes from home
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default req => {
    console.log('renderer.js')
    //context is a required prop, used to handle redirects and error handling. 
    const content = renderToString(
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
  );
    //replaced home route with staticRouter

    //all of this is necessary just to include the script tag so that the client has access to the functionality of the site and not exclusivly the visuals that just sending <Home> would give. 1st package to is for visual and the second is for the bundle. so page will load and then have functionality.
    //<script tag pulls rom the app.use ...public above. 
    return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};