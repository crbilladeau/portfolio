import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BigSkill = ({ skill }) => {
  return (
    <>
      <IconBox whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <BigIcon src={skill.url} alt={skill.title} />
        <SkillTitle>{skill.title}</SkillTitle>
      </IconBox>
    </>
  );
};

export const SmallSkill = ({ skill }) => {
  return (
    <IconBox whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
      <SmallIcon src={skill.url} alt={skill.title} />
      <SkillTitle>{skill.title}</SkillTitle>
    </IconBox>
  );
};

const IconBox = styled(motion.div)`
  width: 200px;
  @media screen and (max-width: 425px) {
    width: auto;
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

const SkillTitle = styled.h4`
  color: #211a23;
  font-family: 'Source Code Pro', monospace;
  font-size: 18px;
  font-weight: 300;
  margin: 0 0.5em;
  z-index: 20;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    &:nth-child(1) {
      padding: 0 2em;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
    &:nth-child(1) {
      padding: 0;
      font-size: 18px;
    }
  }
`;
