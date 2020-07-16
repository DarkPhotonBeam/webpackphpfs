const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/',
        contentBase: path.resolve(__dirname, 'dist'),
        proxy: {
            '/api': {
                path: /./,
                target: 'http://localhost/roots/webpackphpfullstack',
                secure: false,
                changeOrigin: true,
            }
        },
    }
});