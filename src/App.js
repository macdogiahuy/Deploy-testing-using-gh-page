import { useState } from 'react';
import AppHeader from './components/AppHeader';
import DarkLightToggle from './components/DarkLightToggle';
import LeftSide from './components/LeftSide';
import MainContainer from './components/MainContainer';
import VideoBackground from './components/VideoBackground';
import './styles/App.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  const toggleLightMode = () => setIsLightMode(!isLightMode);
  const switchSection = (section) => setActiveSection(section);

  return (
    <div className={`root-wrapper ${isLightMode ? 'light-mode' : ''}`}>
      <VideoBackground />
      <div className="app">
        <DarkLightToggle toggleLightMode={toggleLightMode} />
        <AppHeader />
        <div className="wrapper">
          <LeftSide switchSection={switchSection} />
          <MainContainer activeSection={activeSection} />
        </div>
        <div className="overlay-app"></div>
      </div>
    </div>
  );
}

export default App;
