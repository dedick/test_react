import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ isVisible,name }) => 
  <li
    style={{
      textDecoration: isVisible ? 'line-through' : 'none'
    }}
  >
    {name}
  </li>;


Todo.propTypes = {
  id: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default Todo;