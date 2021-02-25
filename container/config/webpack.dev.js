const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const ModulerFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModulerFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

//Since dev config is the second param - so this will take precedence
// any thing which is common in both so devConfig will override
module.exports = merge(commonConfig, devConfig);
