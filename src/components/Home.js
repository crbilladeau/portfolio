import React from 'react';
import Container from '../styles/Container';
import Particles from './utils/ParticlesBackground';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

const Home = () => {
  return (
    <div className='App'>
      <Landing />
      <Particles />
      <Container>
        <Portfolio id='portfolio' />
        <About id='about' />
        <Contact id='contact' />
      </Container>
    </div>
  );
};

export default Home;
