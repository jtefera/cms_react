var path = require('path');
//var postCSSConfig = require('./config/postcss.config');
var srcPath = path.join(__dirname, 'src');
var ExtractTextWebpack = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var MergeFilesWebpack = require('merge-files-webpack-plugin');

var VENDORS = [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-tap-event-plugin',
    'redux',
    'redux-thunk',
    ];
module.exports = {
    entry: {
        '/': './src/pageApp/main.js',
        '/admin/': './src/adminApp/main.js',
        '/login/': './src/login/main.js',
        '/vendor/': VENDORS
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js[name]index.js'
    },
    //devtool: 'source-map',
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /node_modules/,
                test: /\.jsx?$/
            },
            {
                use: ExtractTextWebpack.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                camelCase: true,
                                context: './'
                            }
                        },
                        {
                            loader: 'postcss-loader',

                        }
                    ]
                }),
                test: /\.css$/
            }
        ]

    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: require('./postcss.config.js')
            }
        }),
        new ExtractTextWebpack('/css/[id].style.css'),
        new MergeFilesWebpack({
            filename: '/css/style.css',
            chunksTest: 'style.css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: '/vendor/',
            minChunks: Infinity
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     filename:
        // })
    ]
};