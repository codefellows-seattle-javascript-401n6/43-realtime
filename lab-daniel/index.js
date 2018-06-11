'use strict';
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


io.on('connection', function(socket){
    console.log('A user has been connected!');
})

const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

http.listen(3000, function(){
    console.log(`http://localhost:3000`)
});

