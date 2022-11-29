const cluster = require('cluster');

// console.log('hello: ', cluster.isMaster);

// Is the file being executed in master mode
if (cluster.isMaster) {
  //Cause index.js to be executed *again* but in "child" mode
  console.log('hello: ');
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  // I'm a child, I'm going to act like a server and do nothing else
  const express = require('express');
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(6000);
    res.send('hello');
  });
  app.get('/fast', (req, res) => {
    doWork(5000);
    res.send('preaty fast');
  });

  app.listen(3000);
}
