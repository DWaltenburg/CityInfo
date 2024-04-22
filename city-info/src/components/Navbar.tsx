import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">City Info</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/Cities">Cities</Nav.Link>
          <Nav.Link as={Link} to="/Languages">Languages</Nav.Link>
          <Nav.Link as={Link} to="/PointsOfInterest">Points of Interest</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
