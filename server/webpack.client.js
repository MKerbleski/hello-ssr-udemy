//mostly same as webpack.server.js
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config  = {
    //target is removed

    //tell webpack the root file of our server --normaly called index.js client for clarity. 
    entry: './src/client/client.js',
    output: {
        filename: "bundle.js",
        //changed to public as the public folder will contain the client side logic and such
        path: path.resolve(__dirname, 'public'), 
    }   
};
module.exports = merge(baseConfig, config);
//create and export a config file for webpack to send down the line