import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <>
      <div className=" container-fluid bg-dark text-light py-5 mt-auto">
        
          <Row className="text-center">
            {/* Left Column */}
            <Col xs={12} md={6} className="mb-4 mb-md-0 text-light">
              <h5 className="font-weight-bold mb-2">RBAC Dashboard</h5>
              <p className="mb-0">Manage users, roles, and permissions with ease.</p>
            </Col>

            {/* Right Column (Social Links) */}
            <Col xs={12} md={6}>
              <h5 className="font-weight-bold mb-3">Follow Us</h5>
              <div className="d-flex justify-content-center">
                <a
                  href="https://facebook.com"
                  className="text-white mx-3 icon-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f fa-2x"></i> {/* Font Awesome Facebook Icon */}
                </a>
                <a
                  href="https://twitter.com"
                  className="text-white mx-3 icon-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-2x"></i> {/* Font Awesome Twitter Icon */}
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-white mx-3 icon-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-2x"></i> {/* Font Awesome LinkedIn Icon */}
                </a>
                <a
                  href="https://github.com"
                  className="text-white mx-3 icon-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i> {/* Font Awesome GitHub Icon */}
                </a>
              </div>
            </Col>
          </Row>

          <Row className="text-center mt-4">
            <Col xs={12}>
              <p className="font-weight-light mb-0">&copy; 2024 RBAC Dashboard. All rights reserved.</p>
            </Col>
          </Row>
       
      </div>
    </>
  );
}

export default Footer;
