import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import Particles from './ParticlesBackground';

const Landing = () => {
  return (
    <div id='landing'>
      <HeadlineBox>
        <Header>Charlie Billadeau</Header>
        <SubHeader>Frontend Developer</SubHeader>
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={navVariants}
          transition={navTransition}
        >
          <ButtonContainer>
            <ScrollLink
              activeClass='active'
              to='portfolio'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Link to='/#portfolio'>
                <Button>PORTFOLIO</Button>
              </Link>
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Link to='/#about'>
                <Button>ABOUT</Button>
              </Link>
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Link to='/#contact'>
                <Button>CONTACT</Button>
              </Link>
            </ScrollLink>

            <Button>RESUME ↓</Button>
          </ButtonContainer>
        </motion.div>
      </HeadlineBox>
    </div>
  );
};

const HeadlineBox = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  color: #8ffaff;
  font-family: 'Crimson Pro', serif;
  font-size: 80px;
  text-transform: uppercase;
  text-align: center;
`;

const SubHeader = styled.h2`
  color: whitesmoke;
  font-family: 'TypeCond', sans-serif;
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #8ffaff;
  color: #8ffaff;
  font-family: 'Source Code Pro', monospace;
  font-size: 24px;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    color: magenta;
    cursor: pointer;
    border: 2px solid magenta;
  }
`;

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
  duration: 1.2,
  ease: 'easeIn',
};

export default Landing;
