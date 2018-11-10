const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config  = {

    //inform webpack that were building a bundle for nodeJS, rather than for the browser. 
    target: 'node',
    //tell webpack the root file of out server application the entry
    entry: './src/index.js',
    //output tells webpack where to put the output file that is generated after building. 
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build'),//where we place build files -- __dirname is a refrence to the current working directory, build is a new folder automatically created. 
    }, 
    //this module tells wepack not to bundle librarires at the point to the server if the library exists in the node modules server
    externals: [webpackNodeExternals()]
};
//merge just combines webpack.server ans webpack.base into one.
module.exports = merge(baseConfig, config);
//create and export a config file for webpack to send down the line