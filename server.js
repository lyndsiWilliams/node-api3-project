const express = require('express');

const server = express();


// middleware usage
server.use(express.json());
server.use(logger);


// routes
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


// custom middleware

// Logs request method, request URL, and current date
function logger(req, res, next) {
  let date = new Date();

  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: http://localhost:4000${req.url}`);
  console.log(`Current date: ${date.toDateString()}`);
  next();
}

module.exports = server;
