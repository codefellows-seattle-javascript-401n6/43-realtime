'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let chats = [];

io.on('connection', socket => {
  console.log('connected', socket.id);

  io.emit('chat-info', { chats });

  socket.on('send-chatter', msg => {
    console.log('recieved chatter', msg);
    chats.push({ msg });
    io.emit('chat-info', { msg });
  });


});

const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
