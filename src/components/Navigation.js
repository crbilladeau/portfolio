import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
  return (
    <NavBarStyle>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={navVariants}
        transition={navTransition}
      >
        <ScrollLink
          activeClass='active'
          to='landing'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Link to='/' style={{ textDecoration: 'none' }}>
            <NavLinkStyle>HOME</NavLinkStyle>
          </Link>
        </ScrollLink>

        <ScrollLink
          activeClass='active'
          to='portfolio'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Link to='/#portfolio' style={{ textDecoration: 'none' }}>
            <NavLinkStyle>PORTFOLIO</NavLinkStyle>
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
          <Link to='/#about' style={{ textDecoration: 'none' }}>
            <NavLinkStyle>ABOUT</NavLinkStyle>
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
          <Link to='/#contact' style={{ textDecoration: 'none' }}>
            <NavLinkStyle>CONTACT</NavLinkStyle>
          </Link>
        </ScrollLink>
        <ScrollLink
          activeClass='active'
          to='resume'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <NavLinkStyle>RESUME ↓</NavLinkStyle>
        </ScrollLink>
      </motion.div>
    </NavBarStyle>
  );
};

const NavBarStyle = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: 30px;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
`;

export const NavLinkStyle = styled.a`
  background-color: transparent;
  border-bottom: 3px solid transparent;
  color: #8ffaff;
  cursor: pointer;
  font-family: 'Source Code Pro', monospace;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1pt;
  margin: 20px;
  text-decoration: none;
  &:hover {
    padding-bottom: 5px;
    color: magenta;
    cursor: pointer;
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
