import React from "react";
import menu from "../../Utils/images/menu.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav,  } from "react-bootstrap";
import "../Navi/Navi.css";
function Navi() {

    
 

  return (
    <Navbar collapseOnSelect expand="xxl" id='nav'>
  <Navbar.Toggle style={{border: 'none'}} aria-controls="responsive-navbar-nav">
    <img alt='toggle' src={menu}/>
  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#/">Home</Nav.Link>
      <Nav.Link href="#/about">About Me</Nav.Link>
      <Nav.Link href="#/projects">My Projects!</Nav.Link>
      <Nav.Link href="#/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navi;
