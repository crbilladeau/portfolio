import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { socials } from '../assets/social-icons';

const Social = () => {
  const openUrl = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <IconContainer>
        {socials.map((social) => {
          return (
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Icon
                onClick={() => openUrl(`${social.url}`)}
                src={social.image}
                alt='codesandbox'
              />
            </motion.div>
          );
        })}
      </IconContainer>{' '}
      <Email>charlie.billadeau@gmail.com</Email>
    </>
  );
};

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Icon = styled.img`
  cursor: pointer;
  margin: 10px 20px;
  width: 50px;
  @media screen and (max-width: 768px) {
    margin: 0.2em 1.5em;
  }
  @media screen and (max-width: 425px) {
    width: 45px;
  }
`;

const Email = styled.h4`
  color: #211a23;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1pt;
  padding: 10px;
  @media screen and (max-width: 768px) {
    padding: 0.5em 0em;
  }
  @media screen and (max-width: 425px) {
    padding: 0.2em 0em;
  }
`;

export default Social;
