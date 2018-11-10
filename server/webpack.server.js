const path = require('path');

module.exports = {

    //inform webpack that were building a bundle for nodeJS, rather than for the browser. 
    target: 'node',
    //tell webpack the root file of out server application the entry
    entry: './src/index.js',
    //output tells webpack where to put the output file that is generated after building. 
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build'),//where we place build files -- __dirname is a refrence to the current working directory, build is a new folder automatically created. 
    },
    //tell webpack to run babel on every file it runs through which JSX file structure to javascriptES5
    module: {
        rules: [
            {
                test: /\.js?$/, //regex that tests filename to only apply babel to javascript files  
                //when passes test 
                loader: 'babel-loader',
                exclude: /node_modules/, //regex -dont run babel over files in certain directories 
                options: {
                    presets: [ //rules to transpile code
                        'react', //take react JSX and turn into normal function calls
                        'stage-0', //handles async code 
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
};
//create and export a config file for webpack to send down the line