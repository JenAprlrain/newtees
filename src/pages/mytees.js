import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import fwardrobe from '../images/Fantom Wardrobe.png';
import hwardrobe from '../images/Hedera Wardrobe.png';

const WardrobePage = () => {
  return (
    <>
     <div>
      <div className="AppPage">
        <div className="background-container"></div>
        <Navbar />
      </div>
      </div>
      <br />
      <br />
      <p className="wardrobe-text">Click on a Wardrobe to view the NFTs in your wallet</p>
      <br />
      <br />
      <div className="wardrobe-items">
        <div className="wardrobe-item">
          <Link to="/mytees2">
            <img src={fwardrobe} alt="Fantom Wardrobe" className="connect-wallet-button" />
          </Link>
        </div>
        <div className="wardrobe-item">
          <img src={hwardrobe} alt="Hedera Wardrobe" className="connect-wallet-button" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default WardrobePage;
