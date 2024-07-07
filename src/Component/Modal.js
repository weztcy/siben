import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalComponent({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Informasi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Halo selamat datang!! Ini adalah web untuk menampilkan informasi
          tentang data bencana alam yang terjadi di Indonesia.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Saya mengerti
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;