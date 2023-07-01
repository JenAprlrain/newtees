import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import punk1 from '../images/punks.png';
import punk2 from '../images/punktee.png';
import punk3 from '../images/babypunk.png';

function Punks() {

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
            window.open('https://twitter.com/FantomPunks', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Fantom Punks</h2>
      <div>
      <h2 className="WhatIsInfo">
      Sarge is one of the pioneers of the Fantom NFT scene, whose 100-piece collection of FantomPunks has been among the most popular on Fantom since launching in early 2021. Since then, Sarge has contributed much to the community through free mints, airdrops to existing FantomPunks Holders, and his “SWOL” art collaborations with NFT Incubator Potluck Labs.</h2>
      </div>
      <div>
      <h2 className="WhatIsInfo">
      FantomPunks, in combination with Gotham Apes, also hosted a first-of-its-kind in-person NFT Auction in Austin, TX during SXSW in March of 2021.</h2>
      </div>
      <div>
      <h2 className="WhatIsInfo">
      TEES and FantomPunks made one of the first multi-NFT collaborations on the Fantom blockchain as part of the FantomPunks and Royal Tees collections.</h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              Visit Fantom Punks Twitter
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://twitter.com/FantomPunks" target="_blank" rel="noopener noreferrer">
    <img src={punk1} alt="tee1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://twitter.com/FantomPunks" target="_blank" rel="noopener noreferrer">
    <img src={punk2} alt="tee2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://twitter.com/FantomPunks" target="_blank" rel="noopener noreferrer">
    <img src={punk3} alt="tee3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Punks;