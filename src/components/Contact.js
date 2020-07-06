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
      <Header id='contact'></Header>
      <SmallTriangle>
        <Title
          data-aos='fade-in'
          data-aos-offset='300'
          data-aos-easing='ease-in-cubic'
          data-aos-duration='1000'
        >
          contact
        </Title>
      </SmallTriangle>
      <BigTriangle>
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
      </BigTriangle>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  width: 100wv;
  overflow: hidden;
`;

const Header = styled.h2`
  :before {
    display: block;
    content: ' ';
    margin-top: -285px;
    height: 285px;
    visibility: hidden;
    pointer-events: none;
  }
`;

const BigTriangle = styled.div`
  position: relative;
  border-left: 900px solid transparent;
  border-right: 900px solid transparent;
  border-bottom: 600px solid #8ffaff;
  @media screen and (max-width: 1440px) {
    border-left: 1000px solid transparent;
    border-right: 1000px solid transparent;
    border-bottom: 800px solid #8ffaff;
  }
  @media screen and (max-width: 768px) {
    border-left: 1000px solid transparent;
    border-right: 1000px solid transparent;
  }
`;

const SmallTriangle = styled.div`
  position: relative;
  border-left: 150px solid transparent;
  border-right: 1500px solid transparent;
  border-top: 500px solid whitesmoke;
  @media screen and (max-width: 1440px) {
    border-left: 150px solid transparent;
    border-right: 1000px solid transparent;
    border-top: 250px solid whitesmoke;
  }
  @media screen and (max-width: 768px) {
    border-left: 200px solid transparent;
    border-right: 800px solid transparent;
    border-top: 250px solid whitesmoke;
  }
  @media screen and (max-width: 425px) {
    border-left: 200px solid transparent;
    border-right: 800px solid transparent;
    border-top: 200px solid whitesmoke;
  }
`;

const Title = styled.h2`
  color: #211a23;
  font-family: 'Crimson Pro Semi', serif;
  font-size: 120px;
  font-weight: 200;
  text-transform: uppercase;
  text-align: left;
  position: absolute;
  bottom: 250px;
  @media screen and (max-width: 1440px) {
    font-size: 80px;
    bottom: 80px;
    left: 60px;
  }
  @media screen and (max-width: 768px) {
    bottom: 100px;
    font-size: 70px;
    left: 40px;
  }
  @media screen and (max-width: 600px) {
    left: 90px;
    font-size: 65px;
  }
  @media screen and (max-width: 425px) {
    font-size: 60px;
    left: 160px;
    bottom: 80px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 250px;
  right: -410px;
  @media screen and (max-width: 1024px) {
    top: 150px;
    right: -320px;
  }
  @media screen and (max-width: 768px) {
    top: 100px;
    right: -140px;
  }
  @media screen and (max-width: 425px) {
    top: 80px;
  }
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
`;

export default Contact;
