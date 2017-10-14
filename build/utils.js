const path = require('path')
const config = require('../config')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = config.build.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}