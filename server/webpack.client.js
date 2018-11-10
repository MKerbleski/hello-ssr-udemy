//mostly same as webpack.server.js
const path = require('path');

module.exports = {
    //target is removed

    //tell webpack the root file of our server --normaly called index.js client for clarity. 
    entry: './src/client/client.js',
    output: {
        filename: "bundle.js",
        //changed to public as the public folder will contain the client side logic and such
        path: path.resolve(__dirname, 'public'), 
    },
    //stays the same and needs to be
    module: {
        rules: [
            {
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude: /node_modules/, 
                options: {
                    presets: [ 
                        'react', 
                        'stage-0', 
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
};
//create and export a config file for webpack to send down the line