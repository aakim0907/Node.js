import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { home } from './reducers';

const reducers = combineReducers({
  home
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;