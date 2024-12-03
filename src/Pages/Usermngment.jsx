import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';

function Usermngment() {
    return (
        <>
            <Container className="mt-5">
                <h2 className="text-center fw-bold mb-4">User Management Dashboard</h2>
                <Row className="justify-content-center">
                    {/* Add User Card */}
                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="text-center shadow-lg hover-shadow border-0" style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)', color: '#fff' }}>
                            <Card.Body>
                                <div className="bg-white rounded-circle d-inline-block p-4 mb-3">
                                    <i className="fas fa-user-plus fa-3x text-primary"></i>
                                </div>
                                <Card.Title className="fs-4 fw-bold">Add User</Card.Title>
                                <Card.Text className="fs-5">
                                    Quickly create a new user and assign them a role.
                                </Card.Text>
                                <Button variant="light" className="btn-rounded px-4 text-primary fw-bold">
                                    Add New User
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* User List Table */}
                <Row>
                    <Col sm={12}>
                        <Card className="shadow-lg hover-shadow">
                            <Card.Body>
                                <h5 className="fs-4 fw-bold text-dark mb-4">User List</h5>
                                <Table striped bordered hover responsive>
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>John Doe</td>
                                            <td>johndoe@example.com</td>
                                            <td>Admin</td>
                                            <td>
                                                <Button variant="warning" size="sm" className="mx-1 btn-sm-rounded">
                                                    <i className="fas fa-edit"></i> Edit
                                                </Button>
                                                <Button variant="danger" size="sm" className="mx-1 btn-sm-rounded">
                                                    <i className="fas fa-trash-alt"></i> Delete
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jane Smith</td>
                                            <td>janesmith@example.com</td>
                                            <td>User</td>
                                            <td>
                                                <Button variant="warning" size="sm" className="mx-1 btn-sm-rounded">
                                                    <i className="fas fa-edit"></i> Edit
                                                </Button>
                                                <Button variant="danger" size="sm" className="mx-1 btn-sm-rounded">
                                                    <i className="fas fa-trash-alt"></i> Delete
                                                </Button>
                                            </td>
                                        </tr>
                                        {/* Add more rows dynamically */}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Usermngment;
