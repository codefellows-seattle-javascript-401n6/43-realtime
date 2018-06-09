const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let MESSAGES = [];

io.on('connection', function(socket){
  socket.emit('msgs', {msgs: MESSAGES});

  socket.on('send-msg', (msg) => {
    console.log('msg received')
    if(MESSAGES.length === 15){
      MESSAGES.push(msg)
      MESSAGES.shift()
    }else{
    MESSAGES.push(msg);
    }
    io.emit('msgs', {msgs: MESSAGES});
  });
});


const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});