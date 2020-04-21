import React from 'react';
import PropTypes from 'prop-types';
import GnomeListElement from './GnomeListElement';

const TodoList = ({ gnomes }) => 
  <ul>
    {gnomes.map(gnome => {
      return <GnomeListElement key={gnome.id} {...gnome} />;
    }
    )}
  </ul>;


TodoList.propTypes = {
  gnomes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isVisible: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

export default TodoList;