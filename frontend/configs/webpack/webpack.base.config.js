const webpack = require('webpack');
const path = require('path');

// Webpack plugins
// const TerserPlugin = require('terser-webpack-plugin');

const contextFolder = path.join(__dirname, "..", "..", "src");

const isEnv = require('./utils/isEnv');

module.exports = (env, argv) => {

  
  [isEnvProduction, isEnvDevelopment] = isEnv(argv);

  return {
    context: contextFolder,
    output: {
      path: path.join(__dirname, '..', '..', 'build', 'public'),
    },
    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname,"..", "..", "src"),
        path.resolve(__dirname,"..", "..", "src", "components"),
        path.resolve(__dirname,"..", "..", "src", "pages")
      ],
      extensions: ['.wasm', '.mjs', '.js', '.json', 'scss']
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: []
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.html/,
            loader: 'raw-loader'
        },
        {
          test: /\.(png|webp|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ['file-loader?name=static/images/[name]_[hash:8].[ext]']
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: "file-loader",
      },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        MODE_PRODUCTION: isEnvProduction,
        MODE_DEVELOPMENT: isEnvDevelopment
      })
    ],
    optimization: {
      minimize: isEnvProduction
    },
    devtool: isEnvDevelopment ? 'source-map' : false
  }
};