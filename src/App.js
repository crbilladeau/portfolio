import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ProjectPage from './components/ProjectPage';
import {
  acnhImages,
  gofarImages,
  videoSearchImages,
} from './assets/image-data';

const App = () => {
  AOS.init();
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/portfolio/new-horizons-companion'
          component={() => (
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
                'Learning how to design for mobile',
                'Data management and storage',
                'Navigating the Apple Developer & App Store Submission Guidelines',
              ]}
              tech={['React Native', 'CSS3', 'Expo', 'lodash']}
              demoUrl={`https://expo.io/@cbilladeau/nh-companion`}
              githubUrl={`https://github.com/crbilladeau/new-horizons-companion`}
              images={acnhImages}
              desktop={false}
            />
          )}
        />
        {/* 
        <Route
          path='/movie-finder-app'
          component={() => (
            <ProjectPage
              title={`Movie Finder App`}
              goals={['Goals Placeholder']}
              challenges={['Challenges Placeholder']}
              tech={['React']}
              demoUrl={`https://github.com`}
              githubUrl={`https://github.com`}
              images={['']}
              desktop={true}
            />
          )}
        /> */}

        {/* <Route
          path='/dnd-app'
          component={() => (
            <ProjectPage
              title={`DND App`}
              goals={['Goals Placeholder']}
              challenges={['Challenges Placeholder']}
              tech={['React']}
              demoUrl={`https://github.com`}
              githubUrl={`https://github.com`}
              images={['']}
              desktop={true}
            />
          )}
        /> */}

        <Route
          path='/travel-agency-landing'
          component={() => (
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
              demoUrl={`https://crbilladeau.github.io/landing-page-example/`}
              githubUrl={`https://github.com/crbilladeau/landing-page-example`}
              images={gofarImages}
              desktop={true}
            />
          )}
        />
        {/* 
        <Route
          path='/stream-app'
          component={() => (
            <ProjectPage
              title={`Stream App`}
              goals={['Goal Placeholer']}
              challenges={['Challenges Placeholder']}
              tech={['React']}
              demoUrl={`stream placeholder`}
              githubUrl={`stream placeholder`}
              images={['']}
              desktop={true}
            />
          )}
        /> */}

        <Route
          path='/video-search-app'
          component={() => (
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
              demoUrl={`https://codesandbox.io/s/video-search-app-27b62`}
              githubUrl={`https://github.com/crbilladeau/video-search`}
              images={videoSearchImages}
              desktop={true}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
