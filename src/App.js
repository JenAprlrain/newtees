import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import video from './images/WhatisTees.mp4';
import ImageSlider from './ImageSlider';
import drops from './images/Exclusive Drops.png';
import partners from './images/partners.png';
import moon from './images/moon.gif';
import hat from './images/hat1.png';
import punk from './images/punk2.png';
import tech from './images/tech.gif';
import mytees from './images/MyTees.png'

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

  const shouldAutoplay = windowWidth > 768; // Autoplay on screens wider than 768px

  return (
    <Router>
      <div className="App">
      <div class="background-container"></div>
        <Navbar />
        {/* add your routes here */}
      </div>
      <div>
      <ImageSlider />
      </div>
      <div className="video-container">
      <video 
    src={video} 
    autoPlay={shouldAutoplay} 
    muted 
    loop 
    playsInline 
    controls
    style={windowWidth <= 768 ? { width: "100%", height: "auto" } : { width: "50%", height: "auto" }}
  />
  </div>
  <div className="image-container">
  <img src={drops} alt="Exclusive Drops" />
  <img src={partners} alt="Partners" />
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="image-container">
<img src={mytees} alt="tech" />
<img src={tech} alt="tech"  />
</div>
<h2 className="image-title">Current OfficialNFTees Collections</h2>
<div className="image-row">
  <div className="image-item">
    <h3 className="images-title">RoyalTees</h3>
    <img src={moon} alt="royaltees" className="image" />
  </div>
  <div className="image-item">
    <h3 className="images-title">CommuniTees</h3>
    <img src={punk} alt="communitees" className="image" />
  </div>
  <div className="image-item">
    <h3 className="images-title">Lifestyle</h3>
    <img src={hat} alt="lifestyle" className="image" />
  </div>
</div>
<Footer />
</Router>
  
  );
}

export default App;
