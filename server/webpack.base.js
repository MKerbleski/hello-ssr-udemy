module.exports = {
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
}