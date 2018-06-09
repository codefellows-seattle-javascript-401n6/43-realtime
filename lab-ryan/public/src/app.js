import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

// import Chatter from './Chatter';
// import ChatDisplay from './ChatDisplay';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
    console.log('client connected');
})

class App extends Component {
    state = {currentTime: Date.now().toString()}

    componentDidMount() {
        socket.on('tick', (data) => {
            console.log('client tick', data);
            this.setState({currentTime: data.currentTime})
        })
    }

    sendClick = () => {
        console.log('client clicked', socket.id);
        socket.emit('send-click');
    }

    render() {
        return <Fragment>
            <h1>Socket IO App</h1>
            <p>Welcome to Our App</p>
            <p>
                <button onClick={this.sendClick}>Click</button>
            </p>
            <p>Current Time: {this.state.currentTime}</p>
            {/* <Chatter />
            <ChattDisplay /> */}
        </Fragment>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);