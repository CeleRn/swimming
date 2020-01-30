const webpack = require('webpack');
const path = require('path');

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin

module.exports = {
  context: path.join(__dirname, "src"),

  entry: {
    bundle: './index'
  },
  
  output: {
    path: path.join(__dirname, "build"),
    filename: 'static/js/[name]_[hash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/
          ]
        },
        {
            test: /\.html/,
            loader: 'raw-loader'
        }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      })
  ],
  devServer: {
      contentBase: './src/public',
      port: 7700,
  } 
};