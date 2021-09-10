import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const AboutMe = () => {
  return (
    //  About me Section Start
    <Container>
      <Row className='justify-content-center'>
        <Col md={10} sm={12}>
          <Row>
            <Col md={5} sm={4} xs={12}>
              <h3>
                <i className='fa fa-user'></i>About me
              </h3>
              <div className='block'>
                <p>
                  I am a passionate User Experience and User Interface Designer
                  who has been working in this field for more than 3 years now.
                </p>
                <p>
                  You have an idea, you need someone to bring it ot life. Or you
                  already have a product that needs to be redined to meet the
                  demand of 2017 users!. This is where i come in! With my
                  knowledge and creativity. I can take your idea, your product
                  to the next level. Let's have a chat and discuss your idea!
                </p>
              </div>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <h3>
                <i className='fa fa-building'></i>Work history
              </h3>
              <div className='block'>
                <h4>Product Manager</h4>
                <ul className='icon-list'>
                  <li>
                    <i className='fa fa-building'></i> Dropbox
                  </li>
                  <li>
                    <i className='fa fa-clock-o'></i> 2017-Present
                  </li>
                </ul>
              </div>
              <div className='block'>
                <h4> Senior UX Designer</h4>
                <ul className='icon-list'>
                  <li>
                    <i className='fa fa-building'></i> Dropbox
                  </li>
                  <li>
                    <i className='fa fa-clock-o'></i> 2017-Present
                  </li>
                </ul>
              </div>
              <div className='block'>
                <h4>UX Design Intern</h4>
                <ul className='icon-list'>
                  <li>
                    <i className='fa fa-building'></i> Dropbox
                  </li>
                  <li>
                    <i className='fa fa-clock-o'></i> 2017-Present
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={4} xs={6}>
              <h3>
                <i className='fa fa-building'></i>Work history
              </h3>
              <div className='block'>
                <h4>Product Manager</h4>
                <ul className='icon-list'>
                  <li>
                    <i className='fa fa-building'></i> Dropbox
                  </li>
                  <li>
                    <i className='fa fa-clock-o'></i> 2017-Present
                  </li>
                </ul>
              </div>
              <div className='block'>
                <h4> Senior UX Designer</h4>
                <ul className='icon-list'>
                  <li>
                    <i className='fa fa-building'></i> Dropbox
                  </li>
                  <li>
                    <i className='fa fa-clock-o'></i> 2017-Present
                  </li>
                </ul>
              </div>
              <div className='block'>
                <h4>UX Design Intern</h4>
                <ul className='icon-list'>
                  <li>
                    <i className='fa fa-building'></i> Dropbox
                  </li>
                  <li>
                    <i className='fa fa-clock-o'></i> 2017-Present
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    //  About me Section End
  );
};

export default AboutMe;
