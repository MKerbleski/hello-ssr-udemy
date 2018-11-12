//this file will rendere our react app and return a string
import React from 'react';
import { renderToString } from 'react-dom/server';//this is necessary to mix syntaxes from home
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
//^^ takes a string and takes out script tags and such ... by taking greater and lesser and making them into unicode
import Routes from '../client/Routes';
import { Helmet } from 'react-helmet';

export default (req, store, context)=> {
    // console.log('renderer.js')
    //context is a required prop, used to handle redirects and error handling. 
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                {/* <Routes /> old way  */} 
                <div>{renderRoutes(Routes)}</div>
                {/* takes array of route objects and turns them into route components, but this way also benifits the clientside as well somehow, i think */}
            </StaticRouter>
        </Provider>
  );
    //^^replaced home route with staticRouter

    const helmet =  Helmet.renderStatic();
    //helmet will be an object that we rendered on pages

    //all of this is necessary just to include the script tag so that the client has access to the functionality of the site and not exclusivly the visuals that just sending <Home> would give. 1st package to is for visual and the second is for the bundle. so page will load and then have functionality.
    //<script tag pulls rom the app.use ...public above. 
    return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};