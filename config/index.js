
'use strict'

const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
