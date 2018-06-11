import React, {Component, Fragment} from 'react';
import socket from './socket-context';

export default class ChatDisplay extends Component {
  // get info to server then render info
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    socket.on('received-msg', (msg) => {
      console.log('client reveived msg', socket.id, msg);
      const newArr = [...this.state.messages, msg];
      newArr.push(msg);
      this.setState({messages: newArr})
      console.log('newArr', newArr);
    });
    socket.on();
  }

  sendMsg = (ev) => {
    if (ev.key === "Enter") {
      console.log('client sent msg', socket.id);
      socket.emit('send-msg', {msg: ev.target.value});
    }
  }

  render() {
    return <div>
    <p> 
      <input type="text" placeholder="message" onKeyPress={this.sendMsg} />
    </p>
    <ul>
      {this.state.messages.map((msg, index) => {
        return <li key={index}>{msg.msg}</li>
        })}
    </ul>
  </div>
  }
}