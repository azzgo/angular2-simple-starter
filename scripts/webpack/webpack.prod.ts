import * as webpack from 'webpack';

const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NgcWebpackPlugin = require('ngc-webpack').NgcWebpackPlugin;

const baseConfig = require('./webpack.base');
const helpers = require('./helpers');

const config = {
  devtool: 'source-map',
  entry: {
    main: './src/main-aot.ts',
    vendor: ['./src/polyfills.ts', './src/vendor.ts'],
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].chunk.js',
    sourceMapFilename: '[name].map',
  },
  plugins: [
    new NgcWebpackPlugin({
      tsConfig: helpers.root('tsconfig.aot.json')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // Specify the common bundle's name.
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        screw_ie8: true
      }, //prod
      compress: {
        drop_console: true,
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false // we need this for lazy v8
      },
      sourceMap: true
    }),
  ]
};

module.exports = webpackMerge(baseConfig, config);
