import io from 'socket.io-client';
console.log('running io');

const socket = io('http://localhost:3000');
  socket.on('connect', () => {
  console.log('context connected', socket.id);
  sessionStorage.setItem('userInfo', {
    id: socket.id,
    userName: socket.id
  });
});

export default socket;

