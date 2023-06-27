import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import moon from '../images/moon.gif';
import build from '../images/build.gif';
import spooky from '../images/spooky.gif';

function RoyalTees() {

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

        const handleButtonClick = () => {
            window.open('https://paintswap.finance/marketplace/fantom/collections/officialnftees', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">RoyalTees Collection</h2>
      <div>
      <h2 className="WhatIsInfo">
        Our Genesis 100 OG NFTee Collection was our first, launching on ZooCoin NFT Marketplace in April of 2021, and subsequently migrating to Paintswap. These NFTees are focused on celebrating the Fantom Ecosystem. Each holder earns royalties earned by the contract from primary and secondary sales, and subsequent collections will also funnel royaltees to holders of these 100 NFTees.</h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              Visit Collection on Paintswap
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://paintswap.finance/marketplace/fantom/collections/officialnftees" target="_blank" rel="noopener noreferrer">
    <img src={moon} alt="moon" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://paintswap.finance/marketplace/fantom/collections/officialnftees" target="_blank" rel="noopener noreferrer">
    <img src={build} alt="build on fantom" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://paintswap.finance/marketplace/fantom/collections/officialnftees" target="_blank" rel="noopener noreferrer">
    <img src={spooky} alt="spooky" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default RoyalTees;