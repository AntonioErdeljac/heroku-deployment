const bodyParser = require('body-parser');
const http = require('http');

const config = require('./config');
const db = require('./db');

http.createServer((req, res) => {
  return db.Tests.get()
    .then((tests) => {
      res.write(JSON.stringify(tests));
      res.end();
    });
}).listen(config.port);
