import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import tee1 from '../images/community-img1.png';
import tee2 from '../images/community-img2.jpg';
import tee3 from '../images/community-img3.png';

function Clokk() {

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
            window.open('https://paintswap.finance/marketplace/collections/officialnftees-communitee-collection', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">CommuniTees Collection</h2>
      <div>
      <h2 className="WhatIsInfo">
        The CommuniTee Collection pays homage to the OG 8-bit NFT projects on Fantom as well as several OG protocols and influencers within the the Fantom community. This collection recognizes that the 100 OG NFTees are not accessible to all members of the community, and seeks to grow our engagement. This contract will earn Royaltees for 100 OG NFTee holders.</h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              Visit Collection on Paintswap
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://paintswap.finance/marketplace/collections/officialnftees-communitee-collection" target="_blank" rel="noopener noreferrer">
    <img src={tee1} alt="tee1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://paintswap.finance/marketplace/collections/officialnftees-communitee-collection" target="_blank" rel="noopener noreferrer">
    <img src={tee2} alt="tee2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://paintswap.finance/marketplace/collections/officialnftees-communitee-collection" target="_blank" rel="noopener noreferrer">
    <img src={tee3} alt="tee3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Clokk;