var path = require('path');
var postCSSConfig = require('./config/postcss.config');
var srcPath = path.join(__dirname, 'src');

module.exports = {
    entry: {
        './public/js/index': './src/pageApp/main.js',
        './public/js/admin/index': './src/adminApp/main.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2'],
                },
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.css$/,
                include: srcPath,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss'
            }
        ],
    },
    postcss: function () {
        return postCSSConfig;
    },
};