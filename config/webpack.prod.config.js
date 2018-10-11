const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonWebpackConfig = require('./webpack.common.config');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const progressBarWebpackPlugin = require('progress-bar-webpack-plugin');

const cleanOptions = {
    root: path.resolve(__dirname, '../dist'),
    verbose: true,
    dry: false
};

const prodWebpackConfig = merge(commonWebpackConfig, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('prod')
            }
        }),
        new cleanWebpackPlugin(['*'], cleanOptions),
        new progressBarWebpackPlugin()
    ]
});

module.exports = prodWebpackConfig;