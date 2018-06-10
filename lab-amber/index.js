'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// const http = require('http').Server(app);
// const io = require('socket.io')(http, {origins: '*:*'});
const fetch = require('node-fetch');

const MessageRouter = require('./routes/message.js');

mongoose.connect(process.env.MONGODB_URI);

let corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', MessageRouter);

// io.on('connection', socket => {
//   console.log('1. connected:', socket.id);
//   fetch(`http://localhost:${PORT}/api/weather`)
//   .then(messages => {
//     console.log('2. server fetch initial', messages);
//     io.emit('message-info', messages);
//   });
// });

app.use(express.static('./public'));

const PORT = process.env.SERVER_PORT || 3000;

let server = app.listen(PORT, () => {
  console.log('Listening in at http://localhost:' + PORT);
});

const io = require('socket.io').listen(server);

const Message = require('./models/message.js');

io.on('connection', socket => {
  console.log('1. connected:', socket.id);

  Message.find({})
  .then(messages => {
    console.log('1. get messages', messages);
    messages.reverse();
    io.emit('message-info', messages);
  }).catch(err => {
    console.error(err);
  });
});