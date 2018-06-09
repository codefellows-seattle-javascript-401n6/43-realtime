import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('client connected!');
})

class App extends Component {
  state = {
    msgs: []
  }

  componentDidMount() {
    socket.on('msgs', (data) => {
      console.log('recieved client message', data);
      this.setState({msgs: data.msgs});
    });
  }
  

  sendMSG = (ev) => {
    ev.preventDefault();
    if(ev.target.msg.value){
    socket.emit('send-msg', ev.target.msg.value);
    }
    ev.target.reset();
  };
  
  

  render() {
    return <Fragment>
      <h1>My socket app</h1>
      
      <p>
        {this.state.msgs.map((msg, index) => {
          return <li key={index}>{msg}</li>
        })}

      </p>

      <form onSubmit={this.sendMSG} name="form">
        <input size="50" name="msg" placeholder="Message..."/>
        <input type="submit" value="Send Message" />
      </form>
    </Fragment>
  }
}


const root = document.getElementById('root');
ReactDOM.render(<App/>, root);