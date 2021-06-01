import React, { useState } from "react";
import menu from "../../src/Utils/images/menu.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, useAccordionToggle } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function Navi() {
  const [show, setShow] = useState(true);
  function CustomToggle({ eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () => setShow(!show));

    return (
      <button
        type="button"
        style={{ border:'none' }}
        onClick={decoratedOnClick}
      >
        {" "}
        <img
          alt=""
          src={menu}
          width="46"
          height="46"
          className="d-inline-block align-top"
        />
      </button>
    );
  }

  return (
    <Navbar bg="light" style={{backgroundColor: '#adb5bd'}}>
      <Navbar.Brand>
        <Accordion>
          <CustomToggle eventKey="0"></CustomToggle>
          <Accordion.Collapse eventKey="0">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About me</Nav.Link>
              <Nav.Link href='/Projects'>Projects</Nav.Link>
              <Nav.Link href='/Contact'>Contact
              </Nav.Link>
            </Nav>
          </Accordion.Collapse>
        </Accordion>
      </Navbar.Brand>
      <Navbar.Brand
        style={show ? { display: "inline-block" } : { display: "none" }}
      >
        Learn More
      </Navbar.Brand>
    </Navbar>
  );
}

export default Navi;
