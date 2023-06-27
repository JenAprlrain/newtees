import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import polo from '../images/hyc.gif';
import logo from '../images/HYClogo.png';
import hat from '../images/HYC_Hat.gif';

function Yachtclub() {

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
            window.open('https://nftier.tech/mint/hedera-yacht-club-polo', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Hedera Yacht Club</h2>
      <div>
      <h2 className="WhatIsInfo">
      Hedera Yacht Club is an exclusive collection done in collaboration with Nfteir and Hedera Yacht Club. Physical polos and hats can be claimed only once by an owner of the NFT.</h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              Visit Collection on NFTier
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://nftier.tech/mint/hedera-yacht-club-polo" target="_blank" rel="noopener noreferrer">
    <img src={polo} alt="polo" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://nftier.tech/mint/hedera-yacht-club-polo" target="_blank" rel="noopener noreferrer">
    <img src={logo} alt="logo" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://nftier.tech/mint/hedera-yacht-club-polo" target="_blank" rel="noopener noreferrer">
    <img src={hat} alt="hat" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Yachtclub;