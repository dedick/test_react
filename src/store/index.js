import { createStore, applyMiddleware } from 'redux';
import thunkMiddleare from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleare, loggerMiddleware));

export default store;
