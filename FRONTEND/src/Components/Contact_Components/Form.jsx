import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="contact-section py-5 position-relative overflow-hidden">
      {/* Animated Stars */}
      <div className="star star-1"></div>
      <div className="star star-2"></div>
      <div className="star star-3"></div>

      <Container>
        {/* Heading */}
        <Row className="justify-content-center mb-4 text-center">
          <Col lg={8}>
            <h3 className="fw-bold mb-3">OUR OFFICE</h3>
            <p className="text-secondary">
              Etiam convallis, felis quis dapibus dictum, libero mauris luctus nunc,
              non fringilla purus ligula non justo. Non fringilla purus ligula non justo.
            </p>
          </Col>
        </Row>

        <Row className="align-items-start">
          {/* Office Info */}
          <Col md={6} className="mb-4 mb-md-0">
            <Row>
              <Col sm={6} className="mb-4">
                <h6 className="fw-bold text-uppercase mb-3 text-secondary">BARCELONA</h6>
                <p className="mb-1 text-secondary">198 West 21th Street, Suite 721</p>
                <p className="mb-1 text-secondary">Barcelona 20020</p>
                <p className="mb-1 text-secondary">
                  <i className="bi bi-envelope me-2"></i>
                  all4home@example.com
                </p>
                <p className="text-secondary">
                  <i className="bi bi-telephone me-2 text-secondary"></i>
                  +88 (0) 101 0000 000
                </p>
              </Col>

              <Col sm={6}>
                <h6 className="fw-bold text-uppercase mb-3 text-secondary">NEW YORK</h6>
                <p className="mb-1 text-secondary">198 West 21th Street, Suite 721</p>
                <p className="mb-1 text-secondary">New York 20020</p>
                <p className="mb-1 text-secondary">
                  <i className="bi bi-envelope me-2"></i>
                  all4home@example.com
                </p>
                <p className="text-secondary">
                  <i className="bi bi-telephone me-2"></i>
                  +88 (0) 101 0000 000
                </p>
              </Col>
            </Row>
          </Col>

          {/* Contact Form */}
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>
              <Button
                variant="outline-dark"
                className="px-4 py-2 fw-semibold rounded-0"
                type="submit"
              >
                CONTACT US
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
