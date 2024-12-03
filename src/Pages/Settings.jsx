import React from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';

function Settings() {
  return (
    <>
        <Container className="mt-5">
          <Row className="mb-4">
            {/* Settings Overview */}
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Card className="shadow-lg border-0 rounded-lg">
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold mb-3">General Settings</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="border-0 d-flex align-items-center">
                      <i className="fas fa-user-cog me-3 text-primary"></i> User Profile Settings
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex align-items-center">
                      <i className="fas fa-lock me-3 text-danger"></i> Change Password
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex align-items-center">
                      <i className="fas fa-bell me-3 text-warning"></i> Notifications
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
    
            {/* Theme Settings */}
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Card className="shadow-lg border-0 rounded-lg">
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold mb-3">Theme Settings</Card.Title>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="dark-theme-switch"
                      label="Enable Dark Mode"
                      className="mb-3"
                      style={{ fontSize: '16px' }}
                    />
                    <Form.Group className="mb-3">
                      <Form.Label className="fs-5">Primary Color</Form.Label>
                      <Form.Control as="select" className="custom-select">
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Red</option>
                        <option>Purple</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
    
          {/* Notifications Settings */}
          <Row>
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Card className="shadow-lg border-0 rounded-lg">
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold mb-3">Notification Settings</Card.Title>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      id="email-notifications"
                      label="Email Notifications"
                      className="mb-2 fs-5"
                    />
                    <Form.Check
                      type="checkbox"
                      id="sms-notifications"
                      label="SMS Notifications"
                      className="mb-2 fs-5"
                    />
                    <Form.Check
                      type="checkbox"
                      id="push-notifications"
                      label="Push Notifications"
                      className="fs-5"
                    />
                  </Form>
                </Card.Body>
              </Card>
            </Col>
    
            {/* Save Settings Button */}
            <Col sm={12} md={6} lg={4} className="mb-4">
              <Card className="shadow-lg border-0 rounded-lg">
                <Card.Body className="text-center">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 py-3 fw-bold"
                    style={{ boxShadow: '0px 5px 15px rgba(0, 123, 255, 0.3)' }}
                  >
                    Save Settings
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default Settings;
