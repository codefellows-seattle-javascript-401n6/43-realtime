'use strict';

const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  message: String,
  timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('City', MessageSchema);