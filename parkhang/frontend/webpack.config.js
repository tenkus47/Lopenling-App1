var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
var postcssImport = require("postcss-import");
var postcssCssnext = require("postcss-cssnext");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const devMode = (argv.mode !== 'production');
    
    return {
        context: __dirname,
        
        entry: {
            parkhang: ["./app/index", "./website/index"]
        },

        devtool: devMode ? 'eval-source-map' : false,
        
        output: {
            filename: devMode ? '[name]-dev.js' : '[name]-[hash].js',
            path: path.resolve(__dirname, 'static/bundles'),
            library: 'parkhang',
            publicPath: "/static/bundles/"
        },

        mode: devMode ? 'development' : 'production',

        plugins: [
            new BundleTracker({filename: devMode ? './webpack-stats-dev.json' : 'webpack-stats.json'}),
            new MiniCssExtractPlugin({
                filename: devMode ? "styles-dev.css" : "styles-[hash].css"
            })
        ],
        
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    "@babel/preset-react",
                                    "@babel/preset-env",
                                    "@babel/preset-flow"
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: /accounts\.css/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                sourceMap: true,
                                importLoaders: 1,
                                modules: {
                                    localIdentName: "[name]---[local]"
                                }
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    postcssImport({
                                        addDependencyTo: webpack,
                                        path: path.resolve("./app")
                                    }),
                                    postcssCssnext({
                                        compress: true
                                    })
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /accounts\.css/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                sourceMap: true,
                                importLoaders: 1,
                                modules: false
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    postcssImport({
                                        addDependencyTo: webpack,
                                        path: path.resolve("./app")
                                    }),
                                    postcssCssnext({
                                        compress: true
                                    })
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: "@svgr/webpack",
                            options: {
                                svgoConfig: {
                                    plugins: [
                                        {
                                            inlineStyles: {
                                                onlyMatchedOnce: false
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: "file-loader"
                        }
                    ]
                }
            ],
        },

        resolve: {
            extensions: [".js", ".jsx"],
            modules: [path.resolve("./node_modules"), path.resolve("./app")]
        }
    }
}
