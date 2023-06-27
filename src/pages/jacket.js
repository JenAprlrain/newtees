import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import tee1 from '../images/community-img1.png';
import tee2 from '../images/community-img2.jpg';
import tee3 from '../images/community-img3.png';

function Jacket() {

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
      <h2 className="image-title">Uman Jacket</h2>
      <div>
      <h2 className="WhatIsInfo">
      This jacket was the masterpiece of the 11-NFTEE collab with acclaimed multi-chain artist, UMAN. The canvas itself is a yves saint laurent jean jacket. Tees tags were affixed to the arm and back of the jacket by officialnftees, and the uman pictured above was painted on by the artist. The piece went up for auction on paintswap on OCT 31st, 2021 , and sold for 8,500 FTM (~$24,395 USD value at time of sale).</h2>
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

export default Jacket;