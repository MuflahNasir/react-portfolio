import React, { Fragment } from 'react';
// import mixitup from 'mixitup';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../assets/img/port1.png';
import profile from '../assets/img/profile.png';

const MixitUp = () => {
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
    </Fragment>
  );
};

export default MixitUp;
