/**
 * Created by admin on 2018-12-16.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const React = require('react');
const ReactDom = require('react-dom');


const paths = require('./path');

module.exports = {
    entry: {
        app: paths.appIndexJs
    },
    output: {
        filename: '[name].js',
        path: paths.appBuild,
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.js|jsx$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [paths.appSrc], // 指定检查的目录
                options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx", "css", "sass"]
    },
    // externals: {
    //     "react": React,
    //     "react-dom": ReactDom,
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-0',
            template: paths.appIndexHtml
        }),
        new CleanWebpackPlugin(['build'], {
            root: process.cwd()
        }),
        // new ExtractTextPlugin("styles.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};