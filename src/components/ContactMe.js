import React, { Fragment } from 'react';
import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';
import img from '../assets/img/port1.png';
import profile from '../assets/img/profile.png';

const ContactMe = () => {
  return (
    <Fragment>
      {/* // header banner section */}
      <Container fluid className='sdm-bg' id='home'>
        <Row>
          <Col>
            <div className='overlay'></div>

            {/* main menu section */}
            <ul className='nav justify-content-center w-100 margin-top-30 scroll-nav'>
              <li className='active nav-item' role='presentation'>
                <a href='#home' className='nav-link'>
                  <i className='fa fa-home'></i>
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a href='#portfolio' className='nav-link'>
                  Portfolio
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a href='#reviews' className='nav-link'>
                  Reviews
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a href='#about_me' className='nav-link'>
                  About
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a href='#expertness' className='nav-link'>
                  Services
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a href='#contact_me' className='nav-link'>
                  Contact
                </a>
              </li>
            </ul>
            {/* main menu end */}
            <div className='margin-top-76 text-center'>
              <img
                src={profile}
                className='d-inline-block profile_picture'
                alt='profile picture'
              />
            </div>
            <h1 className='text-capitalize text-center'>Jeanetter benson</h1>
            <h3 className='text-capitalize text-center'>UX/UI designer</h3>
            <hr />
            <div className='text-center margin-bottom-135'>
              <ul className='social-networks spin-icon'>
                <li>
                  <a href='https://www.facebook.com/' className='icon-facebook'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/' className='icon-twitter'>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/' className='icon-linkedin'>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href='https://pinterest.com' className='icon-pinterest'>
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href='https://instagram.com' className='icon-instagram'>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      {/* // header banner end section */}
      {/* // protifoio section start  */}
      <Container id='portfolio' className='position-relative'>
        <Row className='justify-content-center'>
          <Col sm={10}>
            <div className='text-center filter-btns'>
              <ul className='nav nav-pills'>
                <li role='presentation'>
                  <a
                    href='javascript:void(0)'
                    id='all'
                    className='btn'
                    data-mixitup-control
                    data-filter='all'
                  >
                    All
                  </a>
                </li>
                <li role='presentation'>
                  <a
                    href='javascript:void(0)'
                    className='btn'
                    data-mixitup-control
                    data-filter='.web'
                  >
                    Web
                  </a>
                </li>
                <li role='presentation'>
                  <a
                    href='javascript:void(0)'
                    className='btn'
                    data-mixitup-control
                    data-filter='.android'
                  >
                    Android
                  </a>
                </li>
                <li role='presentation'>
                  <a
                    href='javascript:void(0)'
                    className='btn'
                    data-mixitup-control
                    data-filter='.ios'
                  >
                    iOS
                  </a>
                </li>
                <li role='presentation'>
                  <a
                    href='javascript:void(0)'
                    className='btn'
                    data-mixitup-control
                    data-filter='.desktop'
                  >
                    Desktop
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <div className='mix-wrapper'>
            <Row id='effect-5'>
              <Col
                md={4}
                sm={6}
                xd={6}
                className='mix-target web'
                data-order='1'
              >
                <figure>
                  <img src={img} alt='' />
                  <figcaption>
                    <a href='#' data-toggle='modal' data-target='#myModal'>
                      <h3>momommoomomomo </h3>
                      <hr />
                      <p>hehehe</p>
                    </a>
                  </figcaption>
                </figure>
              </Col>
              <Col
                md={4}
                sm={6}
                xd={6}
                className='mix-target android'
                data-order='2'
              >
                <figure className='mb-3'>
                  <img src={img} alt='' />
                  <figcaption>
                    <a href='#' data-toggle='modal' data-target='#myModal'>
                      <h3>momommoomomomo </h3>
                      <hr />
                      <p>hehehe</p>
                    </a>
                  </figcaption>
                </figure>
              </Col>
              <Col
                md={4}
                sm={6}
                xd={6}
                className='mix-target android'
                data-order='3'
              >
                <figure>
                  <img src={img} alt='' />
                  <figcaption>
                    <a href='#' data-toggle='modal' data-target='#myModal'>
                      <h3>momommoomomomo </h3>
                      <hr />
                      <p>hehehe</p>
                    </a>
                  </figcaption>
                </figure>
              </Col>
              <Col
                md={4}
                sm={6}
                xd={6}
                className='mix-target android'
                data-order='4'
              >
                <figure>
                  <img src={img} alt='' />
                  <figcaption>
                    <a href='#' data-toggle='modal' data-target='#myModal'>
                      <h3>momommoomomomo </h3>
                      <hr />
                      <p>hehehe</p>
                    </a>
                  </figcaption>
                </figure>
              </Col>
              <Col
                md={4}
                sm={6}
                xd={6}
                className='mix-target android'
                data-order='5'
              >
                <figure>
                  <img src={img} alt='' />
                  <figcaption>
                    <a href='#' data-toggle='modal' data-target='#myModal'>
                      <h3>momommoomomomo </h3>
                      <hr />
                      <p>hehehe</p>
                    </a>
                  </figcaption>
                </figure>
              </Col>
              <Col
                md={4}
                sm={6}
                xd={6}
                className='mix-target android'
                data-order='6'
              >
                <figure>
                  <img src={img} alt='' />
                  <figcaption>
                    <a href='#' data-toggle='modal' data-target='#myModal'>
                      <h3>momommoomomomo </h3>
                      <hr />
                      <p>hehehe</p>
                    </a>
                  </figcaption>
                </figure>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      {/* // protifoio section end */}
      {/* // caraousel section start */}
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. !
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. !
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. !
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
      {/* // carosel section end */}
      {/* //  About me Section Start */}
      <Container>
        <Row className='justify-content-center' id='about_me'>
          <Col md={10} sm={12}>
            <Row>
              <Col md={5} sm={4} xs={12}>
                <h3>
                  <i className='fa fa-user'></i>About me
                </h3>
                <div className='block'>
                  <p>
                    I am a passionate User Experience and User Interface
                    Designer who has been working in this field for more than 3
                    years now.
                  </p>
                  <p>
                    You have an idea, you need someone to bring it ot life. Or
                    you already have a product that needs to be redined to meet
                    the demand of 2017 users!. This is where i come in! With my
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
                  <h4>User experience Design</h4>
                  <ul className='icon-list'>
                    <li>
                      <i className='fa fa-book'></i> Dropbox
                    </li>
                    <li>
                      <i className='fa fa-clock-o'></i> 2017-Present
                    </li>
                  </ul>
                </div>
                <div className='block'>
                  <h4> User experience Design</h4>
                  <ul className='icon-list'>
                    <li>
                      <i className='fa fa-book'></i> Dropbox
                    </li>
                    <li>
                      <i className='fa fa-clock-o'></i> 2017-Present
                    </li>
                  </ul>
                </div>
                <div className='block'>
                  <h4>User experience Design</h4>
                  <ul className='icon-list'>
                    <li>
                      <i className='fa fa-book'></i> Dropbox
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
      {/* //  About me Section End */}
      {/* // expertness section */}
      <Container fluid className='sdm-bg' id='expertness'>
        <Row>
          <div className='overlay'></div>
          <Col sm={12}>
            <h3 className='text-center'>
              <i className='fa fa-bookmark'></i>What I Do
            </h3>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col sm={4} xs={6}>
              <div className='block'>
                <i className='fa fa-android fa-3x'></i>
                <h4 className='text-uppercase'>Mobile Apps</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </Col>
            <Col sm={4} xs={6}>
              <div className='block'>
                <i className='fa fa-code fa-3x'></i>
                <h4 className='text-uppercase'>Mobile Apps</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </Col>
            <Col sm={4} xs={6}>
              <div className='block'>
                <i className='fa fa-magic fa-3x'></i>
                <h4 className='text-uppercase'>Mobile Apps</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </Col>
            <Col sm={4} xs={6}>
              <div className='block'>
                <i className='fa fa-camera fa-3x'></i>
                <h4 className='text-uppercase'>Mobile Apps</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </Col>
            <Col sm={4} xs={6}>
              <div className='block'>
                <i className='fa fa-lightbulb-o fa-3x'></i>
                <h4 className='text-uppercase'>Mobile Apps</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </Col>
            <Col sm={4} xs={6}>
              <div className='block'>
                <i className='fa fa-user-secret fa-3x'></i>
                <h4 className='text-uppercase'>Mobile Apps</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* // expertness section end */}
      <Container>
        <Row>
          <Col sm={12} className='text-center' id='hire_me'>
            <h3>Need Any Help?</h3>
            <h4>
              <i className='fa fa-thumbs-up fa-2x'></i> I am available for
              freelance hire
            </h4>

            <nav className='cl-effect-2'>
              <a href='#contact_me'>
                <span data-hover='Hire Me'>Hire Me</span>
              </a>
            </nav>
          </Col>
        </Row>
      </Container>
      {/* section */}
      <Container fluid className='sdm-bg' id='contact_me'>
        <Row>
          <div className='overlay'></div>
          <Col sm={12} className='text-center text-capitalize'>
            <h3>want to discuss a project?</h3>
            <h4>just drop a message below and i'll get in touch!</h4>
            <hr />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col sm={10}>
            <Row className='text-center'>
              <Col sm={4} xs={12}>
                <div className='block'>
                  <i className='fa fa-envelope fa-2x'></i>
                  <h4 className='text-uppercase'>Queries</h4>
                  <ul className='list-unstyled'>
                    <li>info@mywebsite.com</li>
                    <li>contact@gmail.com</li>
                  </ul>
                </div>
              </Col>

              <Col sm={4} xs={6}>
                <div className='block'>
                  <i className='fa fa-phone fa-2x'></i>
                  <h4 className='text-uppercase'>Call us</h4>
                  <ul className='list-unstyled'>
                    <li>info@mywebsite.com</li>
                    <li>contact@gmail.com</li>
                  </ul>
                </div>
              </Col>

              <Col sm={4} xs={6}>
                <div className='block'>
                  <i className='fa fa-home fa-2x'></i>
                  <h4 className='text-uppercase'>Office</h4>
                  <ul className='list-unstyled'>
                    <li>info@mywebsite.com</li>
                    <li>contact@gmail.com</li>
                  </ul>
                </div>
              </Col>
            </Row>
            {/* start form section */}
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId='formGridAddress1'>
                <Form.Label>Write your Message</Form.Label>
                <Form.Control placeholder='Type...' />
              </Form.Group>
              <div className='col-sm-12 text-center margin-top-55 margin-bottom-55'>
                <button type='submit' className='btn btn-orange'>
                  Send Message
                </button>
              </div>
            </Form>

            {/* icon section */}
            <Row className='text-center'>
              <Col sm={12}>
                <ul className='social-networks spin-icon'>
                  <li>
                    {' '}
                    <a
                      href='https://www.facebook.com/'
                      className='icon-facebook fa fa-facebook-official '
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      href='https://www.instagram.com/'
                      className='icon-instagram fa fa-instagram '
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      href='https://www.linkedin.com/'
                      className='icon-linkedin fa fa-linkedin '
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      href='https://www.twitter.com/'
                      className='icon-twitter fa fa-twitter-square'
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      href='https://www.pinterest.com/'
                      className='icon-pinterest fa fa-pinterest '
                    >
                      Pinterest
                    </a>
                  </li>
                </ul>
                <p className='text-center  margin-top-30'>
                  Copyright 2019{' '}
                  <a href='https://www.facebook.com/'>
                    REACT Portfolio Template{' '}
                  </a>
                </p>
              </Col>
            </Row>
            {/* end icon section */}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ContactMe;
