const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
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
