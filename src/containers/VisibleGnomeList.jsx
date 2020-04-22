import { connect } from 'react-redux';
import { updateNumberElementFiltered } from '../actions/actions';
import GnomeList from '../components/GnomeList';

const getVisibleTodos = (todos, filter) => {
  console.log("GETVISIBLETODOS");
  let result;
  let { search, pageNumber, numberElementToDisplay } = filter;

  if (search) {
    result = todos.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  } else {
    result = todos;
  }
  const start = pageNumber > 1 ? (pageNumber - 1) * numberElementToDisplay : 0;
  const end = start + numberElementToDisplay;
  return result.slice(start, end);
};

const getFiltered = (todos, filter) => {
  let result;
  let { search } = filter;
  if (search) {
    result = todos.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  } else {
    result = todos;
  }
  return result;
};

const mapStateToProps = state => ({
  gnomes: getVisibleTodos(state.gnomes.items, state.filter),
  gnomesFilteredNumber: getFiltered(state.gnomes.items, state.filter).length
});

const mapDispatchToProps = (dispatch) => ({
  callbackElementFiltered: number => dispatch(updateNumberElementFiltered(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(GnomeList);