import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Edituser() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="warning" onClick={handleShow} size="sm" className="mx-1 btn-sm-rounded">
                <i className="fas fa-edit"></i> Edit
            </Button>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
            <input type="number" className="form-control mb-3" placeholder='ID'/>
            <input type="text" className="form-control mb-3" placeholder='NAME'/>
            <input type="email" className="form-control mb-3" placeholder='EMAIL'/>
            <input type="text" className="form-control mb-3" placeholder='ROLE'/>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Edituser