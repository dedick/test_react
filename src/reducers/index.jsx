import { combineReducers } from 'redux';
import gnomes from './gnomesReducers';
import filter from './filterReducers';

const rootReducer = combineReducers({
  gnomes,
  filter
});
  
export default rootReducer;