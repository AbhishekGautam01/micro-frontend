const { merge } = require('webpack-merge');
const { module } = require('./webpack.common');
const HTMLWebpackPlugin = plugin('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

//Since dev config is the second param - so this will take precedence
// any thing which is common in both so devConfig will override
module.exports = merge(commonConfig, devConfig);
