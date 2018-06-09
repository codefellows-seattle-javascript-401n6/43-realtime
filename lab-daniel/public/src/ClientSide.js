import React from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('connected!');

})

export default class ClientSide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('http://localhost:3000');

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
            console.log('RECIEVE_MESSAGE DATA: ', data)
        });

        this.componentDidMount = {


        }

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', ev.target.message.val)
            this.setState({message: '' });
        }
    }
    

    render() {
        return <React.Fragment>
            <form className="inputForm">
                <h4>Pick a username and chat away!</h4>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Message..." ></input>
                <button onClick={this.sendMessage} type="submit">SEND</button>
            </form>

            <div className="messages">
                <h3>Messages</h3>
                <ul>
                    {this.state.messages.map(message ,inde => {
                        return (
                            <li>{this.state.username} : {this.state.message}</li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    }
}
