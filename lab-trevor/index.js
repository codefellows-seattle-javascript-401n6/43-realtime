var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



let MSGS = ['test', 'help'];

io.on('connection', function(socket){
  socket.emit('msgs', {msgs: MSGS});

  socket.on('send-msg', (msg) => {
    console.log('msg received')
    if(MSGS.length === 10){
      MSGS.push(msg)
      MSGS.shift()
    }else{
    MSGS.push(msg);
    }
    io.emit('msgs', {msgs: MSGS});
  });
});


const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

http.listen(process.env.PORT, function(){
  console.log('listening on *:3000');
});
