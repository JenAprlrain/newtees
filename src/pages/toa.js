import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import toa1 from '../images/TOA.png';
import toa2 from '../images/TOA2.png';
import toa3 from '../images/TOA3.png';

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
      <h2 className="image-title">Teens on Acid</h2>
      <div>
      <h2 className="WhatIsInfo">
      Joshua Thorsen, also known as Teens On Acid (TOA), is an Australian neo-pop artist best known in the NFT space for his edgy and energetic Astro-kids and Acid cats collections. TOA has created several popular collections both on-and-off chain, on a variety of mediums including clothing, skateboards, digital canvas and more. His collections are among the most popular in the FTM and AVAX NFT communities, and he has also launched successful collections on Ethereum with substantial secondary market volume. TOA is very engaging with his community and can be seen attending weekly auctions in the Tombheads Auctionhouse discord, where he is among the highest-selling artists to date.</h2>
      </div>
      <h2 className="WhatIsInfo">
      TEES has been working on a collaboration with TOA to bring TOA collectors favorite NFTs to life in physical apparel. Release date to be announced.
      </h2>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              View Teens on Acid Website
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://www.worldofumans.com/home" target="_blank" rel="noopener noreferrer">
    <img src={toa1} alt="tee1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://www.worldofumans.com/home" target="_blank" rel="noopener noreferrer">
    <img src={toa2} alt="tee2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://www.worldofumans.com/home" target="_blank" rel="noopener noreferrer">
    <img src={toa3} alt="tee3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Uman;