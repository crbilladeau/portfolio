import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

const Landing = () => {
  return (
    <div id='home'>
      <HeadlineBox>
        <Header>Charlie Billadeau</Header>
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

          <Button>RESUME</Button>
        </ButtonContainer>
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
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  color: #8ffaff;
  font-family: 'Crimson Pro', serif;
  font-size: 100px;
  line-height: 100px;
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

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
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
  &:hover {
    color: magenta;
    cursor: pointer;
    border: 2px solid magenta;
  }
  @media screen and (max-width: 768px) {
    margin: 0.3em 0;
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
