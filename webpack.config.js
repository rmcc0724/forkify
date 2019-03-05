const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: './dist'
    },
    mode: 'development',
    devServer: {
        contentBase: ['./dist'],
        writeToDisk: true
    },
    // Added CSS & Style Loader
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
       ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};