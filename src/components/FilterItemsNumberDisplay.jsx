import React from 'react';
import PropTypes from 'prop-types';

const FilterItemNumberDisplay = ({ callback }) => {
  return ( 
    <select type="text" 
      onChange={(e)=>{callback(e.target.value);}}
      id="select_input">
      <option>10</option>
      <option>20</option>
      <option>50</option>
      <option>100</option>
    </select>
  );
};

FilterItemNumberDisplay.propTypes = {
  callback: PropTypes.func.isRequired,
  // totalItems: PropTypes.number.isRequired
};

export default FilterItemNumberDisplay;