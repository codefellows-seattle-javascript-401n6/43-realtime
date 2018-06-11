import React   from 'react';


export default class ClientSide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };
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
            </div>
        </React.Fragment>
    }
}
