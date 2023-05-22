import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import video from './images/WhatisTees.mp4'

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* add your routes here */}
      </div>
      <div className="video-container">
      <video 
    src={video} 
    autoPlay 
    muted 
    loop 
    playsInline 
    controls
    style={windowWidth <= 768 ? { width: "100%", height: "auto" } : { width: "50%", height: "auto" }}
  />
  </div>
    </Router>
  
  );
}

export default App;
