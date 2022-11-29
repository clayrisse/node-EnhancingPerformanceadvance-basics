const cluster = require('cluster');

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


app.listen(3000);

