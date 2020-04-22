import React from 'react';
import PropTypes from 'prop-types';
import { Card,
  Image,
  Accordion 
} from 'react-bootstrap';


const GnomeDetailRender = ({ gnome }) => {
  return (
    <Card className="text-center" style={{ margin: "0 auto" }}>
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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
                            professions
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Text>
                  {gnome.professions.map((index) => { return index + " "; } )}
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
                            friends
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Text>
                  {gnome.friends.map((index) => { return index + " "; } )}
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card.Body>
    </Card>
  );
};

GnomeDetailRender.propTypes = {
  gnome: PropTypes.object.isRequired
};

export default GnomeDetailRender;