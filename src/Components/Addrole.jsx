import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addrole() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="light" onClick={handleShow} className="btn-rounded px-4 text-success fw-bold">
                Add New Role
            </Button>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
            <input type="number" className="form-control mb-3" placeholder='ID'/>
            <input type="text" className="form-control mb-3" placeholder='ROLE NAME'/>
            <input type="text" className="form-control mb-3" placeholder='PERMISSION'/>
           

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

export default Addrole