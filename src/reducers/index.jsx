import { combineReducers } from 'redux';
import todos from './todoReducers';
import filterTodo from './filterReducers';

const rootReducer = combineReducers({
  todos,
  filterTodo
});
  
export default rootReducer;