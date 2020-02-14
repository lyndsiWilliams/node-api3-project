const express = require('express');

const userRouter = require('./users/userRouter.js');

const server = express();


// middleware usage
server.use(express.json());
server.use(logger);
server.use('/user', userRouter)


// routes - DO NOT USE <h2> (or tags or anything like it)
server.get('/', (req, res) => {
  res.send(`Let's write some middleware!`);
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
