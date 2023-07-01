import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import tomb from '../images/tomb.jpg';
import tomblogo from '../images/tomb.jpeg';


function Tomb() {

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
            window.open('https://tombheads.com/', '_blank');
          };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Tombheads Auction House</h2>
      <div>
      <h2 className="WhatIsInfo">
      The Tombheads Auctionhouse is a multi-chain, Discord-based Auctionhouse that has attracted a collaborative community of top-quality creators from across artistic disciplines, as well as a vibrant community of NFT collectors. The Tombheads team has also pioneered several aspects of the Fantom NFT scene, offering the first and most successful free mint to date, Degenerabbits. This collection included a full roadmap and is among the highest-volume collections on Fantom to date.
Tombheads has also partnered with many community artists to host mint events, which have been among the most successful mints on Fantom, and Tombheads Awards, which was a full award-show style event with web 3 flare, as community members nominated and voted for their favorite contributors across several awards categories.
OfficialNFTees partnered with Tombheads on a three-piece release within the Royal Tees collection, which are among the highest primary sale pieces to and were sold in the Tombheads Auctionhouse. OfficialNFTees has participated in a number of Tombheads Auctionhouse Regulars auctions throughout 2021 and 2022.
</h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              Visit Tombheads Website
      </button>
      </div>
      <div className="image-row2">
  <div className="image-item">
    <a href="https://tombheads.com/" target="_blank" rel="noopener noreferrer">
    <img src={tomb} alt="tee1" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://tombheads.com/" target="_blank" rel="noopener noreferrer">
    <img src={tomblogo} alt="tee2" className="image" /></a>
  </div>
  <div className="image-item">
    <a href="https://tombheads.com/" target="_blank" rel="noopener noreferrer">
    <img src={tomb} alt="tee3" className="image" /></a>
  </div>
</div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Tomb;