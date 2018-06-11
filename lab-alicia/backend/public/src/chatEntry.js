import React, {Component, Fragment} from 'react';
import socket from './socket-context';

export default class ChatEntry extends Component {
  sendMsg() {
    console.log('client chatted', socket.id);
    socket.emit('send-chatter', 'testing...');
  }

  componentDidMount() {
    console.log('id', socket.id);
  }

  render() {
    return <Fragment>
      <p>
        <button onClick={this.sendChat}>send chat!</button>
      </p>
    </Fragment>;
  }
}