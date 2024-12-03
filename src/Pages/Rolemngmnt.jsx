import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';

function Rolemngmnt() {
  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center fw-bold mb-4">Role Management</h2>
        <Row className="justify-content-center">
          {/* Add Role Card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              className="text-center shadow-lg hover-shadow border-0"
              style={{ background: 'linear-gradient(to right, #00b09b, #96c93d)', color: '#fff' }}
            >
              <Card.Body>
                <div className="bg-white rounded-circle d-inline-block p-4 mb-3">
                  <i className="fas fa-plus-circle fa-3x text-success"></i>
                </div>
                <Card.Title className="fs-4 fw-bold">Add Role</Card.Title>
                <Card.Text className="fs-5">
                  Create new roles and assign permissions to users.
                </Card.Text>
                <Button variant="light" className="btn-rounded px-4 text-success fw-bold">
                  Add New Role
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Role List Table */}
        <Row>
          <Col sm={12}>
            <Card className="shadow-lg hover-shadow">
              <Card.Body>
                <h5 className="fs-4 fw-bold text-dark mb-4">Role List</h5>
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Role Name</th>
                      <th>Permissions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Admin</td>
                      <td>Manage Users, Manage Roles</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Editor</td>
                      <td>Edit Content, Manage Posts</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Viewer</td>
                      <td>View Reports, Read-Only Access</td>
                    </tr>
                    {/* Add more rows as necessary */}
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

export default Rolemngmnt;
