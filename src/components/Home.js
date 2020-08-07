import React from 'react';
import Container from '../styles/Container';
import Particles from './ParticlesBackground';
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
        <Portfolio title='portfolio' subtitle={Portfolio} id='portfolio' />
        <About title='about' subtitle={About} id='about' />
        <Contact title='contact' subtitle={Contact} id='contact' />
      </Container>
    </div>
  );
};

export default Home;
