import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import sweater1 from '../images/HbarSweater.gif';
import sweater2 from '../images/claimed.png';
import sweater3 from '../images/holiday.gif';
import video from '../images/sweater.mp4'

function Sweater() {

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
            window.open('https://nftier.tech/mint/hedera-holiday', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Hedera Holiday Sweater</h2>
      <div>
      <div className="video-container2">
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
      <h2 className="WhatIsInfo">
      The Hedera Holiday collection sweaters are a celebration of web3 fashion and cross-chain collaboration. The first NFT apparel collection on Hedera from OfficialNFTees in partnership with Potluck Labs utilizes a custom physical claim solution developed by NFTier. Hedera Holiday sweaters come with a package of multiple file types as well as a premium, knitted physical sweater highlighting Hedera's HBAR logo and the original TEES tag.</h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              Visit Collection on NFTier
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://nftier.tech/mint/hedera-holiday" target="_blank" rel="noopener noreferrer">
    <img src={sweater1} alt="tee1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://nftier.tech/mint/hedera-holiday" target="_blank" rel="noopener noreferrer">
    <img src={sweater2} alt="tee2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://nftier.tech/mint/hedera-holiday" target="_blank" rel="noopener noreferrer">
    <img src={sweater3} alt="tee3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Sweater;