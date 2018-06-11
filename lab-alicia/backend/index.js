const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let chats = [];

io.on('connection', socket => {
  console.log('connected', socket.id);
  
  socket.on('send-msg', (msg) => {
    console.log('received msg', msg);
    chats.push({msg});
    io.emit('received-msg', msg);
  });
});

const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});