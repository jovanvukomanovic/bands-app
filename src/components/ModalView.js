import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalView({ modalBand, show, handleClose }) {
  console.log(modalBand);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{modalBand.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalBand.info}
        {<img src={modalBand.img_url} alt="" style={{ marginTop: " 15px" }} />}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}
export default ModalView;
