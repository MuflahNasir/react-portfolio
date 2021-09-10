import React from 'react';
import { Container, Row, Col, Carousel, Form, Button } from 'react-bootstrap';
// import img from '../assets/img/face2.png';
const Reviews = () => {
  return (
    // caraousel section start
    <Container fluid className='sdm-bg'>
      <Row>
        <div className='overlay'></div>
        {/* testimonials slider */}
        <Container>
          <Row>
            <Col md={12}>
              <Carousel indicators={false}>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='holder.js/800x400?&bg=07AAF5'
                    alt='First slide'
                  />
                  <Carousel.Caption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. !
                    </p>
                    <small>Danial Munsif</small>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='holder.js/800x400?&bg=07AAF5'
                    alt='First slide'
                  />
                  <Carousel.Caption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. !
                    </p>
                    <small>Hamza Kazmi</small>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='holder.js/800x400?&bg=07AAF5'
                    alt='First slide'
                  />
                  <Carousel.Caption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. !
                    </p>
                    <small>Hamza</small>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
    // carosel section end
  );
};

export default Reviews;
