import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VisibleGnomeList from '../containers/VisibleGnomeList';
import FilterInput from '../containers/FilterInput';

import { fetchGnomeList } from '../actions/actions';

import Loader from '../components/Loader';

class HomePage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchGnomeList());
  }
  renderize() {
    const { isLoading, hasErrors } = this.props;
    if (isLoading) {
      return <Loader />;
    } else if (hasErrors){
      return <p>Error occured..</p>;
    }
    return <VisibleGnomeList />;
  }
  render() {
    return (
      <div>
        <FilterInput />
        <hr/>
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
    isLoading: state.gnomes.isLoading,
    todos: state.gnomes.items,
    hasErrors: state.gnomes.hasErrors,
  };
}



export default connect(mapStateToProps)(HomePage);