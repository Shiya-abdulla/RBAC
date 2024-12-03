import React from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';

function Auditlogs() {
  return (
    <>
        <Container className="mt-5">
          <Row className="mb-4">
            <Col sm={12}>
              <Card className="shadow-lg">
                <Card.Body>
                  <h5 className="fs-4 fw-bold text-dark">Audit Logs</h5>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Action</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Example row, this should be populated dynamically */}
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Added new role "Editor"</td>
                        <td>2024-11-29 10:30 AM</td>
                        <td><span className="badge bg-success">Success</span></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>Deleted role "Viewer"</td>
                        <td>2024-11-29 11:00 AM</td>
                        <td><span className="badge bg-danger">Failed</span></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Mark Lee</td>
                        <td>Updated user permissions</td>
                        <td>2024-11-29 02:15 PM</td>
                        <td><span className="badge bg-warning">Pending</span></td>
                      </tr>
                      {/* Add more rows dynamically as needed */}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
    
          {/* Optional: Add a filter or search feature */}
          <Row>
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Card className="shadow-lg">
                <Card.Body>
                  <h5 className="fs-5">Filter Logs</h5>
                  <div className="d-flex flex-column">
                    <Button variant="outline-primary" className="mb-2">
                      <i className="fas fa-search me-2"></i> Search by User
                    </Button>
                    <Button variant="outline-secondary" className="mb-2">
                      <i className="fas fa-calendar-alt me-2"></i> Filter by Date
                    </Button>
                    <Button variant="outline-success">
                      <i className="fas fa-sync-alt me-2"></i> Refresh Logs
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default Auditlogs;
