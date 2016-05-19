/*jshint node:true*/

var EOL = require('os').EOL;

module.exports = {
  description: ''

  afterInstall(options) {
    return this.addPackageToProject('@horizon/client', '1.0.1');
  },

  addToConfig(key, value) {
    var options = { after: '    environment: environment,' + EOL };
    return this.insertIntoFile('config/environment.js', '    ' + key + ': ' + value + ',', options);
  }
};
