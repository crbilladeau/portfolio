import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import acnh from '../assets/images/ACNH.png';
import gofar from '../assets/images/go-far.PNG';
import gofarmobile from '../assets/images/gofarmobile1.png';
import videoApp from '../assets/images/video-search-thumbnail.png';
import videosearchmobile from '../assets/images/videosearchmobile.png';
import tbd from '../assets/images/placeholder.png';

const Portfolio = () => {
  // hooks
  const [hover, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);
  const [hoverFour, setHoverFour] = useState(false);
  const [hoverFive, setHoverFive] = useState(false);
  const [hoverSix, setHoverSix] = useState(false);

  return (
    <Wrapper id='portfolio'>
      <PortfolioContainer>
        <ProjectContainer
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
          data-aos-offset='200'
        >
          <Link to='/portfolio/new-horizons-companion#project'>
            <Project
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverOne(true)}
              onMouseLeave={() => setHoverOne(false)}
              acnh
            >
              {hover ? (
                <ProjectTitle>New Horizons Companion App</ProjectTitle>
              ) : null}
            </Project>
          </Link>
        </ProjectContainer>

        {/* <ProjectContainer
          data-aos='flip-up'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
        >
          <Link to='/movie-finder-app'>
            <Project
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverTwo(true)}
              onMouseLeave={() => setHoverTwo(false)}
              tbd
            >
              {hoverTwo ? <ProjectTitle>Movie Finder App</ProjectTitle> : null}
            </Project>
          </Link>
        </ProjectContainer> */}
        {/* 
        <ProjectContainer
          data-aos='flip-right'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
        >
          <Link to='/dnd-app'>
            <Project
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverThree(true)}
              onMouseLeave={() => setHoverThree(false)}
              tbd
            >
              {hoverThree ? <ProjectTitle>DND App</ProjectTitle> : null}
            </Project>
          </Link>
        </ProjectContainer> */}

        <ProjectContainer
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
          data-aos-offset='200'
        >
          <Link to='/portfolio/travel-agency-landing#project'>
            <Project
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverFour(true)}
              onMouseLeave={() => setHoverFour(false)}
              gofar
            >
              {hoverFour ? (
                <ProjectTitle>Travel Agency Landing Page</ProjectTitle>
              ) : null}
            </Project>
          </Link>
        </ProjectContainer>

        {/* <ProjectContainer
          data-aos='flip-right'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
        >
          <Link to='/stream-app'>
            <Project
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverFive(true)}
              onMouseLeave={() => setHoverFive(false)}
              tbd
            >
              {hoverFive ? <ProjectTitle>Stream App</ProjectTitle> : null}
            </Project>
          </Link>
        </ProjectContainer> */}

        <ProjectContainer
          data-aos='flip-up'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
          data-aos-offset='200'
        >
          <Link to='/portfolio/video-search-app#project'>
            <Project
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverSix(true)}
              onMouseLeave={() => setHoverSix(false)}
              videoApp
            >
              {hoverSix ? <ProjectTitle>Video Search App</ProjectTitle> : null}
            </Project>
          </Link>
        </ProjectContainer>
      </PortfolioContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(165deg, #8ffaff 50%, #211a23 50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 5rem auto;
  padding: 0 1rem;
  max-width: 1440px;
`;

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
    props.acnh ? acnh : props.gofar ? gofar : props.videoApp ? videoApp : tbd});
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
  @media screen and (max-width: 1440px) {
  }
  @media screen and (max-width: 768px) {
    height: 400px;
  }
  @media screen and (max-width: 425px) {
    background-image: url(${(props) =>
      props.acnh
        ? acnh
        : props.gofar
        ? gofarmobile
        : props.videoApp
        ? videosearchmobile
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
  text-decoration: none;
`;

export default Portfolio;
