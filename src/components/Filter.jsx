import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const Filter = ({ callback }) => {
  return <Input callback={callback} />;
};

Filter.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Filter;