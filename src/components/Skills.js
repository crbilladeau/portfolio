import React from 'react';
import styled from 'styled-components';
import { skills, smallSkills } from '../assets/icon-data';
import { BigSkill, SmallSkill } from './Skill';

export const BigSkills = () => {
  return (
    <>
      <InfoTitle>Technological Skills</InfoTitle>

      <IconsContainer>
        {skills.map((skill) => {
          return <BigSkill skill={skill} />;
        })}
      </IconsContainer>
    </>
  );
};

export const SmallSkills = () => {
  return (
    <>
      <InfoTitle>
        <Hearts src={require('../assets/images/heart.png')} alt='heart' />
        Tools
        <Hearts src={require('../assets/images/heart.png')} alt='heart' />
      </InfoTitle>
      <IconsContainer>
        {smallSkills.map((skill) => {
          return <SmallSkill skill={skill} />;
        })}
      </IconsContainer>
    </>
  );
};

const InfoTitle = styled.h3`
  color: #211a23;
  font-family: 'TypeCond', sans-serif;
  font-size: 35px;
  margin: 0.5em 0 0.2em 0;
  padding: 0em 0 0.3em 0;
  text-transform: uppercase;
  z-index: 20;
  &:nth-child(3) {
    margin: 0 0 0 0;
    padding: 0.8em 0 0.3em 0;
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

const Hearts = styled.img`
  width: 60px;

  @media screen and (max-width: 1440px) {
    width: 30px;
  }
`;
