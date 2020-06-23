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
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100wv;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    flex-direction: ${(props) => (props.desktop ? 'row' : 'column')};
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const desktopHexWidth = 800;
const halfDesktopHexWidth = 550;
const mobileHexWidth = 500;

const Hexagon = styled(motion.div)`
  border-radius: 2px;
  background-color: whitesmoke;
  position: relative;
  background-color: #f5f5f5;
  padding: 0px 40px;

  width: ${desktopHexWidth}px;
  height: calc(${desktopHexWidth}px / 1.732);
  margin: 250px 0px calc(${desktopHexWidth}px / 3.464) 40px;

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
    width: ${halfDesktopHexWidth}px;
    height: calc(${halfDesktopHexWidth}px / 1.732);
    margin: 250px 0px calc(${halfDesktopHexWidth}px / 3.464) 20px;
    &:before,
    &:after {
      border-left: calc(${halfDesktopHexWidth}px / 2) solid transparent;
      border-right: calc(${halfDesktopHexWidth}px / 2) solid transparent;
    }
    &:before {
      border-bottom: calc(${halfDesktopHexWidth}px / 3.464) solid whitesmoke;
    }
    &:after {
      border-top: calc(${halfDesktopHexWidth}px / 3.464) solid whitesmoke;
    }
  }

  @media screen and (max-width: 1024px) {
    width: ${desktopHexWidth}px;
    height: calc(${desktopHexWidth}px / 1.732);
    margin: 250px 0px calc(${desktopHexWidth}px / 3.464) 0px;
    &:before,
    &:after {
      border-left: calc(${desktopHexWidth}px / 2) solid transparent;
      border-right: calc(${desktopHexWidth}px / 2) solid transparent;
    }
    &:before {
      border-bottom: calc(${desktopHexWidth}px / 3.464) solid whitesmoke;
    }
    &:after {
      border-top: calc(${desktopHexWidth}px / 3.464) solid whitesmoke;
    }
  }
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 425px) {
    width: calc(${desktopHexWidth}px / 1.732);
    height: ${desktopHexWidth}px;
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
  margin: 0 10%;
  line-height: 40px;
  text-transform: uppercase;
  text-align: center;
  padding: 8px;
  @media screen and (max-width: 1440px) {
    font-size: 28px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 35px;
  }
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
  @media screen and (max-width: 425px) {
    font-size: 40px;
  }
`;

const InfoHeader = styled.h2`
  color: #211a23;
  font-family: Crimson Pro, serif;
  font-size: 24px;
  font-weight: 400;
  padding: 10px;
  text-align: center;
  z-index: 20;
  @media screen and (max-width: 1440px) {
    font-size: 22px;
    padding: 5px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    padding: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding: 10px;
  }
  @media screen and (max-width: 425px) {
    font-size: 28px;
    padding: 20px;
  }
`;

const LineBreak = styled.hr`
  display: block;
  width: 100;
  border: 1.2px solid #ff00ff;
  z-index: 20;
  @media screen and (max-width: 768px) {
    margin: 0 120px;
  }
  @media screen and (max-width: 425px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 375px) {
    margin: 0 40px;
  }
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const List = styled.ul`
  padding: 1em 0.5em 0 0.5em;
  list-style: none;
`;

const ListItems = styled.li`
  color: #211a23;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  padding-left: 5%;
  position: relative;
  z-index: 20;
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
  @media screen and (max-width: 1440px) {
    font-size: 18px;
    &:after {
      height: 6px;
      width: 6px;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 22px;
    &:after {
      height: 8px;
      width: 8px;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 2%;
    margin: 0% 20%;
    &:after {
      height: 6px;
      width: 6px;
    }
  }
  @media screen and (max-width: 425px) {
    font-size: 22px;
    margin: 0 5%;
    padding-left: 4%;
  }
  @media screen and (max-width: 375px) {
    margin: 0 12%;
  }
`;

const TechList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1em 0;
  text-align: center;
  list-style: none;
  li {
    &:after {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    padding: 4px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 8px;
  }
`;

const GalleryBox = styled(motion.div)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 2em;
  @media screen and (max-width: 1024px) {
    margin: 3em 0;
  }
`;

export default ProjectPage;
