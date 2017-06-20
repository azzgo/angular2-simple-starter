import * as webpack from 'webpack';


const OfflinePlugin = require('offline-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const helpers = require('./helpers');

const config: webpack.Configuration = {
  cache: true,
  devtool: 'source-map',
  context: helpers.root(),

  module: {
    rules: [
      {
        test: /\.html/,
        loader: 'html-loader',
        exclude: [
          helpers.root('src/index.html')
        ]
      },
      {
        test: /\.ts$/,
        use: [
          'angular2-template-loader',
          'awesome-typescript-loader',
          {
            loader: 'angular-router-loader',
            options: {
              aot: process.env.NODE_ENV === 'prod' ? true: false,
              genDir: process.env.NODE_ENV === 'prod'? './aot': ''
            }
          }
        ]
      },
      { 
        test: /\.css$/,
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true,
              minimize: {
                safe: true
              }
            }
          }
        ],
        exclude: [
          helpers.root('node_modules')
        ]
      },
      { 
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
              minimize: {
                safe: process.env.NODE_ENV === 'prod'
              }
            }
          }
        ],
        include: [
          helpers.root('node_modules')
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 1,
          name: '[path][name].[hash].[ext]',
          emitFile: true,
          context: helpers.root('src')
        }
      },
      {
        test: /\.(eof|woff|woff2|svg|eot|ttf)$/,
        loader: 'file-loader',
        query: {
          name: `assets/[name].[hash].[ext]`,
          emitFile: true,
          context: helpers.root('src')
        }
      }
    ],
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: process.env.NODE_ENV === 'prod' ?
      [ helpers.root('src'), helpers.root('aot/src'), 'node_modules']:
      [ helpers.root('src'), 'node_modules']
  },

  plugins: [
    new webpack.DefinePlugin(
      Object.assign({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.ENV_TTL': process.env.NODE_ENV === 'prod' ? Date.now() : undefined
      })
    ),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      __dirname
    ),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: helpers.root('src/index.html'),
    }),
  ].concat(
    process.env.NODE_ENV === 'prod' ?
    [
      new OfflinePlugin({
        excludes: ['**/*.map'],
        ServiceWorker: {
          events: true,
          navigateFallbackURL: '/',
        },
        AppCache: false
      })
    ]: []
  ),

  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};

module.exports = config

