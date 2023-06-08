import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import tech from './images/techbanner.gif';
import mytees from './images/MyTees.png'
import About from './images/About.png'

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

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    navigate('/other-page');
  };

  return (
    <div>
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
<Link to="/mytees" style={{ display: 'block' }} onClick={handleLinkClick}>
<img src={mytees} alt="mytees" />
</Link>
<Link to="/about/what-is-tees" style={{ display: 'block' }} onClick={handleLinkClick}>
<img src={About} alt="about" />
</Link>
</div>
<div className="image-techcontainer">
<img src={tech} alt="tech" />
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
</div>
  
  );
}

export default App;
