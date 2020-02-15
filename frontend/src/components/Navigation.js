import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navigation = () => (
  <Nav variant="tabs" defaultActiveKey="/">
    <Nav.Item>
      <Nav.Link>
        <Link to="/">Home</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <Link to="/cart">Cart</Link>
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Navigation;
