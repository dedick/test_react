import {
  IS_FILTERED,
  PAGE_UPDATE,
  NUMBER_ELEMENT_DISPLAY,
  NUMBER_ELEMENT_FILTERED
} from '../actions/actionTypes';

const initialState = {
  search: "",
  pageNumber: 1,
  numberElementToDisplay: 10,
  numberElementFiltered: 1,
};

function filter(state = initialState, action) {
  console.log("FILTER MODERFUCKER");
  console.log(state);
  switch (action.type) {
  case IS_FILTERED:
    return { ...state, search : action.payload, pageNumber: 1 };
  case PAGE_UPDATE:
    return { ...state, pageNumber: action.payload };
  case NUMBER_ELEMENT_DISPLAY:
    return { ...state, numberElementToDisplay: action.payload, pageNumber: 1 };
  case NUMBER_ELEMENT_FILTERED:
    return { ...state, numberElementFiltered: action.payload };
  default:
    return state;
  }
}

export default filter;
