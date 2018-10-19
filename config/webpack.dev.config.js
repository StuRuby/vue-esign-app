const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config');

const devWebpackConfig = merge(commonWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        port: 3000,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
            }
        })
    ]
});

module.exports = devWebpackConfig;