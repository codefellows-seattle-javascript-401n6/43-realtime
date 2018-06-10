import {combineReducers} from 'redux';

import messageReducer from './message.js';

export default combineReducers({
  messages: messageReducer,
});