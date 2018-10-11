const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: __dirname,
    entry: '../src/app.js',
    output: {
        path: '../dist'
        publicPath: '../dist',
        filename: 'vue-esign-[name].js'
    },
    node: {
        fs: 'empty'
    },
    devServer: {
        contentBase: '../dist',
        compress: true,
        port: 3000
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
                    'style-loader',
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|xml|json)$/,
                use: ['url-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        //将定义过的其他规则复制并应用到`.vue`文件相应语言的块
        new VueLoaderPlugin()
    ]
}