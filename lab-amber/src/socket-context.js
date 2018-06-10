import io from 'socket.io-client';

const socket = io('http://localhost:3000');
  socket.on('connect', () => {
  sessionStorage.setItem('userId', socket.id);
  sessionStorage.setItem('userName', socket.id);
});

export default socket;

