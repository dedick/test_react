import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import DetailGnome from '../containers/DetailGnome';

// import CharacterDetail from '../components/CharacterDetail';

const DetailPage = () => {
  let { slug } = useParams();

  const displayInformations = () => {
    return <DetailGnome id={slug} />;
  };

  return (
    <div>
      <Row>
        <Col xs="12" md={{ span: 8, offset: 2 }}>
          { displayInformations() }
        </Col>
      </Row>
    </div>
  );
};

DetailPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
  // gnome: state.gnomes
});

// Connect Redux to React
export default connect(mapStateToProps)(DetailPage);