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
  border-left: 100vw solid transparent;
  border-right: 100vw solid transparent;
  border-bottom: 700px solid #8ffaff;
  @media screen and (max-width: 1440px) {
    border-bottom: 800px solid #8ffaff;
  }
  @media screen and (max-width: 1024px) {
    border-bottom: 500px solid #8ffaff;
  }
  @media screen and (max-width: 768px) {
    border-bottom: 800px solid #8ffaff;
  }
  @media screen and (max-width: 425px) {
    border-left: 100vh solid transparent;
    border-right: 100vh solid transparent;
    border-bottom: 600px solid #8ffaff;
  }
`;

const SmallTriangle = styled.div`
  position: relative;
  border-left: 15vh solid transparent;
  border-right: 100vw solid transparent;
  border-top: 30vh solid whitesmoke;
  @media screen and (max-width: 1440px) {
    border-left: 150px solid transparent;
    border-top: 250px solid whitesmoke;
  }
  @media screen and (max-width: 768px) {
    border-left: 200px solid transparent;
    border-top: 250px solid whitesmoke;
  }
  @media screen and (max-width: 425px) {
    border-right: 25vw solid transparent;
    border-left: 100vw solid transparent;
    border-top: 25vh solid whitesmoke;
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
  bottom: 60px;
  left: 100px;
  @media screen and (max-width: 1440px) {
    font-size: 80px;
    bottom: 100px;
    left: 20px;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    bottom: 100px;
    font-size: 70px;
    left: 20px;
  }
  @media screen and (max-width: 600px) {
    left: -40px;
    font-size: 65px;
  }
  @media screen and (max-width: 425px) {
    font-size: 55px;
    left: -55vw;
    bottom: 12vh;
  }
  @media screen and (max-width: 320px) {
    font-size: 50px;
    left: -60vw;
    bottom: 12vh;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 200px;
  right: -430px;
  @media screen and (max-width: 1440px) {
    top: 150px;
    right: -320px;
  }
  @media screen and (max-width: 1024px) {
    top: 140px;
    right: -320px;
  }
  @media screen and (max-width: 768px) {
    top: 220px;
    right: -140px;
  }
  @media screen and (max-width: 425px) {
    top: 15vh;
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
