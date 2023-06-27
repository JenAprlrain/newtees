import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import uman from '../images/uman.png';
import uman1 from '../images/uman1.png';
import uman2 from '../images/uman2.png';

function Uman() {

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
            window.open('https://www.worldofumans.com/home', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Uman</h2>
      <div>
      <h2 className="WhatIsInfo">
      Uman is an Ecuadorian artist and creator of the World of Umans. She studied design at Parsons School of Design in New York City and has created multiple collections on Ethereum and Fantom. She has received accolates including 2021 Artist of the Year and Collection of the Year at the Fantom Developer Conference was recognized at NFT NYC in 2021 as a "Best NFT Artist" nominee and "Best NFT Emerging Artist", having her piece, “I am Uman”, displayed in Times Square. Her collections are among the most highest-volume collections to date on the Fantom blockchain.</h2>
      </div>
      <h2 className="WhatIsInfo">
      OfficialNFTees had the pleasure of collaborating with Uman on an 11-piece sub-collection of the original Royal Tees collection, which featured the Uman Jacket, a hand-painted physical NFTee replica painted on a Yves Saint Laurent jean jacket. See her website below for links to all of her outstanding collections.
      </h2>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              View World of Umans Website
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://www.worldofumans.com/home" target="_blank" rel="noopener noreferrer">
    <img src={uman1} alt="tee1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://www.worldofumans.com/home" target="_blank" rel="noopener noreferrer">
    <img src={uman} alt="tee2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://www.worldofumans.com/home" target="_blank" rel="noopener noreferrer">
    <img src={uman2} alt="tee3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Uman;