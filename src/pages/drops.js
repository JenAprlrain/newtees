import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import jacket from '../images/jacket.gif'
import sweater from '../images/HbarSweater.gif'
import hyc from '../images/hyc.gif'

function Drops() {

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
      <h2 className="image-title">Exclusive Drops</h2>
      <div className="image-row2">
      <div className="image-item">
      <h3 className="images-title">Uman Jacket</h3>
      <Link to="/drops/jacket">
      <img src={jacket} alt="uman" className="image" />
      </Link>
      </div>
      <div className="image-item">
      <h3 className="images-title">Hedera Holiday Sweater</h3>
      <Link to="/drops/sweater">
      <img src={sweater} alt="teens on acid" className="image" />
      </Link>
      </div>
      <div className="image-item">
      <h3 className="images-title">Hedera Yacht Club</h3>
      <Link to="/drops/yachtclub">
      <img src={hyc} alt="teens on acid" className="image" />
      </Link>
      </div>
    </div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default Drops;