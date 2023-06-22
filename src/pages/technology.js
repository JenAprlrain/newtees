import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import holo from '../images/holografic.png';

function Technology() {

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

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Technology</h2>
      <div>
      <h2 className="WhatIsInfo">Base Web 3 Technology – From the beginning, OfficialNFTees has utilized QR codes to enhance the experience of owning one of our NFTs and physical replicas (the combination of which is often referred to as Phygitals). With the addition of our Web 3 Wardrobe ™, users can prove ownership of their NFTs through a simple QR scan.

Series 1 Technology – through partnership with Authentic Vision, a world leader in authentication labels, and their Meta Anchor technology, OfficialNFTees has added a layer of security to our physicals. Meta Anchors are a serialized, 1/1 holographic QR labels that are not replicable, even by the machines that created them. This technology adds a layer of verification of authenticity that precedes the proof of ownership over the NFTee in the Web3 Wardrobe ™.</h2>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="image-row">
     <div className="image-item">
    <img src={holo} alt="holografic" />
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Technology;