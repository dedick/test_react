import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ callback }) => {
  return <input type="text" 
    onChange={(e)=>{callback(e.target.value);}} 
    placeholder="Filtre la selection" />;
};

Input.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Input;