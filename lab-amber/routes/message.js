'use strict';

const express = require('express');
const router = express.Router();

const Message = require('../models/message.js');

router.get('/messages', (req, res) => {
  Message.find({})
  .then(messages => {
    console.log('1. get messages', messages);
    messages.reverse();
    res.send(messages);
  }).catch(err => {
    console.error(err);
  });
});

router.post('/messages', (req, res) => {
  console.log('1. req body', req.body);
  Message.create({
    userId: req.body.userId,
    userName: req.body.userName,
    message: req.body.message,
  }).then(() => {
    return Message.find({});
  }).then(messages => {
    console.log('2. messages', messages);
    messages.reverse();
    res.send(messages);
  })
  .catch(err => {
    console.error(err);
  });
});

module.exports = router;