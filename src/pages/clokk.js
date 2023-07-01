import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import clok1 from '../images/clok1.png';
import clok2 from '../images/clok2.png';
import clok3 from '../images/clok3.png';

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
            window.open('https://linktr.ee/clokkworky', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Clokkworky</h2>
      <div>
      <h2 className="WhatIsInfo">
      Clokkworky is an artist who describes his style as, “Psychedelic Cubism - Abstract Art - Psychedelic Art & Pepedelic Cryptocubism.” His unique ability, skill and appeal to crypto space have resulted in some of the highest single-piece sales on Fantom blockchain NFT auctions to date.</h2>
      </div>
      <div>
      <h2 className="WhatIsInfo">
      OfficialNFTees has partnered with Clokkworky on vibrant, three piece collection that brought his artistic genius to the forefront of the Royal Tees collection. Clokkworky has also created a three-piece collection of “Crypto Deities” named by the cross-section of OfficialNFTees/Clokkworky community-members. Limited release of these designs are planned with a TBD drop date.</h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              View Clokkworky Website
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://linktr.ee/clokkworky" target="_blank" rel="noopener noreferrer">
    <img src={clok1} alt="tee1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://linktr.ee/clokkworky" target="_blank" rel="noopener noreferrer">
    <img src={clok2} alt="tee2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://linktr.ee/clokkworky" target="_blank" rel="noopener noreferrer">
    <img src={clok3} alt="tee3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Clokk;