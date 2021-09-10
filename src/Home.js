import React, { Fragment } from 'react';
import Navbar from './components/NavBar';
import ContactMe from './components/ContactMe';
import Expertness from './components/Expertness';
import Reviews from './components/Reviews';
import MixitUp from './components/MixitUp';

const Home = () => {
  return (
    <Fragment>
      {/* <Navbar /> */}
      {/* <MixitUp /> */}
      {/* <Reviews /> */}
      <ContactMe />
    </Fragment>
  );
};

export default Home;
