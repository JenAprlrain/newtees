import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import avax from '../images/avax.png';
import polygon from '../images/polygon.png';
import shimmer from '../images/shimmer.png';
import fantom from '../images/fantomlogo.png';
import hedera from '../images/hederaLogo.jpg';

function Chains() {

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
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Chains</h2>
      <h2 className="WhatIsInfo">We have launched on Fantom and Hedera Hashgraph</h2>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://www.fantom.foundation/" target="_blank" rel="noopener noreferrer">
    <img src={fantom} alt="fantom" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://hedera.com/" target="_blank" rel="noopener noreferrer">
    <img src={hedera} alt="hedera" className="image" /></a>
  </div>
  </div>
      <div>
      <h2 className="WhatIsInfo">The team continues to explore opportunities and plan launches on the following chains at this time</h2>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <h3 className="images-title">Avax</h3>
    <a href="https://www.avax.network/" target="_blank" rel="noopener noreferrer">
    <img src={avax} alt="avax" className="image" /></a>
  </div>
  <div className="image-item">
    <h3 className="images-title">Polygon</h3>
    <a href="https://polygon.technology/" target="_blank" rel="noopener noreferrer">
    <img src={polygon} alt="polygon" className="image" /></a>
  </div>
  <div className="image-item">
    <h3 className="images-title">Shimmer</h3>
    <a href="https://shimmer.network/" target="_blank" rel="noopener noreferrer">
    <img src={shimmer} alt="shimmer" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Chains;