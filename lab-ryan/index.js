let app = require('express');
let http = require('http').Server(app);
let io = require('socket.io')('http');

let allChats = [];

io.on('connect', socket => {
  console.log('connected', socket.id);
  console.log('sending stuff', allChats);
  io.emit('chat-info', {chat});

  socket.on('chatting', () => {
    console.log('got chat');
    chat++;
    console.log('broadcasting chats', allChats);
    io.emit('chat-info', {allChats});
  });
});

const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});