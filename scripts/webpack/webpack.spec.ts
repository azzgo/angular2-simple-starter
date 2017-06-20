import * as webpack from 'webpack';

const webpackMerge = require('webpack-merge');

const baseConig = require('./webpack.base');

const config = {
};

module.exports = webpackMerge(baseConig, config);
