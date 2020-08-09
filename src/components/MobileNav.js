import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import {
  NavContainer,
  CloseButton,
  LinkContainer,
  StyledLink,
  StyledALink,
} from './Navigation';

const MobileNav = ({ navOpen, setNavOpen }) => {
  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  };

  useLockBodyScroll();

  return (
    <NavContainer>
      <CloseButton
        src={require('../assets/images/close.png')}
        alt='close button'
        onClick={() => setNavOpen(!navOpen)}
        navOpen={navOpen}
      />
      <LinkContainer>
        <StyledLink to='/#home' onClick={() => setNavOpen(false)}>
          HOME
        </StyledLink>

        <StyledLink to='/#portfolio' onClick={() => setNavOpen(false)}>
          PORTFOLIO
        </StyledLink>

        <StyledLink to='/#about' onClick={() => setNavOpen(false)}>
          ABOUT
        </StyledLink>

        <StyledLink to='/#contact' onClick={() => setNavOpen(false)}>
          CONTACT
        </StyledLink>

        <StyledALink
          href='https://crbilladeau.github.io/resume/'
          target='_blank'
          onClick={() => setNavOpen(false)}
        >
          RESUME
        </StyledALink>
      </LinkContainer>
    </NavContainer>
  );
};

export default MobileNav;
