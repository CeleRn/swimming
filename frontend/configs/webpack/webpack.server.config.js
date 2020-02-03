const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const makeBaseConfig = require('./webpack.base.config');

const isEnv = require('./utils/isEnv');

const config = (env, argv) => {

  [isEnvProduction, isEnvDevelopment] = isEnv(argv);

  const baseConfig = makeBaseConfig(env, argv);
  

  // Конфиг для сервера
  const updateConfig = {
    target: 'node',
    entry: {
      server: './server/index'
    },
    output: {
      path: path.join(__dirname, '..', '..', 'build'),
      filename: '[name].js',
      publicPath: '/'
    }
  }

  // Конфиг для webpack-dev-server
  let devServerConfig = {}
  if (argv.liveReload) {
    devServerConfig = {
      plugins: [
        new webpack.HotModuleReplacementPlugin({})
      ],
      devServer: {
        contentBase: baseConfig.output.path,
        hot: true,
        port: 4000,
        injectClient: true,
        injectHot: true,
        watchContentBase: true,
        // proxy: {
        //   '/': 'http://localhost:3000'
        // }
      }
    }
  }

  return merge.smart(baseConfig,updateConfig,devServerConfig);
};

module.exports = config;

