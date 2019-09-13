import React from "react";
import Modal from "react-bootstrap/Modal";

function GenericModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="mb-3">{props.maintitle}</h5>
        <div>
          <pre>{props.textcontent}</pre>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-outline-danger" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default GenericModal;
