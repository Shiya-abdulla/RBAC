import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Adduser() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="light" onClick={handleShow} className="btn-rounded px-4 text-primary fw-bold">
                Add New User
            </Button>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
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
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Adduser