import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <Fragment>
      <h1>My Socket IO App</h1>
      <p>Welcome!</p>
    </Fragment>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);