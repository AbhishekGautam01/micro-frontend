const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './Marketing': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

//Since dev config is the second param - so this will take precedence
// any thing which is common in both so devConfig will override
module.exports = merge(commonConfig, devConfig);
