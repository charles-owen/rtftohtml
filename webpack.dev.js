const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'rtftohtml.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'RtfToHtml',
        libraryTarget: 'umd',
        libraryExport: "default",
        publicPath: ''
    },
    devServer: {
        host: 'localhost'
    }
});
