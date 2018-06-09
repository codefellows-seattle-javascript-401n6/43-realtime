const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let MSGS = [];

io.on('connection', socket => {
  socket.emit('messages', {messages: MSGS});

  socket.on('send-message', (message) => {
    console.log('message recieved');
    if(MSGS.length === 10){
      MSGS.push(message);
      MSGS.shift();
    } else {
      io.emit('messages', {messages: MSGS});
    };
  });
});

const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});