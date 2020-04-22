import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

let store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer,
    compose(applyMiddleware(thunkMiddleware, loggerMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
} else {
  store = createStore(rootReducer,
    compose(applyMiddleware(thunkMiddleware)));
}

export default store;
