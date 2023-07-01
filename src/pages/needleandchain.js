import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import banner from '../images/techbanner.gif';

function Needle() {

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
        window.open('https://forms.gle/NoxU4x4C68SkT59K6', '_blank');
      };

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">Needle & Chain</h2>
      <div>
      <h2 className="WhatIsInfo">Needle & Chain provides NFTees as a service for a procured collection of partners to provide their communities a full service phygital experience. We provide packages that meet all your needs and secure premium quality merch to the blockchain. </h2>
      </div>
      <div>
      <h2 className="WhatIsInfo">Click the button below to fill out our form to inquire pricing on a Needle & Chain package </h2>
      </div>
      <div className="image-row2">
      <button className="connect-button" onClick={handleButtonClick}>
              Needle & Chain Form
      </button>
      </div>
      <div className="image-techcontainer">
    <img src={banner} alt="needle and chain" />
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

export default Needle;