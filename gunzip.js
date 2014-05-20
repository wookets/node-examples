
var http = require('http');
var zlib = require('zlib');
http.get('http://www.google.com', function(res) {
  res.pipe(zlib.createGunzip()).pipe(process.stdout, {end: false});
})