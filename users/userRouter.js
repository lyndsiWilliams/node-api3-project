const express = require('express');

const Users = require('./userDb.js');
const Posts = require('../posts/postDb.js');

const router = express.Router();


router.post('/', (req, res) => {
  // do your magic!
  Users.get(req.query).then(users => {
    res.status(200).json(users);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: "Error retrieving the posts" });
  });
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});


// Custom middleware

// Validates the user id on every request that expects a user id parameter
function validateUserId(req, res, next) {
  // do your magic!
  const { id } = req.params;
  Users.getById(id).then(user => {
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json({ error: "The specified user does not exist" })
    }
  }).catch(err => console.log(err));
}

// Validates the body on a request to create a new user
function validateUser(req, res, next) {
  // do your magic!
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "Name required" });
  } else if (typeof name != "string") {
    res.status(400).json({ error: "Name must be a string" })
  } else {
    next();
  }
}

// Validates the body on a request to create a new post
function validatePost(req, res, next) {
  // do your magic!
  const { id: user_id } = req.params;
  const { text } = req.body;

  if (!req.body) {
    res.status(400).json({ error: "Post requires body" });
  } else if (!text) {
    res.status(400).json({ error: "Post requires text" });
  } else {
    req.body = { user_id, text };
    next();
  }
}

module.exports = router;