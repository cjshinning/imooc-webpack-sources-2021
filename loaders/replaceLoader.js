const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  // return source.replace('jenny', options.name);
  const result = source.replace('jenny', options.name);
  this.callback(null, result);
}