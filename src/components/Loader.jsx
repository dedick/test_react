import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    
  return (
    <div id="loader" className="center">
      <div id="loader_spinner">
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
      </div>
    </div>
  );
};

export default Loader;