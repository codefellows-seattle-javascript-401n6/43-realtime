'use strict';

import React from 'react';
import {
  createStore,
  // applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
// import logger from '../middleware/logger';
// import thunk from '../middleware/thunk';

import reducers from '../reducers/';
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(logger, thunk),
);

import HomePage from './homepage.jsx';

class App extends React.Component {
  render() {
    return (
			<Provider store={store}>
				<BrowserRouter>
					<Route exact path='/' component={HomePage}/>
				</BrowserRouter>
			</Provider>
    )
  }
}

export default App;