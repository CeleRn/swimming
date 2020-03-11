const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

const makeBaseConfig = require('./webpack.base.config');

const isEnv = require('./utils/isEnv');

const config = (env, argv) => {
  [isEnvProduction, isEnvDevelopment] = isEnv(argv);

  const baseConfig = makeBaseConfig(env, argv);
  
  const updateConfig = {
    target: 'web',
    entry: {
      bundle: './index'
    },
    output: {
      path: path.join(__dirname, '..', '..', 'build', 'public'),
      filename: 'assets/js/[name]_[hash:8].js',
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: baseConfig.context + "/public/index.html",
          inject: 'body'
      }),
      new InterpolateHtmlPlugin({
        'PUBLIC_URL': '/assets'
      })
    ]
  }

  let devServerConfig = {}

  if (argv.liveReload) {
    devServerConfig = {
      plugins: [
        new webpack.HotModuleReplacementPlugin({
          // multiStep: true
        })
      ],
      devServer: {
        contentBase: baseConfig.context + '/public',
        hot: true,
        host: '0.0.0.0',
        port: 3000,
        injectClient: true,
        injectHot: true,
        watchContentBase: true,
        historyApiFallback: true
      }
    }
  }

  return merge.smart(baseConfig,updateConfig,devServerConfig);
};

module.exports = config;

