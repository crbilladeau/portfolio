import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ProjectPage from './components/ProjectPage';
import {
  acnhImages,
  watcherImages,
  watcherMobile,
  gofarImages,
  gofarMobile,
  videoSearchImages,
  videoMobile,
  staticElectronicsImages,
  dotaStatsImages,
} from './assets/image-data';

const App = () => {
  AOS.init();
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/new-horizons-companion'
          render={() => (
            <ProjectPage
              title={`New Horizons Companion`}
              goals={[
                'Learn React Native',
                'Build and release an iOS app for the Apple App Store',
                'Design and code custom search filters, pop-up modals, and dynamic lists',
                'Implement mobile push notifications',
              ]}
              challenges={[
                'Teaching myself React Native and learning the differences between React & React Native',
                'Learning how to design for mobile-first',
                'Data management and storage',
                'Navigating the Apple Developer & App Store Submission Guidelines',
              ]}
              tech={['React Native', 'CSS3', 'Expo', 'lodash']}
              demo={`Demo`}
              demoUrl={`https://expo.io/@cbilladeau/nh-companion`}
              githubUrl={`https://github.com/crbilladeau/new-horizons-companion`}
              images={acnhImages}
              mobileImages={acnhImages}
              desktop={false}
              acnh={true}
            />
          )}
        />

        <Route
          path='/watcher'
          render={() => (
            <ProjectPage
              title={`Watcher`}
              goals={[
                'Create a unique movie streaming website',
                'Fetch and display data from The Movie Database API for movies and TV shows',
                'Make the app searchable through a search bar and navigatable with React Router',
                'Deploy to Google Firebase'
              ]}
              challenges={[
                'Controlling data fetch calls to the API',
                'Persisting state on page refresh without refetching data',
                'Fetching the correct show ID based on movie or TV show',
              ]}
              tech={['React, React Router, Firebase, styled components, axios, TMDB API']}
              demoUrl={`https://watcher-6ad27.web.app/`}
              githubUrl={`https://github.com/crbilladeau/watcher`}
              images={watcherImages}
              desktop={true}
              mobileImages={watcherMobile}
              watcher={true}
            />
          )}
        />

        <Route
          path='/static-ecommerce'
          render={() => (
            <ProjectPage
              title={`Static Electronics E-commerce Website`}
              goals={[
                'Build a fullstack E-commerce React website from scratch with NextJS routing',
                'Implement GraphQL, Prisma database, and Apollo for backend item queries and mutations',
                'Currently In Development: Implementing User Authentication, Account Profiles, Cart and Payment Features, Search Functions',
              ]}
              challenges={[
                'Learning how queries and mutations work for GraphQL',
                'Backend server set-up with Apollo and GraphQL Yoga',
                'Connecting custom client frontend CRUD features to the backend',
              ]}
              tech={[
                'React',
                'NextJS',
                'GraphQL',
                'Prisma',
                'Apollo',
                'GraphQL Yoga',
              ]}
              demo={`Video Demo`}
              videoDemo={true}
              demoUrl={`https://drive.google.com/file/d/1HMLxyaNLLoRpaZ72ExAJquzgB4Bkoutg/view?usp=sharing`}
              githubUrl={`https://github.com/crbilladeau/static-electronics`}
              images={staticElectronicsImages}
              desktop={true}
              mobileImages={''}
            />
          )}
        />

        <Route
          path='/go-far'
          render={() => (
            <ProjectPage
              title={`Travel Agency Landing Page`}
              goals={[
                'Build a professional company landing page from scratch',
                'Code fluid animations, smooth parallax scrolling, and responsive design using HTML, CSS, and JavaScript',
                'Utilize Materialize CSS for the CSS framework',
              ]}
              challenges={[
                'Learning how to implement Materialize CSS for styling',
                'Fine-tuning background images for smooth parallax scrolling',
              ]}
              tech={[
                'HTML5',
                'CSS3',
                'JavaScript',
                'Materialize CSS',
                'Animate CSS',
                'WOWjs',
              ]}
              demo={`Demo`}
              demoUrl={`https://crbilladeau.github.io/landing-page-example/`}
              githubUrl={`https://github.com/crbilladeau/landing-page-example`}
              images={gofarImages}
              mobileImages={gofarMobile}
              desktop={true}
              gofar={true}
            />
          )}
        />

        <Route
          path='/dota-stats'
          render={() => (
            <ProjectPage
              title={`DOTA 2 Stats App`}
              goals={[
                'Learning React Bootstrap',
                'Utilize useParams, useEffect, and useState React Hooks to display a hero information component while navigating with React Router between pages',
                'Consume information off of the OpenDota API to display',
                'Create clean, stylized, and responsive hero pages with React Bootstrap',
              ]}
              challenges={[
                'Creating Routes based on hero name parameters to route to the correct page',
                'Navigating the differences between React Bootstrap and Boostrap',
                'Understanding how classNames and properties work for spacing in React Bootstrap',
              ]}
              tech={[
                'React',
                'React Router',
                'axios',
                'styled components',
                'React Bootstrap',
              ]}
              demo={`Demo`}
              demoUrl={`https://crbilladeau.github.io/dota-api/#/`}
              githubUrl={`https://github.com/crbilladeau/dota-api`}
              images={dotaStatsImages}
              mobileImages={videoMobile}
              dotaStats={true}
              desktop={true}
            />
          )}
        />

        {/* <Route
          path='/video-search-app'
          render={() => (
            <ProjectPage
              title={`Video Search App`}
              goals={[
                'Create a video searching app similar to Youtube',
                "Implement search filter capabilities using Youtube's API and fetching data with axios",
                'Display a large video and several smaller thumbnail videos in a list from the search results',
              ]}
              challenges={[
                "Learning how to implement Youtube's API",
                'Properly replacing the main video with the selected video from the thumbnail list using keys, ids, and props',
              ]}
              tech={[
                'React',
                'CSS3',
                'Semantic UI',
                'Youtube Data API',
                'axios',
              ]}
              demo={`Demo`}
              demoUrl={`https://codesandbox.io/s/video-search-app-27b62`}
              githubUrl={`https://github.com/crbilladeau/video-search`}
              images={videoSearchImages}
              desktop={true}
              mobileImages={videoMobile}
              videoApp={true}
            />
          )}
        /> */}
      </Switch>
    </>
  );
};

export default App;
