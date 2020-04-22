import { connect } from 'react-redux';

import {
  filterList,
  updatePageNumber,
  updateNumberElementDisplay 
} from '../actions/actions';

import Filter from '../components/Filter';

const totalPage = (numberElementFiltered, numberElementToDisplay) => {
  const result = Math.ceil(numberElementFiltered / numberElementToDisplay);
  return result;
};

const mapStateToProps = (state) => ({
  totalPage: totalPage(state.filter.numberElementFiltered, state.filter.numberElementToDisplay),
  page: state.filter.pageNumber
});

const mapDispatchToProps = dispatch => ({
  callbackInputSearch: search => dispatch(filterList(search)),
  callbackPageNumber: page => dispatch(updatePageNumber(page)),
  callbackNumberElementDisplay: number => dispatch(updateNumberElementDisplay(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);