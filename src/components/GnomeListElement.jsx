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
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  hair_color: PropTypes.string.isRequired,
  professions: PropTypes.array.isRequired,
  friends: PropTypes.array.isRequired
};

export default Todo;