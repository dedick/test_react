import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import PaginationRender from './PaginationRender';
import FilterItemsNumberDisplay from './FilterItemsNumberDisplay';

const Filter = ({ callbackInputSearch, 
  callbackNumberElementDisplay, 
  callbackPageNumber, 
  totalPage,
  page
}) => {
  console.log(totalPage);
  return (
    <div className="center margin_top">
      <div>
        <Input callback={callbackInputSearch} />
        <FilterItemsNumberDisplay callback={callbackNumberElementDisplay} />
      </div>
      <PaginationRender callback={callbackPageNumber} totalPage={totalPage} page={page}/>
    </div>
  );
};

Filter.propTypes = {
  callbackInputSearch: PropTypes.func.isRequired,
  callbackPageNumber: PropTypes.func.isRequired,
  callbackNumberElementDisplay: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};

export default Filter;