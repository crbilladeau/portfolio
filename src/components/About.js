import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutWrapper id='about'>
      <HexBox
        data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-cubic'
        data-aos-duration='1000'
      >
        <Hexagon>
          <AboutBox>
            <InfoTitle>Technological Skills</InfoTitle>
            <IconsContainer>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <BigIcon
                  src={require('../assets/images/javascript.png')}
                  alt='Javascript icon'
                />
                <SkillTitle>JavaScript</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <BigIcon
                  src={require('../assets/images/html.png')}
                  alt='HTML icon'
                />
                <SkillTitle>HTML</SkillTitle>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <BigIcon
                  src={require('../assets/images/css.png')}
                  alt='CSS icon'
                />
                <SkillTitle>CSS</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <BigIcon
                  src={require('../assets/images/react.png')}
                  alt='React icon'
                />
                <SkillTitle>React</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <BigIcon
                  src={require('../assets/images/reactnative.png')}
                  alt='React Native icon'
                />
                <SkillTitle>React</SkillTitle>
                <SkillTitle>Native</SkillTitle>
              </motion.div>
            </IconsContainer>
            <InfoTitle>Tools</InfoTitle>
            <IconsContainer>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <SmallIcon
                  src={require('../assets/images/npm.png')}
                  alt='npm icon'
                />
                <SkillTitle>npm</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <SmallIcon
                  src={require('../assets/images/github.png')}
                  alt='Github icon'
                />
                <SkillTitle>Github</SkillTitle>
              </motion.div>

              {/* <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <SmallIcon
                  src={require('../assets/images/apollo.png')}
                  alt='Apollo icon'
                />
                <SkillTitle>Apollo</SkillTitle>
              </motion.div> */}

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <SmallIcon
                  src={require('../assets/images/nodejs.png')}
                  alt='Node.js icon'
                />
                <SkillTitle>Node.js</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <SmallIcon
                  src={require('../assets/images/graphql.png')}
                  alt='GraphQL icon'
                />
                <SkillTitle>GraphQL</SkillTitle>
              </motion.div>
            </IconsContainer>
            <InfoTitle>
              <Hearts src={require('../assets/images/heart.png')} alt='heart' />
              I Love to Use
              <Hearts src={require('../assets/images/heart.png')} alt='heart' />
            </InfoTitle>
            <LibraryContainer>
              <SkillTitle>
                Terminal, Git, Redux, React Router, Express, MongoDB, styled
                components, Apollo, jQuery, axios, Auth0, lodash, Framer Motion,
                Bootstrap, Foundation, Materialize, Semantic UI
              </SkillTitle>
            </LibraryContainer>
          </AboutBox>
        </Hexagon>
      </HexBox>

      <div
        data-aos='fade-left'
        data-aos-offset='200'
        data-aos-easing='ease-in-cubic'
        data-aos-duration='1000'
      >
        <Bio>
          I'm a Frontend Developer specializing in JavaScript and React
          development for web & mobile. I care about thoughtful, human-oriented
          design, and I build apps that are fast-loading, responsive, and
          centered on user experience. I believe in keeping things clean and
          simple, which means I'm always researching the next best practice or
          technology, from React Hooks to the newest animation library.
          <br />
          <br />
          <br />
          <br />
          After hours, I am a{' '}
          <Link href='https://cbilladeaux.myportfolio.com/' target='_blank'>
            photographer
          </Link>
          , educator, and avid TTRPG player.
        </Bio>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  background: linear-gradient(120deg, #8ffaff 50%, #211a23 50%);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    background: linear-gradient(160deg, #8ffaff 50%, #211a23 50%);
    flex-direction: column;
  }
`;

const HexBox = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: -60px;
  }
`;

const Bio = styled.p`
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
    padding: 0px 20px;
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

const AboutBox = styled.div`
  flex: 1;
  position: relative;
  margin-top: -120px;
  @media screen and (max-width: 1440px) {
    margin-top: -100px;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const desktopHexWidth = 750;
const mobileHexWidth = 500;

const Hexagon = styled(motion.div)`
  position: relative;
  width: ${desktopHexWidth}px;
  height: calc(${desktopHexWidth}px / 1.732);
  background-color: #f5f5f5;
  margin: 250px 0;
  padding: 60px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: calc(${desktopHexWidth}px / 2) solid transparent;
    border-right: calc(${desktopHexWidth}px / 2) solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: calc(${desktopHexWidth}px / 3.464) solid whitesmoke;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: calc(${desktopHexWidth}px / 3.464) solid whitesmoke;
  }

  @media screen and (max-width: 1440px) {
    width: ${mobileHexWidth}px;
    height: calc(${mobileHexWidth}px / 1.732);
    padding: 40px 60px;
    &:before,
    &:after {
      border-left: calc(${mobileHexWidth}px / 2) solid transparent;
      border-right: calc(${mobileHexWidth}px / 2) solid transparent;
    }
    &:before {
      border-bottom: calc(${mobileHexWidth}px / 3.464) solid whitesmoke;
    }
    &:after {
      border-top: calc(${mobileHexWidth}px / 3.464) solid whitesmoke;
    }
  }

  @media screen and (max-width: 425px) {
    width: ${desktopHexWidth}px;
    height: ${desktopHexWidth}px;
    margin: 300px 0 200px 0;
    padding: 0;
    &:before,
    &:after {
      border-left: calc(${desktopHexWidth}px / 2) solid transparent;
      border-right: calc(${desktopHexWidth}px / 2) solid transparent;
    }
    &:before {
      border-bottom: calc(${mobileHexWidth}px / 3) solid whitesmoke;
    }
    &:after {
      border-top: calc(${mobileHexWidth}px / 3) solid whitesmoke;
    }
  }
`;

const InfoTitle = styled.h2`
  color: #211a23;
  font-family: 'TypeCond', sans-serif;
  font-size: 35px;
  margin: 0.5em 0 0.2em 0;
  text-transform: uppercase;
  z-index: 20;
  &:nth-child(3) {
    margin: 0 0 0 0;
  }
  @media screen and (max-width: 1440px) {
    font-size: 28px;
  }
  @media screen and (max-width: 425px) {
    font-size: 38px;
    margin: 0.5em 0 0 0;
    &:nth-child(3) {
      margin: 0.5em 0 0 0;
    }
    &:nth-child(5) {
      margin: 0.8em 0 0 0;
    }
  }
  @media screen and (max-width: 320px) {
    &:nth-child(1) {
      margin: 0 12em;
      line-height: 40px;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 425px) {
    flex: 1;
    width: 50%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const BigIcon = styled.img`
  width: 80px;
  @media screen and (max-width: 1440px) {
    width: 50px;
  }
  @media screen and (max-width: 425px) {
    margin: 1em 1em 0 1em;
    width: 60px;
  }
`;

const SmallIcon = styled.img`
  width: 70px;
  @media screen and (max-width: 1440px) {
    width: 40px;
  }
  @media screen and (max-width: 425px) {
    margin: 1em 1.5em 0 1.5em;
    width: 50px;
  }
`;

const SkillTitle = styled.h2`
  color: #211a23;
  font-family: 'Source Code Pro', monospace;
  font-size: 18px;
  font-weight: 300;
  z-index: 20;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
`;

const LibraryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 425px) {
    margin: 0 12em;
  }
  @media screen and (max-width: 320px) {
    margin: 0 16em;
  }
`;

const Hearts = styled.img`
  width: 60px;
  @media screen and (max-width: 1440px) {
    width: 30px;
  }
`;

export default About;
