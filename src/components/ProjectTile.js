import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// image imports
import acnh from '../assets/images/ACNH.png';
import gofar from '../assets/images/go-far.PNG';
import gofarmobile from '../assets/images/gofarmobile1.png';
import videoApp from '../assets/images/video-search-thumbnail.png';
import videosearchmobile from '../assets/images/videosearchmobile.png';
import staticElectronics from '../assets/images/static.png';
import dotaStats from '../assets/images/dota-stats.png';
import tbd from '../assets/images/placeholder.png';

const ProjectTile = ({ project }) => {
  // project hover hooks
  const [hover, setHover] = useState(false);

  return (
    <ProjectContainer
      data-aos='flip-left'
      data-aos-easing='ease-out-cubic'
      data-aos-duration='1000'
      data-aos-offset='200'
    >
      <Link to={`${project.url}`}>
        <Project
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          image={project.image}
        >
          {hover ? <ProjectTitle>{project.title}</ProjectTitle> : null}
        </Project>
      </Link>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  width: calc(33.333333% - 30px);
  margin: 15px;
  @media screen and (max-width: 1024px) {
    width: calc(50% - 30px);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: calc(100% - 30px);
  }
`;

const Project = styled(motion.div)`
  width: 100%;
  height: 250px;
  background-image: url(${(props) =>
    props.image === 'acnh'
      ? acnh
      : props.image === 'go-far'
      ? gofar
      : props.image === 'video'
      ? videoApp
      : props.image === 'static'
      ? staticElectronics
      : props.image === 'dota'
      ? dotaStats
      : tbd});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3px;
  background-color: whitesmoke;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.52);
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.52);
  /* @media screen and (max-width: 1440px) {
  } */
  @media screen and (max-width: 768px) {
    background-image: url(${(props) =>
      props.image === 'acnh'
        ? acnh
        : props.image === 'go-far'
        ? gofarmobile
        : props.image === 'video'
        ? videosearchmobile
        : props.image === 'static'
        ? staticElectronics
        : props.image === 'dota'
        ? dotaStats
        : tbd});
    height: 400px;
  }
`;

const ProjectTitle = styled.h2`
  background-color: whitesmoke;
  color: #211a23;
  font-family: 'Crimson Pro Italic', serif;
  font-size: 30px;
  font-weight: 200;
  padding: 10px;
  position: absolute;
  text-align: center;
`;

export default ProjectTile;
