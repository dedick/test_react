import { RECEIVE_TODO_FAILURE, RECEIVE_TODO_SUCCESS, IS_LOADING, IS_FILTERED } from "./actionTypes";
import { config } from '../config';
import GnomeModel from '../model/GnomeModel';


const getTodosSuccess = (todos) => {
  return { type: RECEIVE_TODO_SUCCESS, payload: todos };
};

const getTodosFailure = () => {
  return { type: RECEIVE_TODO_FAILURE };
};

function requestLoading() {
  return { type: IS_LOADING };
}

export function filterTodo(searched){
  console.log("FILTERTODO",searched);
  return { type: IS_FILTERED, payload: searched };
}

export function fetchTodos() {
  return async dispatch => {
    dispatch(requestLoading());
    try {
      const response = await fetch(config.API_URL);
      const data = await response.json();
      const todos = data["Brastlewark"].map(obj => { 
        if (GnomeModel.checkProperty(obj)) {
          return new GnomeModel(obj);
        }
        return null;
      }).filter(obj => obj != null);
      dispatch(getTodosSuccess(todos));
    } catch (error) {
      dispatch(getTodosFailure());
    }
  };
}