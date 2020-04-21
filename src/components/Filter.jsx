import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const Filter = ({ callback }) => {
  return (
    <div className="center margin_top">
      <Input callback={callback} />
    </div>
  );
};

Filter.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Filter;