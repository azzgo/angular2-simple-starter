import * as webpack from 'webpack';

const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');
const helpers = require('./helpers');

const config = {

  devtool: 'source-map',
  entry: {
    main: './src/main.ts',
    vendor: ['./src/polyfills.ts', './src/vendor.ts'],
  },
  output: {
    path: helpers.root('tmp'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    sourceMapFilename: `[name].map`,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // Specify the common bundle's name.
      minChunks: Infinity,
    }),
    new CopyWebpackPlugin([
      {
        context: 'src/framework/assets/',
        from: '**/*',
        to: 'framework/assets'
      }
    ]),
  ],

  devServer: {
    port: process.env.PORT || 9000,
    historyApiFallback: true
  }
};

module.exports = webpackMerge(baseConfig, config);
