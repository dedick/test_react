import React from 'react';
import PropTypes from 'prop-types';
import GnomeListElement from './GnomeListElement';
import { Row, Col } from 'react-bootstrap';

const GnomeList = ({ gnomes }) => 
  <Row className="margin_top">
    {
      gnomes.map((gnome) => { 
        return <Col key={gnome.id} xs={12} md={6} lg={4}><GnomeListElement {...gnome} /></Col>; 
      })
    }
  </Row>;


GnomeList.propTypes = {
  gnomes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

export default GnomeList;