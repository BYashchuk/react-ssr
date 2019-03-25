const path = require('path');
const webpack = require('webpack');

const browserConfig = {
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'client.bundle.js',
        publicPath: '../'
    },
    module: {
        rules: [

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ]
}

module.exports = browserConfig;