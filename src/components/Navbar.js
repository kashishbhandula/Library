import React from "react";
import ReactDOM from "react-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
const Menu = () => {
  const style = {
    
    justifyContent:"center"
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container style={style}>
          <Navbar.Brand href="#home">
            <b>LIBRARY</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Menu;
