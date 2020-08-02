const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new LoaderOptionsPlugin({
            options: {
                handlebarsLoader: {}
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            template: 'public/index.hbs'
        }),
        new ImageminPlugin({
            test: 'src/images/**',
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '95-100'
            }
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {   // Handlebars
                test: /\.(handlebars|hbs)$/,
                loader: "handlebars-loader"
            },
            {   // HTML
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {   // SASS
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {   // CSS
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {   // PICTURES
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {   // FONTS
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {   // CSV
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ],
            },
            {   // XML
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ],
            },
        ],
    },
};