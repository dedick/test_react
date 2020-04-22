import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import PaginationRender from './PaginationRender';
import FilterItemsNumberDisplay from './FilterItemsNumberDisplay';

const Filter = ({ callbackInputSearch, 
  callbackNumberElementDisplay, 
  callbackPageNumber, 
  page,
  elementsFiltered,
  numberElementToDisplay
}) => {
  return (
    <div className="center margin_top">
      <div>
        <Input callback={callbackInputSearch} />
        <FilterItemsNumberDisplay callback={callbackNumberElementDisplay} />
      </div>
      <PaginationRender 
        callback={callbackPageNumber} 
        page={page} 
        elementsFiltered={elementsFiltered}
        numberElementToDisplay={numberElementToDisplay}/>
    </div>
  );
};

Filter.propTypes = {
  callbackInputSearch: PropTypes.func.isRequired,
  callbackPageNumber: PropTypes.func.isRequired,
  callbackNumberElementDisplay: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  elementsFiltered: PropTypes.number.isRequired,
  numberElementToDisplay: PropTypes.number.isRequired
};

export default Filter;