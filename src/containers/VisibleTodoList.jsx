import { connect } from 'react-redux';
import GnomeList from '../components/GnomeList';

const getVisibleTodos = (todos, filter) => {
  let result;
  let { search, pageNumber, numberElementToDisplay } = filter;

  if (search) {
    result = todos.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
  } else {
    result = todos;
  }
  filter.numberElementFiltered = result.length;
  const start = pageNumber > 1 ? (pageNumber - 1) * numberElementToDisplay : 0;
  const end = start + numberElementToDisplay;
  return result.slice(start, end);
};

const mapStateToProps = state => ({
  gnomes: getVisibleTodos(state.gnomes.items, state.filter)
});

export default connect(mapStateToProps)(GnomeList);