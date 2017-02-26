var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var postcssImport = require("postcss-import");
var postcssCssnext = require("postcss-cssnext");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,

    entry: {
        'parkhang': [
            './app/index',
            './website/index',
        ]
    },

    output: {
        path: './static/bundles/',
        filename: "[name]-[hash].js",
        library: 'parkhang',
        publicPath: '/bundles/'
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin("styles-[hash].css"),
        // new HtmlWebpackPlugin({
        //     template: './app/index-template.html'
        // }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'react',
                                'latest'
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                exclude: /accounts\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                modules: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    postcssImport({
                                        addDependencyTo: webpack,
                                        path: path.resolve('./app'),
                                    }),
                                    postcssCssnext({
                                        compress: true,
                                    }),
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /accounts\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                modules: false,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    postcssImport({
                                        addDependencyTo: webpack,
                                        path: path.resolve('./app'),
                                    }),
                                    postcssCssnext({
                                        compress: true,
                                    }),
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./app'),
        ]
    },
}