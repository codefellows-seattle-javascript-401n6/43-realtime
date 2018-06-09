import React, {Component, Fragment} from 'react';
import socket from './socket-context';

export default class MessageEntry extends Component {
  sendMessage = () => {
    console.log('client message', socket.id);
    socket.emit('send-message', 'testing...');
  }

  componentDidMount() {
    console.log('id', socket.id);
  }

  render() {
    return <Fragment>
      <p>
        <button onClick={this.sendMessage}>Send Message</button>
      </p>
    </Fragment>
  }
}