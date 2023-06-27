import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import hat1 from '../images/hat1.png';
import hat2 from '../images/hat2.png';
import hat3 from '../images/hat3.png';

function Lifestyle() {

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
            window.open('https://paintswap.finance/marketplace/fantom/collections/officialnftees-lifestyle-collection/nfts', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Lifestyle Collection</h2>
      <div>
      <h2 className="WhatIsInfo">
      This collection features incredibly customized and unique collaborations with artists, pushing the boundries of artistic mediums and canvases and exploring the idea of "what a physical NFT can be."</h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              Visit Collection on Paintswap
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://paintswap.finance/marketplace/fantom/collections/officialnftees-lifestyle-collection/nfts" target="_blank" rel="noopener noreferrer">
    <img src={hat1} alt="hat1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://paintswap.finance/marketplace/fantom/collections/officialnftees-lifestyle-collection/nfts" target="_blank" rel="noopener noreferrer">
    <img src={hat2} alt="hat2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://paintswap.finance/marketplace/fantom/collections/officialnftees-lifestyle-collection/nfts" target="_blank" rel="noopener noreferrer">
    <img src={hat3} alt="hat3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Lifestyle;