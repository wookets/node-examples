
var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream(process.argv[1]);

inp.pipe(gzip).pipe(process.stdout, {end: false});