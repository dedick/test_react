import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, searched) => {
  if (searched) {
    return todos.filter(t => t.name.toLowerCase().includes(searched.toLowerCase()));
  }
  return todos;
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.items, state.filterTodo.search)
});

export default connect(mapStateToProps)(TodoList);