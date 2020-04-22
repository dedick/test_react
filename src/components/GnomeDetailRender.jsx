import React from 'react';
import {
  useHistory
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card,
  Image,
  Accordion,
  ListGroup,
  Button
} from 'react-bootstrap';

const GnomeDetailRender = ({ gnome }) => {
  let history = useHistory();

  return (
    <div>
      <Button variant="warning" className="margin_top" 
        onClick={ () => history.goBack() }>
        Back
      </Button>
      <Card border="light" className="text-center">
        <Card.Header>{gnome.name}</Card.Header>
        <Card.Body>
          <Image src={gnome.thumbnail} alt={gnome.name} thumbnail/>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
              Carateristics
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Card.Text>
                  Age: {gnome.age}
                  </Card.Text>
                  <Card.Text>
                  Hair color: {gnome.hair_color}
                  </Card.Text>
                  <Card.Text>
                  Height: {gnome.height}
                  </Card.Text>
                  <Card.Text>
                  Weight: {gnome.weight}
                  </Card.Text>
                  <Card.Text>
                  Sexe: { gnome.isMale ? "M" : "F" }
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
              Professions
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ListGroup className="list-group-flush">
                    { gnome.professions.map((index, i) => {
                      return <ListGroup.Item key={i}>{index}</ListGroup.Item>; 
                    })}
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
              Friends
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ListGroup className="list-group-flush">
                    {gnome.friends.map((index, i) => {
                      return <ListGroup.Item key={i}>{index}</ListGroup.Item>; 
                    })}
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

GnomeDetailRender.propTypes = {
  gnome: PropTypes.object.isRequired
};

export default GnomeDetailRender;