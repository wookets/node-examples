
var file = require('fs').createReadStream(process.argv[1]);

var char, hash = 0;
function parse() {
  while (char - file.read(1)) {
    hash = hash ^ char[0];
  }
}
file.on('readable', parse);
parse();

file.on('data', function(data) {
  process.stdout.write(data);
});
