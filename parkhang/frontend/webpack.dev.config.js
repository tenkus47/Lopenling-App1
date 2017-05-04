var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var postcssImport = require("postcss-import");
var postcssCssnext = require("postcss-cssnext");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,

    entry: {
        'parkhang': [
            './app/index',
            // 'webpack-dev-server/client?http://127.0.0.1:3000',
            // 'webpack/hot/only-dev-server',
            './website/index',
        ]
    },

    output: {
        path: path.resolve(__dirname, 'static/bundles/'),
        filename: "[name]-dev.js",
        library: 'parkhang',
        publicPath: '/bundles/'
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats-dev.json'}),
        new ExtractTextPlugin("styles-dev.css"),
        // new HtmlWebpackPlugin({
        //     template: './app/index-template.html'
        // }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new LodashModuleReplacementPlugin,
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    // {
                    //     loader: 'react-hot-loader'
                    // },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'react',
                                'env'
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
                                modules: true,
                                localIdentName:"[name]---[local]"
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

    devtool: 'cheap-module-source-map'
}