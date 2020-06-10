import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from './Form';

const Contact = () => {
  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ContactWrapper>
      <SmallTriangle></SmallTriangle>
      <BigTriangle></BigTriangle>

      <div
        data-aos='fade-in'
        data-aos-offset='300'
        data-aos-easing='ease-in-cubic'
        data-aos-duration='1000'
        style={{ alignSelf: 'flex-start', width: '100%' }}
      >
        <Title>contact</Title>
      </div>
      <FormContainer
        data-aos='fade-up-right'
        data-aos-offset='300'
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
                openUrl('https://www.linkedin.com/in/charlie-billadeau-033/')
              }
              src={require('../assets/images/linkedin.png')}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Icon
              onClick={() => openUrl('https://codesandbox.io/u/crbilladeau')}
              src={require('../assets/images/codesandbox.png')}
            />
          </motion.div>
        </IconContainer>
        <Email id='contact'>charlie.billadeau@gmail.com</Email>
      </FormContainer>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  height: 100vh;
  width: 100wv;
`;

const BigTriangle = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  border-left: 1000px solid transparent;
  border-right: 1000px solid transparent;
  border-bottom: 700px solid #8ffaff;
  z-index: -2;
`;

const SmallTriangle = styled.div`
  position: absolute;
  border-left: 255px solid transparent;
  border-right: 1280px solid transparent;
  border-top: 455px solid whitesmoke;
  z-index: -1;
`;

const Title = styled.h2`
  color: #211a23;
  font-family: Crimson Pro, sans-serif;
  font-size: 140px;
  font-weight: 200;
  margin-top: 40px;
  margin-left: 120px;
  text-transform: uppercase;
  text-align: left;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 160px;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
`;

const Icon = styled.img`
  cursor: pointer;
  margin: 10px 20px;
  width: 50px;
`;

const Email = styled.p`
  color: #211a23;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1pt;
  padding: 10px;
`;

export default Contact;
