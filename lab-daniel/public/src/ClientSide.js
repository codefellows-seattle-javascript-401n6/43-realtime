import React from 'react';


class ClientSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            totalMessages: []
        }
        this.handleName = this.handleName.bind(this);
        this.handleMessage = this.handleMessage.bind(this);

    }

    handleName(ev){
        ev.preventDefault();
        let setUsername = ev.target.value;
        this.setState({username: setUsername});
        console.log(setUsername);
    }

    handleMessage(ev){
        ev.preventDefault();
        let setMessage = ev.target.value;
        this.setState({message: setMessage});
        console.log(setMessage);
    }

    handleSubmit(ev){
        ev.preventDefault();

    }
    render() {
        return <React.Fragment>
            <form type="submit">
                <h4>Pick a username and chat away!</h4>
                <input onChange={this.handleName} type="text" placeholder="Username"></input>
                <input onChange={this.handleMessage} type="text" placeholder="Message..."></input>
                <button onClick={this.handleSubmit} type="submit">SEND</button>
            </form>

            <div className="messages">
                <h3>Messages</h3>
            </div>
        </React.Fragment>
    }
}

export default ClientSide