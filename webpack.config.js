/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/app.js', 'webpack/hot/only-dev-server'],
  output: {
    publicPath: '/',
    filename: 'app.js'
  },

  cache: true,
  debug: true,
  devtool: 'sourcemap',

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'jquery': __dirname + '/node_modules/jquery/dist/jquery.js',
      'styles': __dirname + '/src/assets/css',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/components/',
      'routes': __dirname + '/src/routes/',
      'stores': __dirname + '/src/stores/',
      'actions': __dirname + '/src/actions/'
    }
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.(png|jpg|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  postcss: [autoprefixer, precss],
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: '../index.html',
      template: './src/assets/index.template.html',
      favicon: './src/assets/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]

};
