import React, {Component, Fragment} from 'react';
import socket from './socket-context';

export default class MessageDisplay extends Component {
  constructor(props) {
      super(props);
      this.state = {
          messages: []
      }
    }

  componentDidMount() {
    socket.on('message-info', (info) => {
      console.log('display got info', socket.id, info);
      this.setState({messages: info.message});
    });
  }

  render() {
    return <p>
      Total messages: {this.state.messages}
    </p>
  }
}