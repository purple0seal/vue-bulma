'use strict'
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const env = config.build.env

const webpackConfig = merge(baseWebpackConfig, {
  devtool: false,
  output: {
    path: config.build.assetsRoot,
    filename: 'vue-bulma-pagination.js',
    library: 'VueBulmaPagination',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})

module.exports = webpackConfig
