'use strict';
const express = require('express');
const app = express();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

const socket = require('socket.io');


const server = app.listen(3000, () => {
    console.log(`http://localhost:3000`)
});

const io = socket(server);

const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());


let MESSAGES = ['test', 'help'];

io.on('connection', function (socket) {
    console.log(socket.id);
    socket.emit('messages', {messages: MESSAGES})

    socket.on('SEND_MESSAGE', function (messages) {
        MESSAGES.push(messages);
        io.emit('messages', {messages: MESSAGES})
    })
})

