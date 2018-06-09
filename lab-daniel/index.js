'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);



const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

http.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})