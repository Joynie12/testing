const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js', 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], 
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource', 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/styles.css', to: 'styles.css' },
                { from: 'src/images', to: 'images' }, 
            ],
        }),
    ],
};
