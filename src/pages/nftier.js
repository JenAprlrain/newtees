import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import nftier1 from '../images/HbarSweater.gif';
import nftier2 from '../images/nftier.png';
import nftier3 from '../images/hyc.gif';

function Nftier() {

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
            window.open('https://nftier.tech/', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">NFTier</h2>
      <div className="image-item">
      <img src={nftier2} alt="tee1" width="200" />
      </div>
      <div>
      <h2 className="WhatIsInfo">
      NFTier is a one-of-a-kind launchpad and NFT analytics dapp built on Hedera, featuring all of the biggest NFT drops on the hashgraph. NFTier also provides exclusive access to customizable NFT market Advanced Analytics and Rarity Analytics, giving traders and holders valuable insights into the market as well as their own portfolios. </h2>
      </div>
      <div>
      <h2 className="WhatIsInfo">
      As part of our partnership that began in 2022, NFTier created a seamless ordering process for physical apparel NFTs (also known as Phygitals) that ensures two key functions; 1) each physical item can only be ordered once, protecting exclusivity and supply, and 2) each item is securely paired with a specific NFT, protecting ownership of the Phygital.
      </h2>
      </div>
      <div>
      <h2 className="WhatIsInfo">
      We look forward to bringing many more digital fashion drops to Hedera in partnership with NFTier. 
      </h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              View NFTier Website
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://nftier.tech/" target="_blank" rel="noopener noreferrer">
    <img src={nftier1} alt="tee1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://nftier.tech/" target="_blank" rel="noopener noreferrer">
    <img src={nftier2} alt="tee2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://nftier.tech/" target="_blank" rel="noopener noreferrer">
    <img src={nftier3} alt="tee3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Nftier;