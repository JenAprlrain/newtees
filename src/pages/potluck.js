import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import left from '../images/batcotc.png';
import logo from '../images/potluck2.png';
import right from '../images/fangserum.png';

function Potluck() {

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
            window.open('https://www.potluck-labs.com/', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Potluck Labs</h2>
      <div>
      <h2 className="WhatIsInfo">
      Potluck Labs is an NFT incubator that has partnered with tens of popular artists to launch successful NFT collections across seven different blockchains (including, ETH, AVAX, MATIC and HBAR), and continues to expand its reach for its more-than 6,500 unique holders.</h2>
      </div>
      <div>
      <h2 className="WhatIsInfo">
      Unlike NFT launchpads that focus on the launch phase of a collection, as an incubator, Potluck Labs covers everything from the marketing effort, to setting up and launching smart contracts, to assisting with direction and roadmap. Due to this approach and strong team vision, Potluck Labs continues to fill a gap in the NFT space, which has brought value to artists and collectors alike.
      </h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              Visit Potluck Website
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://www.potluck-labs.com/" target="_blank" rel="noopener noreferrer">
    <img src={left} alt="tee1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://www.potluck-labs.com/" target="_blank" rel="noopener noreferrer">
    <img src={logo} alt="tee2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://www.potluck-labs.com/" target="_blank" rel="noopener noreferrer">
    <img src={right} alt="tee3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Potluck;