import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('client connected');
});

class App extends Component {
  state = {currentTime: Date.now().toString()}

  componentDidMount() {
    socket.on('tick', (data) => {
      console.log('client got tick', data);
      this.setState({currentTime: data.currentTime})
    })
  }

  sendClick = () => {
    console.log('client clicked', socket.id);
    socket.emit('send-click');
  }

  render() {
    return <Fragment>
      <h1>My Socket IO App</h1>
      <p>Welcome!</p>
      <p> 
        <button onClick={this.sendClick}>Click here!</button>
      </p>
      <p>
        The current time is: {this.state.currentTime}
      </p>
    </Fragment>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);