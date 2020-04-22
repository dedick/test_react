import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Col, Row } from 'react-bootstrap';
import Img from 'react-cool-img';
import { Link } from 'react-router-dom';

import loadingImage from '../assets/loading.jpeg';

const GnomeElementList = ({ name, thumbnail, id }) => 
  <ListGroup.Item >
    <Link to={`/gnome/${id}`}>
      <Row>
        <Col>
          <Img
            placeholder={loadingImage}
            src={thumbnail}
            alt="Img not found"
            className="list_gnome_image"
          />
        </Col>
        <Col>
          {name}
        </Col>
      </Row>
    </Link>
  </ListGroup.Item>;


GnomeElementList.propTypes = {
  id: PropTypes.number.isRequired,
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