
// import Todo from '../model/Todo'
import {
  RECEIVE_TODO_SUCCESS,
  RECEIVE_TODO_FAILURE,
  IS_LOADING
} from '../constants/ActionTypes';

const initialState = {
  items: [],
  isLoading: false,
  hasErrors: false
};

function gnomes(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_TODO_SUCCESS:
    return { ...state, isLoading: false, items: action.payload };
  case RECEIVE_TODO_FAILURE:
    return { ...state, isLoading: false, hasErrors: true };
  case IS_LOADING:
    return { ...state, isLoading: true };    
  default:
    return state;
  }
}

export default gnomes;
