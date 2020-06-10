import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutWrapper id='about'>
      <div
        data-aos='zoom-in'
        data-aos-offset='300'
        data-aos-easing='ease-in-cubic'
        data-aos-duration='1000'
      >
        <div className='hexagon'>
          <AboutBox>
            <InfoTitle>Technological Skills</InfoTitle>
            <IconsContainer>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{ width: '80px' }}
                  src={require('../assets/images/javascript.png')}
                  alt='Javascript icon'
                />
                <SkillTitle>JavaScript</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{ width: '80px' }}
                  src={require('../assets/images/html.png')}
                  alt='HTML icon'
                />
                <SkillTitle>HTML</SkillTitle>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{ width: '80px' }}
                  src={require('../assets/images/css.png')}
                  alt='CSS icon'
                />
                <SkillTitle>CSS</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{ width: '80px' }}
                  src={require('../assets/images/react.png')}
                  alt='React icon'
                />
                <SkillTitle>React</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{
                    width: '68px',
                    marginBottom: '10px',
                    marginTop: '2px',
                  }}
                  src={require('../assets/images/reactnative.png')}
                  alt='React Native icon'
                />
                <SkillTitle>React Native</SkillTitle>
              </motion.div>
            </IconsContainer>
            <InfoTitle>Tools</InfoTitle>
            <IconsContainer>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{ width: '70px' }}
                  src={require('../assets/images/npm.png')}
                  alt='npm icon'
                />
                <SkillTitle>npm</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{
                    width: '70px',
                  }}
                  src={require('../assets/images/graphql.png')}
                  alt='GraphQL icon'
                />
                <SkillTitle>GraphQL</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{ width: '70px' }}
                  src={require('../assets/images/apollo.png')}
                  alt='Apollo icon'
                />
                <SkillTitle>Apollo</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{ width: '70px' }}
                  src={require('../assets/images/nodejs.png')}
                  alt='Node.js icon'
                />
                <SkillTitle>Node.js</SkillTitle>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  style={{ width: '70px' }}
                  src={require('../assets/images/webpack.png')}
                  alt='Webpack icon'
                />
                <SkillTitle>Webpack</SkillTitle>
              </motion.div>
            </IconsContainer>
            <InfoTitle>
              <img src={require('../assets/images/heart.png')} alt='heart' />
              Libraries
              <img src={require('../assets/images/heart.png')} alt='heart' />
            </InfoTitle>
            <LibraryContainer>
              <SkillTitle>
                Styled Components, Redux, React Router, Framer Motion, AOS,
                Foundation CSS, Materialize CSS, Semantic UI, jQuery, axios,
                Auth0, Lodash
              </SkillTitle>
            </LibraryContainer>
          </AboutBox>
        </div>
      </div>

      <AboutBox>
        <div
          data-aos='fade-left'
          data-aos-offset='300'
          data-aos-easing='ease-in-cubic'
          data-aos-duration='1000'
        >
          <Bio>
            I'm a Frontend Developer specializing in JavaScript and React
            development for web & mobile. I care about thoughtful,
            human-oriented design, and I build apps that are fast-loading,
            responsive, and centered on user experience. As a life-long learner,
            I'm always researching the next best practice or technology, from
            React Hooks to the newest animation library.
            <br />
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
      </AboutBox>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  background: linear-gradient(120deg, #8ffaff 50%, #211a23 50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 40px 10px 40px;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const Bio = styled.p`
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  font-weight: 300;
  padding: 20px 30px 20px 140px;
`;

const Link = styled.a`
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
  margin-top: -170px;
`;

const InfoTitle = styled.h2`
  color: #211a23;
  font-family: 'TypeCond', sans-serif;
  font-size: 35px;
  text-transform: uppercase;
  padding: 15px 0 15px 0;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SkillTitle = styled.h2`
  color: #211a23;
  font-family: 'Source Code Pro', monospace;
  font-size: 18px;
  font-weight: 300;
`;

const LibraryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default About;
