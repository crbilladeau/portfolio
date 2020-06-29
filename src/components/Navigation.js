import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Icon
        src={require('../assets/images/hex.png')}
        alt='hex nav icon'
        onClick={() => setNavOpen(!navOpen)}
        navOpen={navOpen}
      />
      <NavBar
        navOpen={navOpen}
        initial='out'
        animate='in'
        exit='out'
        variants={navVariants}
        transition={navTransition}
      >
        <NavContainer>
          <CloseButton
            src={require('../assets/images/close.png')}
            alt='close button'
            onClick={() => setNavOpen(!navOpen)}
            navOpen={navOpen}
          />
          <LinkContainer>
            <StyledLink to='/portfolio' onClick={scrollTop}>
              HOME
            </StyledLink>

            <StyledLink
              to='/portfolio/#portfolio'
              onClick={() => setNavOpen(false)}
            >
              PORTFOLIO
            </StyledLink>

            <StyledLink
              to='/portfolio/#about'
              onClick={() => setNavOpen(false)}
            >
              ABOUT
            </StyledLink>

            <StyledLink
              to='/portfolio/#contact'
              onClick={() => setNavOpen(false)}
            >
              CONTACT
            </StyledLink>

            <StyledALink
              href='https://github.com'
              target='_blank'
              onClick={() => setNavOpen(false)}
            >
              RESUME
            </StyledALink>
          </LinkContainer>
        </NavContainer>
      </NavBar>
    </>
  );
};

const NavBar = styled(motion.nav)`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  top: 0;
  margin: 1em 1em;
  right: 0;
  width: 100%;
  position: fixed;
  z-index: 50;
  @media screen and (max-width: 768px) {
    height: 100%;
    transition: transform 0.3s ease-in-out;
    transform: ${({ navOpen }) =>
      navOpen ? 'translateX(0)' : 'translateX(-100%)'};
    margin: 0;
  }
`;

const Icon = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  margin: 1.5em 0 0 2em;
  width: 64px;
  z-index: 50;
  @media screen and (max-width: 768px) {
    cursor: pointer;
    margin: 1.5em 1.5em;
  }
  @media screen and (max-width: 425px) {
    width: 50px;
  }
`;

const CloseButton = styled.img`
  align-self: flex-end;
  margin: 1.5em 1.5em;
  width: 64px;
`;

const NavContainer = styled.div`
  display: flex;
  z-index: 50;
  @media screen and (min-width: 769px) {
    img {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    background-color: whitesmoke;
    flex-direction: column;
    padding: 0 0 0 3em;
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 0 3em 0;
  }
`;

const StyledLink = styled(Link)`
  background-color: transparent;
  border-bottom: 3px solid transparent;
  color: magenta;
  cursor: pointer;
  font-family: 'Source Code Pro', monospace;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1pt;
  margin: 20px;
  text-decoration: none;
}
&:hover {
  padding-bottom: 5px;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  font-size: 40px;
  font-family: 'TypeCond', sans-serif;
  margin: 0.5em 0.5em;
}
`;

const StyledALink = styled.a`
  background-color: transparent;
  border-bottom: 3px solid transparent;
  color: magenta;
  cursor: pointer;
  font-family: 'Source Code Pro', monospace;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1pt;
  margin: 20px;
  text-decoration: none;
}
&:hover {
  padding-bottom: 5px;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  font-size: 40px;
  font-family: 'TypeCond', sans-serif;
  margin: 0.5em 0.5em;
}
`;

const navVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const navTransition = {
  duration: 1.4,
  ease: 'easeIn',
};

export default Navigation;
