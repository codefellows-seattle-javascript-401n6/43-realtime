import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

// import ChatEntry from './chatEntry';
// import ChatDisplay from './chatDisplay';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('client connected');
});

class App extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    socket.on('received-msg', (msg) => {
      console.log('client reveived msg', msg);
      this.setState({messages: [...this.state.messages, msg]})
    })
  }

  sendMsg = (ev) => {
    if (ev.key === "Enter") {
      console.log('client sent msg', socket.id);
      socket.emit('send-msg', {msg: ev.target.value});
    }
  }

  render() {
    return <Fragment>
      <h1>My Socket IO App</h1>
      <h2>Welcome!</h2>
      <p>Type your message below and hit "enter" on your keyboard when ready to start your chat:</p>
      <p> 
        <input type="text" placeholder="message" onKeyPress={this.sendMsg} />
      </p>
      <ul>
        {this.state.messages.map((msg, index) => {
        return <li key={index}>{msg.msg}</li>
          })}
      </ul>
      {/* <ChatEntry /> */}
      {/* <ChatDisplay /> */}
    </Fragment>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);