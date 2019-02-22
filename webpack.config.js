var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                use: 'babel-loader'  
            },
            { 
                test: /\.css$/, 
                use: [ 
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    } 
                ] 
            }
        ]
    },
    // devServer: {
    //     historyApiFallback: true
    // },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: 'src/app/index.html'
            }
        )
    ]
};

module.exports = config;