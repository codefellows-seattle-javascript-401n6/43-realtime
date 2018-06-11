import dotenv from 'dotenv';
import express from 'express';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import http from 'http';
import ioClient from 'socket.io';
import config from './webpack.config';

dotenv.config();

const app = express();
const server = http.Server(app);
const io = ioClient(server);
const PORT = process.env.PORT || 3000;
const compiler = webpack(config);
const instance = middleware(compiler);

const messageHistory = [];

io.on('connection', (socket) => {
  socket.emit('send-history', messageHistory)
  console.log('connected', socket.id)
  console.log(messageHistory);
  socket.on('send-message', (message) => {
    messageHistory.push(message);
    console.log('message from server', message);
    io.emit('receive-message', messageHistory)
  })
})

app.use('public', express.static(`${__dirname}/public`));
app.use(instance);

instance.waitUntilValid(() => console.log('Packaged bundled'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: `${__dirname}/` });
});

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening to port ${PORT}`);
});
