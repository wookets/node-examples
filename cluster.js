
var cluster = require('cluster');

if (cluster.isMaster) {
  console.log("This is the original, so now we are going to spin up child forks.")
  var cpuCount = require('os').cpus().length;
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  console.log("This is a child that has been forked.")
}

cluster.on('exit', function (worker) {
  console.log('Worker ' + worker.id + ' died :(');
  cluster.fork();
});