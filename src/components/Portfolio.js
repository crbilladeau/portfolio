import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
        <div
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
        >
          <Link to='/new-horizons-companion'>
            <Project
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverOne(true)}
              onMouseLeave={() => setHoverOne(false)}
            >
              <Thumbnail
                src={require('../assets/images/ACNH.png')}
                alt='New Horizons Companion App Thumbnail'
              />

              {hover ? (
                <ProjectTitle>New Horizons Companion App</ProjectTitle>
              ) : null}
            </Project>
          </Link>
        </div>

        <div
          data-aos='flip-up'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
        >
          <Link to='/movie-finder-app'>
            <Project
              className='container'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverTwo(true)}
              onMouseLeave={() => setHoverTwo(false)}
            >
              <Thumbnail
                src={require('../assets/images/placeholder.png')}
                alt='Placeholder Thumbnail'
              />
              {hoverTwo ? <ProjectTitle>Movie Finder App</ProjectTitle> : null}
            </Project>
          </Link>
        </div>

        <div
          data-aos='flip-right'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
        >
          <Link to='/dnd-app'>
            <Project
              className='container'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverThree(true)}
              onMouseLeave={() => setHoverThree(false)}
            >
              <Thumbnail
                src={require('../assets/images/placeholder.png')}
                alt='Placeholder App Thumbnail'
              />
              {hoverThree ? <ProjectTitle>DND App</ProjectTitle> : null}
            </Project>
          </Link>
        </div>

        <div
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
        >
          <Link to='/travel-agency-landing'>
            <Project
              className='container'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverFour(true)}
              onMouseLeave={() => setHoverFour(false)}
            >
              <Thumbnail
                src={require('../assets/images/go-far.PNG')}
                alt='Go Far Landing Page Thumbnail'
              />
              {hoverFour ? (
                <ProjectTitle>Travel Agency Landing Page</ProjectTitle>
              ) : null}
            </Project>
          </Link>
        </div>

        <div
          data-aos='flip-right'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
        >
          <Link to='/stream-app'>
            <Project
              className='container'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverFive(true)}
              onMouseLeave={() => setHoverFive(false)}
            >
              <Thumbnail
                src={require('../assets/images/placeholder.png')}
                alt='Stream App Thumbnail'
              />
              {hoverFive ? <ProjectTitle>Stream App</ProjectTitle> : null}
            </Project>
          </Link>
        </div>

        <div
          data-aos='flip-up'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
        >
          <Link to='/video-search-app'>
            <Project
              className='container'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoverSix(true)}
              onMouseLeave={() => setHoverSix(false)}
            >
              <Thumbnail
                src={require('../assets/images/video-search-thumbnail.png')}
                alt='Video Search App Thumbnail'
              />
              {hoverSix ? <ProjectTitle>Video Search App</ProjectTitle> : null}
            </Project>
          </Link>
        </div>
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
  overflow-x: hidden;
  padding-left: 30px;
  padding-right: 40px;
  padding-bottom: 80px;
  height: 100vh;
  width: 100wv;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Project = styled(motion.div)`
  border-radius: 3px;
  background-color: whitesmoke;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  height: 250px;
  width: 450px;
  -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.52);
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.52);
`;

const ProjectTitle = styled.h2`
  background-color: whitesmoke;
  color: #211a23;
  font-family: Crimson Pro, serif;
  font-size: 30px;
  font-weight: 200;
  padding: 10px;
  position: absolute;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Thumbnail = styled.img`
  height: 250px;
  width: 450px;
  border-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default Portfolio;
