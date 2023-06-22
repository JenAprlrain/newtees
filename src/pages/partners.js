import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import uman from '../images/uman2.png'
import toa from '../images/TOA1.png'
import clok from '../images/clokk2.png'
function Partners() {

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
      <h2 className="image-title">Partners</h2>
      <div className="image-row2">
      <div className="image-item">
      <h3 className="images-title">Uman</h3>
      <Link to="/partners/uman"></Link>
      <img src={uman} alt="uman" className="image" />
      </div>
      <div className="image-item">
      <h3 className="images-title">Teens on Acid</h3>
      <Link to="/partners/teens-on-acid"></Link>
      <img src={toa} alt="teens on acid" className="image" />
      </div>
      <div className="image-item">
      <h3 className="images-title">Clokkworky</h3>
      <Link to="/partners/clokkworky"></Link>
      <img src={clok} alt="teens on acid" className="image" />
      </div>
      </div>
      <div className="image-row2">
      <div className="image-item">
      <h3 className="images-title">Potluck Labs</h3>
      <Link to="/partners/potlucklabs"></Link>
      <img src={clok} alt="teens on acid" className="image" />
      </div>
      <div className="image-item">
      <h3 className="images-title">Tombheads AH</h3>
    <Link to="/partners/tombheads"></Link>
    <img src={clok} alt="teens on acid" className="image" />
    </div>
    <div className="image-item">
      <h3 className="images-title">Fantom Punks</h3>
    <Link to="/partners/fantompunks"></Link>
    <img src={clok} alt="teens on acid" className="image" />
    </div>
    </div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Partners;