import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <Navbar bg="dark" className="p-3">
      <Container>
        <h3 className="text-light">Countries App</h3>
      </Container>
    </Navbar>
  );
};

export default NavBar;
