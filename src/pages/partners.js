import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import uman from '../images/uman2.png'
import toa from '../images/TOA1.png'
import clok from '../images/clokkworky.png'
import potluck from '../images/potluck2.png'
import tomb from '../images/tomb.png'
import punks from '../images/punks.png'
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
      <Link to="/partners/uman">
      <img src={uman} alt="uman" className="image" />
      </Link>
      </div>
      <div className="image-item">
      <h3 className="images-title">Teens on Acid</h3>
      <Link to="/partners/toa">
      <img src={toa} alt="teens on acid" className="image" />
      </Link>
      </div>
      <div className="image-item">
      <h3 className="images-title">Clokkworky</h3>
      <Link to="/partners/clokk">
      <img src={clok} alt="teens on acid" className="image" />
      </Link>
      </div>
      </div>
      <div className="image-row2">
      <div className="image-item">
      <h3 className="images-title">Potluck Labs</h3>
      <Link to="/partners/potluck">
      <img src={potluck} alt="potlucklabs" className="image" />
      </Link>
      </div>
      <div className="image-item">
      <h3 className="images-title">Tombheads AH</h3>
    <Link to="/partners/tomb">
    <img src={tomb} alt="tombheads" className="image" />
    </Link>
    </div>
    <div className="image-item">
      <h3 className="images-title">Fantom Punks</h3>
    <Link to="/partners/punks">
    <img src={punks} alt="fantom punks" className="image" />
    </Link>
    </div>
    </div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Partners;