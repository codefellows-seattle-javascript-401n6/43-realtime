'use strict';
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());


let MESSAGES = ['test', 'help'];
io.on('connection', function(socket) {
    socket.emit('messages', {messages: MESSAGES})
    console.log('in io!');

})

http.listen(3000, () => {
    console.log(`http://localhost:3000`)
});