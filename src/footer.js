import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import "./Logo.png";
const Footer = () => {
  return (
    <footer className="footer text-white py-4">
      <Container>
        <Row className="align-items-start ms-4">
          <Col md={2}>
            <img src="./Logo.png" alt="Logo" className="footer-logo" />
          </Col>
          <Col md={2}>
            <h5>Product</h5>
            <ul className="list-unstyled">
              <li>Course Enrollment</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Learn</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Phone: +1234567890</li>
              <a href="mailto" className="maila">
                {" "}
                <li>Email: info@example.com</li>
              </a>
            </ul>
          </Col>
        </Row>
      </Container>
      <p className="foooterp">
        {" "}
        © 2021 JD Lab. All rights reserved. | Privacy Policy | Terms of Use
      </p>
    </footer>
  );
};

export default Footer;
