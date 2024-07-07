import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ModalComponent from "./Modal";

function NavigationBar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#home">Siaga Bencana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-center"
        >
          <Nav>
            <Nav.Link href="#home" className="mx-3">
              Home
            </Nav.Link>
            <NavDropdown
              title="Penanganan Bencana"
              id="basic-nav-dropdown"
              className="mx-3"
            >
              <NavDropdown.Item href="#action/3.1">Gempa Bumi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tsunami</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Gunung Meletus
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Banjir</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tanah Longsor
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Angin Topan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kekeringan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Kebakaran Hutan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Gelombang Panas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Badai Petir</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="mx-3">
              Data Bencana
            </Nav.Link>
            <Nav.Link href="#link" className="mx-3">
              Berita Bencana
            </Nav.Link>
            <Nav.Link href="#link" className="mx-3">
              Tentang Kami
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button
              className="btn btn-primary"
              onClick={handleOpenModal}
              // style={{marginLeft:"50px"}}
              // style={{ position: "absolute", right: "250px" }}
            >
              Klik Untuk Informasi
            </button>
            <ModalComponent show={showModal} onHide={handleCloseModal} />
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
