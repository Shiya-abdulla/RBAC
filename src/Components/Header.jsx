import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <>
      <Navbar expand="lg" bg="primary" variant="dark" >
        <Container>
          <Navbar.Brand href="#home" className="fs-3 font-weight-bold">RBAC Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Dashboard Link */}
              <Nav.Link as={Link} to="/" className="d-flex align-items-center">
                <i className="fas fa-tachometer-alt me-2"></i>
                Dashboard
              </Nav.Link>

              {/* User Management Link */}
              <Nav.Link as={Link} to="/users" className="d-flex align-items-center">
                <i className="fas fa-users me-2"></i>
                User Management
              </Nav.Link>

              {/* Role Management Link */}
              <Nav.Link as={Link} to="/roles" className="d-flex align-items-center">
                <i className="fas fa-user-shield me-2"></i>
                Role Management
              </Nav.Link>

              {/* Dropdown for Admin Tools */}
              <NavDropdown title="Admin Tools" id="admin-nav-dropdown">
                <NavDropdown.Item as={Link} to="/audit" className="d-flex align-items-center">
                  <i className="fas fa-clipboard-list me-2"></i>
                  Audit Logs
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/settings" className="d-flex align-items-center">
                  <i className="fas fa-cogs me-2"></i>
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/supports" className="d-flex align-items-center">
                  <i className="fas fa-life-ring me-2"></i>
                  Support
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
