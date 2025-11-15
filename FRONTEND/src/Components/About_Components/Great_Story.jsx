import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
const Great_Story = () => {
  return (
    <>
         <section className="py-5">
        <Container style={{fontSize: "1.2rem",lineHeight: "1.9",color: "#6c6863ff",fontWeight: "400",  }}>
          <h2 className="fw-bold text-center mb-4" >Our Great Story</h2>
          <p className="text-center text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.
          </p>

          <Row className="gy-4">
            <Col md={3}>
              <div className="text-center p-3" style={{fontSize: "1.2rem",lineHeight: "1.9",color: "#6c6863ff",fontWeight: "400",  }}>
                <i className="bi bi-award fs-1 text-warning mb-2"></i>
                <h6 className="fw-bold">Discover Options</h6>
                <p className="text-muted small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center p-3" style={{fontSize: "1.2rem",lineHeight: "1.9",color: "#6c6863ff",fontWeight: "400",  }}>
                <i className="bi bi-clock fs-1 text-warning mb-2"></i>
                <h6 className="fw-bold">Always On Time</h6>
                <p className="text-muted small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center p-3" style={{fontSize: "1.2rem",lineHeight: "1.9",color: "#6c6863ff",fontWeight: "400",  }}>
                <i className="bi bi-lightbulb fs-1 text-warning mb-2"></i>
                <h6 className="fw-bold">See Our Work</h6>
                <p className="text-muted small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center p-3" style={{fontSize: "1.2rem",lineHeight: "1.9",color: "#6c6863ff",fontWeight: "400",  }}>
                <i className="bi bi-chat-left-text fs-1 text-warning mb-2"></i>
                <h6 className="fw-bold">Contact Us</h6>
                <p className="text-muted small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Great_Story