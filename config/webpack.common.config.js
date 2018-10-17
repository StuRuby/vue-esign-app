const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: '../src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'vue-esign-[name].js'
    },
    node: {
        fs: 'empty'
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
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|xml|json|ttf|woff)$/,
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
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: '../public/index.html'
        }),
    ],
    resolve: {
        extensions: ['.vue', '.js', '.json']
    }
};