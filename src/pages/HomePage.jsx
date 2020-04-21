import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VisibleTodoList from '../containers/VisibleTodoList';
import { fetchTodos } from '../actions/actions';
import FilterInput from '../containers/FilterInput';
import Loader from '../components/Loader';

class HomePage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchTodos());
  }
  renderize() {
    const { isLoading, hasErrors } = this.props;
    if (isLoading) {
      return <Loader />;
    } else if (hasErrors){
      return <p>Error occured</p>;
    }
    return <VisibleTodoList />;
  }
  render() {
    return (
      <div>
        <FilterInput />
        { this.renderize() }
           
      </div>
    );
  }
}
HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    isLoading: state.todos.isLoading,
    todos: state.todos.items,
    hasErrors: state.todos.hasErrors,
  };
}



export default connect(mapStateToProps)(HomePage);