import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GalleryChanger from './GalleryChanger';

const ProjectPage = ({
  title,
  goals,
  challenges,
  tech,
  demoUrl,
  githubUrl,
  images,
  desktop,
}) => {
  const techList = tech.map((tech) => (
    <ListItems key={tech.toString()}>{tech}</ListItems>
  ));
  const challengeList = challenges.map((challenge) => (
    <ListItems key={challenge.toString()}>{challenge}</ListItems>
  ));
  const goalsList = goals.map((goal) => (
    <ListItems key={goal.toString()}>{goal}</ListItems>
  ));

  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ProjectWrapper id='project'>
      <Hexagon
        initial='out'
        animate='in'
        exit='out'
        variants={hexagonVariants}
        transition={hexagonTransition}
      >
        <InfoContainer>
          <TextBox
            initial='out'
            animate='in'
            exit='out'
            variants={textVariants}
            transition={textTransition}
          >
            <ProjectTitle>{title}</ProjectTitle>
            <ButtonBox>
              <Button onClick={() => openUrl(demoUrl)}>Visit Demo</Button>
              <Button onClick={() => openUrl(githubUrl)}>View Github</Button>
            </ButtonBox>
            <RowBox>
              <ColumnBox>
                <InfoHeader>Goals</InfoHeader>
                <LineBreak />
                <List>{goalsList}</List>
              </ColumnBox>
              <ColumnBox>
                <InfoHeader>Challenges</InfoHeader>
                <LineBreak />
                <List>{challengeList}</List>
              </ColumnBox>
            </RowBox>
            <InfoHeader>Technologies Used</InfoHeader>
            <LineBreak />
            <TechList>{techList}</TechList>
          </TextBox>
        </InfoContainer>
      </Hexagon>

      <GalleryBox
        initial='out'
        animate='in'
        exit='out'
        variants={galleryVariants}
        transition={galleryTransition}
      >
        <GalleryChanger images={images} desktop={desktop} />
      </GalleryBox>
    </ProjectWrapper>
  );
};

const hexagonVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const hexagonTransition = {
  duration: 1,
  ease: 'easeIn',
};

const textVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -100,
  },
};

const textTransition = {
  duration: 1,
  ease: 'easeIn',
};

const galleryVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 100,
  },
};

const galleryTransition = {
  duration: 1,
  ease: 'easeIn',
};

const ProjectWrapper = styled.div`
  background: linear-gradient(165deg, #211a23 50%, #8ffaff 50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100wv;
  overflow: hidden;
`;

const Hexagon = styled(motion.div)`
  border-radius: 2px;
  background-color: whitesmoke;
  position: relative;
  width: 750px;
  height: 433.01px;
  background-color: #f5f5f5;
  margin: 0 0 0 20px;
  padding: 0px 80px 0px 80px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 375px solid transparent;
    border-right: 375px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 216.51px solid #f5f5f5;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 216.51px solid #f5f5f5;
  }
`;

const InfoContainer = styled.div`
  position: relative;
  flex: 1;
  margin-top: -75px;
`;

const TextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectTitle = styled.h2`
  color: #211a23;
  font-family: 'TypeCond', sans-serif;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;
  padding: 8px;
`;

const InfoHeader = styled.h2`
  color: #211a23;
  font-family: Crimson Pro, serif;
  font-size: 24px;
  font-weight: 400;
  padding: 10px;
  text-align: center;
`;

const LineBreak = styled.hr`
  display: block;
  width: 100;
  border: 1.2px solid #ff00ff;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const List = styled.ul`
  margin: 8px 10px 8px 10px;
  padding: 10px 10px 0px 10px;
  list-style: none;
`;

const ListItems = styled.li`
  color: #211a23;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 4px;
  padding-left: 15px;
  padding-right: 10px;
  position: relative;

  &:after {
    content: '';
    height: 8px;
    width: 8px;
    background: #ff00ff;
    display: block;
    position: absolute;
    transform: rotate(45deg);
    top: 6px;
    left: 0;
  }
`;

const TechList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  text-align: center;
  list-style: none;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ff00ff;
  color: #ff00ff;
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  margin: 5px 8px 5px 8px;
  padding: 8px;
  &:hover {
    background-color: magenta;
    color: whitesmoke;
    cursor: pointer;
  }
`;

const GalleryBox = styled(motion.div)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default ProjectPage;
