import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Img from 'react-cool-img';

import loadingImage from '../assets/loading.jpeg';

const GnomeElementList = ({ name, thumbnail }) => 
  <ListGroup.Item>
    <Img
      placeholder={loadingImage}
      src={thumbnail}
      alt="Img not found"
      className="list_gnome_image"
    />
    {name}
  </ListGroup.Item>;


GnomeElementList.propTypes = {
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

export default GnomeElementList;