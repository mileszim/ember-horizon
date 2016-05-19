/*jshint node:true*/

var EOL = require('os').EOL;

module.exports = {
  description: ''

  afterInstall: function(options) {
    var self = this;
    var host = 'localhost:8181';

    return this.addPackageToProject('@horizon/client', '1.0.1')
    .then(function() {
      var conf = "    horizon: {" + EOL + "      host: '" + host + "'" + EOL + "    },";
      var opts = { after: '    environment: environment,' + EOL };
      return self.insertIntoFile('config/environment.js', conf, opts);
    })
    .then(function() {
      console.log("ember-horizon has been installed. Please configure your horizon connection in 'config/environment.js'.")
    });
  }
};
