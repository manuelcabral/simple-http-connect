var connect = require('connect');
var path = require('path');

module.exports = function(port, dir) {

  port = port || 8080;
  dir = dir || '.';

  absoluteDir = path.resolve(dir);

  console.log("Listening on port " + port + ", serving " + dir);

  var server = connect()
                .use(connect.static(absoluteDir))
                .use(connect.directory(absoluteDir))
                .listen(port);

};