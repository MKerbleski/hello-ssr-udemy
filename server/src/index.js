//root file for application server side 

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';//this is necessary to mix syntaxes from home
import Home from './client/components/home'
const app = express();

app.use(express.static('public'));//this tells express that teh public folder is publicy availble (like to the user) to the outside world. 

app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    //JSX inside a node express server -- this is wierd 

    //all of this is necessary just to include the script tag so that the client has access to the functionality of the site and not exclusivly the visuals that just sending <Home> would give. 1st package to is for visual and the second is for the bundle. so page will load and then have functionality.
    //<script tag pulls rom the app.use ...public above. 
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
});

app.listen(3200, () => {
    console.log('server running on 3200');
});