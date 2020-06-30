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

      <Title
        data-aos='fade-in'
        data-aos-offset='300'
        data-aos-easing='ease-in-cubic'
        data-aos-duration='1000'
      >
        contact
      </Title>

      <FormContainer
        data-aos='fade-up-right'
        data-aos-offset='100'
        data-aos-easing='ease-in-cubic'
        data-aos-duration='800'
        id='contact'
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
        <Email>charlie.billadeau@gmail.com</Email>
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
  position: relative;
  height: 100vh;
  width: 100wv;
  overflow: hidden;
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
  border-right: 1400px solid transparent;
  border-top: 275px solid whitesmoke;
  z-index: -1;
`;

const Title = styled.h2`
  align-self: flex-start;
  color: #211a23;
  font-family: 'Crimson Pro Semi', serif;
  font-size: 130px;
  font-weight: 200;
  margin: 50px 0 0 120px;
  text-transform: uppercase;
  text-align: left;
  width: 100%;
  @media screen and (max-width: 1024px) {
    margin: 60px 0 0 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 90px;
    margin: 100px 0 0 40px;
  }
  @media screen and (max-width: 425px) {
    text-align: center;
    margin: 90px 0 0 0;
  }
  @media screen and (max-width: 425px) {
    font-size: 70px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
  width: 100%;
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
`;

const Email = styled.p`
  color: #211a23;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1pt;
  padding: 10px;
`;

export default Contact;
