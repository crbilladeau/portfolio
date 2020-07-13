import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from './Form';
import background from '../assets/images/bg.svg';
import background2 from '../assets/images/bg2.svg';

const Contact = () => {
  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ContactWrapper>
      <Background>
        <Header id='contact' />
        <Box>
          <Title
            data-aos='fade-in'
            data-aos-offset='300'
            data-aos-easing='ease-in-cubic'
            data-aos-duration='1000'
          >
            CONTACT
          </Title>
        </Box>
        <Box>
          <FormContainer
            data-aos='fade-up-right'
            data-aos-offset='100'
            data-aos-easing='ease-in-cubic'
            data-aos-duration='800'
          >
            <ContactForm />
            <IconContainer>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Icon
                  onClick={() => openUrl('https://github.com/crbilladeau')}
                  src={require('../assets/images/github.png')}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Icon
                  onClick={() =>
                    openUrl(
                      'https://www.linkedin.com/in/charlie-billadeau-033/'
                    )
                  }
                  src={require('../assets/images/linkedin.png')}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Icon
                  onClick={() =>
                    openUrl('https://codesandbox.io/u/crbilladeau')
                  }
                  src={require('../assets/images/codesandbox.png')}
                />
              </motion.div>
            </IconContainer>
            <Email>charlie.billadeau@gmail.com</Email>
          </FormContainer>
        </Box>
      </Background>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  /* overflow: hidden; */
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${background}) no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    background-position: center;
  }
  @media screen and (max-width: 768px) {
    background: url(${background2}) no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const Header = styled.h2`
  :before {
    display: block;
    content: ' ';
    visibility: hidden;
    pointer-events: none;
  }
`;

const Box = styled.div`
  margin: 3em 0em;
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  color: #211a23;
  font-family: 'Crimson Pro Semi', serif;
  font-size: 8vw;
  font-weight: 200;
  text-transform: uppercase;
  text-align: left;
  margin: 0 1em;
  z-index: 2;
  @media screen and (max-width: 768px) {
    font-size: 12vw;
    margin: 0 0.5em;
    text-align: right;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const Email = styled.p`
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

export default Contact;
