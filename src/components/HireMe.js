import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const HireMe = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} className='text-center'>
          <h3>Need Any Help?</h3>
          <h4>
            <i class='fa fa-thumbs-up fa-2x'></i> I am available for freelance
            hire
          </h4>

          <nav class='cl-effect-2'>
            <a href='#contact_me'>
              <span data-hover='Hire Me'>Hire Me</span>
            </a>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default HireMe;
