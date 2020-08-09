import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Bio = () => {
  return (
    <BioStyles
      data-aos='fade-left'
      data-aos-offset='200'
      data-aos-easing='ease-in-cubic'
      data-aos-duration='1000'
    >
      <p>
        I'm a Frontend Developer specializing in JavaScript and React
        development for web & mobile. I care about thoughtful, human-oriented
        design, and I build apps that are fast-loading, responsive, and centered
        on user experience. I believe in keeping things clean and simple, which
        means I'm always researching the next best practice or technology, from
        React Hooks to the newest animation library.
        <br />
        <br />
        <br />
        <br />
        After hours, I am a{' '}
        <Link href='https://cbilladeaux.myportfolio.com/' target='_blank'>
          photographer
        </Link>
        , educator, and avid TTRPG player.
      </p>
    </BioStyles>
  );
};

const BioStyles = styled.div`
  p {
    font-family: 'Source Code Pro', monospace;
    font-size: 18px;
    font-weight: 300;
    max-width: 600px;
    text-align: center;
    margin-right: -20px;
    padding: 10px 40px;
    @media screen and (max-width: 1440px) {
      font-size: 16px;
      max-width: 500px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 14px;
      margin: 0;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
      padding: 40px 20px;
    }
  }
`;

const Link = styled.a`
  color: whitesmoke;
  &:visited {
    color: whitesmoke;
  }

  &:hover {
    background-color: magenta;
  }

  &:active {
    background-color: magenta;
  }
`;

export default Bio;
