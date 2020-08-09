import React from 'react';
import styled from 'styled-components';
import Hexagon from './utils/Hexagon';
import Bio from './Bio';
import { BigSkills, SmallSkills } from './Skills';

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
            <BigSkills />
            <SmallSkills />
            <SkillContainer>
              <SkillTitle>
                Terminal, Git, Redux, React Router, Express, MongoDB, styled
                components, Apollo, jQuery, axios, Auth0, lodash, Framer Motion,
                Bootstrap, Foundation, Materialize, Semantic UI
              </SkillTitle>
            </SkillContainer>
          </AboutBox>
        </Hexagon>
      </HexBox>
      <Bio />
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
  @media screen and (max-width: 768px) {
    background: linear-gradient(160deg, #8ffaff 50%, #211a23 50%);
    flex-direction: column;
    height: auto;
  }
`;

const HexBox = styled.div`
  padding: 0 2em;
  @media screen and (max-width: 768px) {
    margin-bottom: -60px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 0px;
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

const SkillTitle = styled.h4`
  color: #211a23;
  font-family: 'Source Code Pro', monospace;
  font-size: 18px;
  font-weight: 300;
  padding: 1.5em 0;
  z-index: 20;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    &:nth-child(1) {
      padding: 1.5em 2em;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
    &:nth-child(1) {
      padding: 1.5em 0;
      font-size: 18px;
    }
  }
`;

const SkillContainer = styled.div`
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

export default About;
