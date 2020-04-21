import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ isVisible,text }) => 
  <li
    style={{
      textDecoration: isVisible ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>;


Todo.propTypes = {
  id: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;