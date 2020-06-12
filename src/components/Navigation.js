import React from 'react';
import { motion } from 'framer-motion';
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
        <Link to='/#home' className='navlink'>
          HOME
        </Link>

        <Link to='/#portfolio' className='navlink'>
          PORTFOLIO
        </Link>

        <Link to='/#about' className='navlink'>
          ABOUT
        </Link>

        <Link to='/#contact' className='navlink'>
          CONTACT
        </Link>

        <a href='https://github.com' target='_blank' className='navlink'>
          RESUME
        </a>
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
