const express = require('express');

const Posts = require('./postDb.js');

const router = express.Router();

// GET all posts
router.get('/', (req, res) => {
  // do your magic!
});


// GET post by ID
router.get('/:id', (req, res) => {
  // do your magic!
});

// DELETE post
router.delete('/:id', (req, res) => {
  // do your magic!
});

// UPDATE post
router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
