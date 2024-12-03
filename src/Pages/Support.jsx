import React from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';

function Support() {
  return (
    <>
        <Container className="mt-5">
          <Row className="mb-4">
            {/* Support Request Form */}
            <Col sm={12} md={6} lg={6} className="mb-4">
              <Card className="shadow-lg border-0 rounded-lg bg-light">
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold mb-3 text-center text-primary">Submit a Support Request</Card.Title>
                  <Form>
                    <Form.Group controlId="name" className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" className="border-0 rounded-3" />
                    </Form.Group>
    
                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" className="border-0 rounded-3" />
                    </Form.Group>
    
                    <Form.Group controlId="message" className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Describe your issue..." className="border-0 rounded-3" />
                    </Form.Group>
    
                    <Button variant="primary" type="submit" className="w-100 py-2 rounded-pill shadow-sm">
                      Submit Request
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
    
            {/* FAQs Section */}
            <Col sm={12} md={6} lg={6} className="mb-4">
              <Card className="shadow-lg border-0 rounded-lg bg-light">
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold mb-3 text-center text-primary">Frequently Asked Questions</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="border-0 hover-shadow">
                      <strong>How do I reset my password?</strong>
                      <p>You can reset your password by clicking the 'Forgot Password' link on the login page.</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 hover-shadow">
                      <strong>What is the best way to contact support?</strong>
                      <p>The best way to contact us is through the support request form on this page.</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 hover-shadow">
                      <strong>How can I change my email address?</strong>
                      <p>You can change your email address through your account settings in the dashboard.</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 hover-shadow">
                      <strong>Can I cancel my subscription?</strong>
                      <p>Yes, you can cancel your subscription anytime from the account settings page.</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default Support;
