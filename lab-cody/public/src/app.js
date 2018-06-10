import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import ChatEntry from './chatEntry'
import ChatDisplay from './chatDisplay'
const io = require('socket.io');



class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>My Socket IO App</h1>
        <p>Welcome!</p>
        <ChatEntry />
        <ChatDisplay></ChatDisplay>

      </Fragment>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
