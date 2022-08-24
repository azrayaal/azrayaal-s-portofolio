// import React from 'react';
import '../css/navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRef } from 'react';

export default function Navbaar() {
  const linkref = useRef();

  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Navbar className="navbar " expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold">
          azrayaal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end ml-auto" style={{ width: '100%' }}>
            <Nav.Link href="#about" className="text-white fw-bold">
              About
            </Nav.Link>
            <Nav.Link href="#Projects" className="text-white fw-bold">
              Projects
            </Nav.Link>
            <NavDropdown title={<span className="text-light my-auto">Contact</span>} className="color-light fw-bold" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/azrayaal" target="blank">
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/azrayazid.rar/" target="blank">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => goto(linkref.current)} target="blank">
                Gmail
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="https://mail.google.com/mail/?view=cm&fs=1&to=azrayazidalkautsar@gmail.com&su=Recruitment" target="blank">
                Gmail
              </NavDropdown.Item> */}
              <NavDropdown.Item href="https://wa.me/6285694368835?text=Hi%20Azra%20can%20we%20talk?" target="blank">
                WhatsApp
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
