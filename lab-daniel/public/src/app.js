import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <Fragment>
      <h1>Messenger App</h1>
    </Fragment>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);