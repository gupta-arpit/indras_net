import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let home = '/';
if (process.env.NODE_ENV === 'production') {
  home = 'https://gcallah.github.io/indras_net/webapp.html#/';
}

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to={home}>
          HOME
        </Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={Link}
            to="https://gcallah.github.io/indras_net/index.html"
          >
            ABOUT
          </Nav.Link>
          <Nav.Link as={Link} to="https://github.com/gcallah/indras_net/">
            SOURCE CODE
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
