import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import video from '../images/Tees.mov'

function WhatIsTees() {

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
  
    const shouldAutoplay = windowWidth > 0; // Autoplay on screens wider than 768px

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <h2 className="image-title">What is TEES?</h2>
      <div>
      <h2 className="WhatIsInfo">Tees is a web 3 digital fashion brand that seeks to offer secure, premium threads to our technology and fashion-focused community, elevating collectability. We offer engagement through our drop-style events that feature both partners and TEES-branded apparel, all of which is meticulously designed and printed with the highest quality materials available.</h2>
      </div>
      <div className="video-container2">
      <video 
    src={video} 
    autoPlay={shouldAutoplay} 
    muted 
    loop 
    playsInline 
    controls
    style={windowWidth <= 768 ? { width: "100%", height: "auto" } : { width: "50%", height: "auto" }}
  />
  </div>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default WhatIsTees;