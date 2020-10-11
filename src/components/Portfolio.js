import React from 'react';
import styled from 'styled-components';
import ProjectTile from './ProjectTile';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'New Horizons Companion',
      url: '/new-horizons-companion#project',
      image: 'acnh',
    },
    {
      id: 2,
      title: 'Static Electronics',
      url: '/static-ecommerce#project',
      image: 'static',
    },
    {
      id: 3,
      title: 'Watcher',
      url: '/watcher#project',
      image: 'watcher',
    },
    {
      id: 4,
      title: 'Go Far Travel Agency',
      url: '/go-far#project',
      image: 'go-far',
    },
    {
      id: 5,
      title: 'DOTA 2 Stats',
      url: '/dota-stats#project',
      image: 'dota',
    },
    {
      id: 6,
      title: 'Video Search App',
      url: '/video-search-app#project',
      image: 'video',
    },
  ];

  return (
    <Background id='portfolio'>
      <PortfolioContainer>
        {projects.map((project) => (
          <ProjectTile project={project} image={project.image} />
        ))}
      </PortfolioContainer>
    </Background>
  );
};

const Background = styled.div`
  background: linear-gradient(165deg, #8ffaff 50%, #211a23 50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 2em auto;
  padding: 0 1em;
  max-width: 1440px;
`;

export default Portfolio;
