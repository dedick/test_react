import { connect } from 'react-redux';

import { filterTodo } from '../actions/actions';
import Filter from '../components/Filter';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  callback: search => dispatch(filterTodo(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);