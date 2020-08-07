import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

const Landing = () => {
  return (
    <HeadlineBox id='home'>
      <header>
        <Header>Charlie Billadeau</Header>
      </header>
      <SubHeader>Frontend Developer</SubHeader>
      <ButtonContainer
        initial='out'
        animate='in'
        exit='out'
        variants={navVariants}
        transition={navTransition}
      >
        <Link to='/#portfolio'>
          <Button>PORTFOLIO</Button>
        </Link>

        <Link to='/#about'>
          <Button>ABOUT</Button>
        </Link>

        <Link to='/#contact'>
          <Button>CONTACT</Button>
        </Link>
        <a
          href='https://crbilladeau.github.io/resume/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <Button>RESUME</Button>
        </a>
      </ButtonContainer>
    </HeadlineBox>
  );
};

const HeadlineBox = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Header = styled.h1`
  color: #8ffaff;
  font-family: 'Crimson Pro Italic', serif;
  font-size: 100px;
  font-weight: 400;
  line-height: 90px;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 0 1em;
  @media screen and (max-width: 768px) {
    font-size: 90px;
    line-height: 80px;
    padding: 0;
  }
  @media screen and (max-width: 425px) {
    font-size: 60px;
    line-height: 50px;
  }
`;

const SubHeader = styled.h2`
  color: whitesmoke;
  font-family: 'TypeCond', sans-serif;
  font-size: 40px;
  font-weight: 300;
  line-height: 40px;
  text-transform: uppercase;
  margin: 0.5em 0;
  text-align: center;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1.5em 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #8ffaff;
  color: #8ffaff;
  font-family: 'Source Code Pro', monospace;
  font-size: 24px;
  margin: 0 0.5em;
  padding: 0.25em 1em;
  text-decoration: none;
  &:hover {
    color: magenta;
    cursor: pointer;
    border: 2px solid magenta;
  }
`;

// framer motion animation variables

const navVariants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 30,
  },
};

const navTransition = {
  duration: 1,
  ease: 'easeIn',
};

export default Landing;
