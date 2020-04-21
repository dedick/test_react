
import {
  IS_FILTERED
} from '../actions/actionTypes';

const initialState = {
  search: ""
};

function filterTodo(state = initialState, action) {
  switch (action.type) {
  case IS_FILTERED:
    return { ...state, search : action.payload };    
  default:
    return state;
  }
}

export default filterTodo;
