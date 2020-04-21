import { connect } from 'react-redux';
import GnomeList from '../components/GnomeList';

const getVisibleTodos = (todos, searched) => {
  if (searched) {
    return todos.filter(t => t.name.toLowerCase().includes(searched.toLowerCase()));
  }
  return todos;
};

const mapStateToProps = state => ({
  gnomes: getVisibleTodos(state.todos.items, state.filterTodo.search)
});

export default connect(mapStateToProps)(GnomeList);