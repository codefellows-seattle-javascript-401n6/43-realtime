import React from 'react';
import socket from '../socket-context.js';

class HomePage extends React.Component {

  // componentDidMount() {
  //   socket.on('message-info',  messages => {
  //     console.log('messages in the front end connection', messages);
  //   });
  // }

  render() {
    return <React.Fragment>
      <p>Hello World!</p>
    </React.Fragment>
  }
}

export default HomePage;

