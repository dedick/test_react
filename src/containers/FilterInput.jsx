import { connect } from 'react-redux';

import {
  filterList,
  updatePageNumber,
  updateNumberElementDisplay 
} from '../actions/actions';

import Filter from '../components/Filter';

const mapStateToProps = (state) => ({
  totalPage: state.filter.totalPage,
  page: state.filter.pageNumber,
  elementsFiltered: state.filter.numberElementFiltered,
  numberElementToDisplay: state.filter.numberElementToDisplay
});

const mapDispatchToProps = dispatch => ({
  callbackInputSearch: search => dispatch(filterList(search)),
  callbackPageNumber: page => dispatch(updatePageNumber(page)),
  callbackNumberElementDisplay: number => dispatch(updateNumberElementDisplay(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);