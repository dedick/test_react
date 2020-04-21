import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <span>Brastlewark&lsquo;s people</span>
    </Navbar.Brand>
  </Navbar>;
};

export default Header;