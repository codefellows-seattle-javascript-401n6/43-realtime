'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('YOOOOO')
})




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})