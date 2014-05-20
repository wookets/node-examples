
var crypto = require('crypto');
var hmac = crypto.createHmac('sha256', 'key');
hmac.update(process.argv[1]);
console.log('crypto', process.argv[1], hmac.digest('base64'));
