import { combineReducers } from 'redux';
import gnomes from './GnomesReducers';
import filter from './FilterReducers';

const rootReducer = combineReducers({
  gnomes,
  filter
});
  
export default rootReducer;