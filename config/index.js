var _ = require('lodash'),
	fs = require('fs'),
	path = require('path');

var config = {};
//config.env used to quickly get environment app wide
config.env = process.env.NODE_ENV || 'development';
//config.logsDir absolute path for directory with logs, be sure it is writable
config.logsDir = path.join(__dirname, 'logs')
//config.hostname used to create site links
config.hostname = 'www.pickmyadventure.dev';
//config.isHttps used to create site links
config.isHttps = false;
//config.usePort used to create site links
config.usePort = false;

//config.mongodb connection Uri string
config.db = 'mongodb://localhost/pickmyadventure'

config.secret = 'thisisalamesecret'
config.guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
//config.port on which app should run
config.port = '3000';

config.path = path.join(__dirname, 'config.' + config.env + '.js')

if (fs.existsSync(config.path)) {
	config = _.extend({}, config, require(config.path))
}

module.exports = config
