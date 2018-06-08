import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Chatter from './Chatter';
import ChatDisplay from './ChatDisplay';

class App extends Component {
    render() {
        return <Fragment>
            <h1>Chat App</h1>
            <p>Welcome to Our Chat App</p>
            <Chatter />
            <ChattDisplay />
        </Fragment>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);