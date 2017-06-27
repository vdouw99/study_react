/**
 * Created by zhangsanfeng on 2017/6/26.
 */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app.js'),
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[hash:5].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                query: {presets: ['latest']}
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['url-loader?limit=80000&name=assets/[name]-[hash:5].[ext]', 'img-loader']
            }
        ]
    },


    plugins: [
        // webpack 内置的 banner-plugin
        // new webpack.BannerPlugin("Copyright by zhangsanfeng"),

        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: ()=> {
        //             return [
        //                 require('autoprefixer')({
        //                     browsers: ['last 10 versions', 'ie>=8', '>1% in CN']
        //                 })
        //             ]
        //         }
        //     }
        // }),

        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),

        //js代码压缩
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     minimize: true,
        //     compress: {warnings: false},
        //     output: {comments: false},
        //     beautify: false,
        //     minChunks: Infinity
        // }),

        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        // new webpack.optimize.OccurrenceOrderPlugin(),


        // 分离CSS和JS文件
        // new ExtractTextPlugin('style/[name].[chunkhash:5].css'),

        // 提供公共代码
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: '/js/[name].[chunkhash:5].js'
        // }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        // new webpack.DefinePlugin({
        //     __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        // }),

        // css代码压缩
        // new OptimizeCssAssetsPlugin({
        //     assetNameRegExp: /\.css$/g,
        //     cssProcessor: require('cssnano'),
        //     cssProcessorOptions: {discardComments: {removeAll: true}},
        //     canPrint: true
        // })

    ]
};