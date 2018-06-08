import io from 'socket.io-client';
console.log('io is running');

const socket = io('http://localhost:3000');
socket.on('connect', () => {
    console.log('context is connected', socket.id);
});

export default socket;