const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let MSGS = ['test'];

io.on('connection', socket => {
  console.log('connection', socket.id);

  
  socket.on('send-message', (msg) => {
    console.log('receved message', msg);
    io.emit('msg-info', (msg));
  });
});
  
// io.on('connection', socket => {
//   socket.emit('msgs', {msgs: MSGS});

//   socket.on('send-msg', (msg) => {
//     console.log('msg recieved', msg);
//     if(MSGS.length === 10){
//       MSGS.push(msg);
//       MSGS.shift();
//     } else {
//       io.emit('msgs', {msgs: MSGS});
//     };
//   });
// });

const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});