import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Jen from '../images/Jen.png';
import James from '../images/James.png';
import Jerrod from '../images/Jerrod.png';
import Zan from '../images/Zan.png';
function team() {

return (
    <div>
      <div className="AppPage">
      <div class="background-container"></div>
        <Navbar />
      </div>
      <div className="image-row2">
  <div className="image-item">
    <h3 className="images-title">James</h3>
    <a href="https://twitter.com/0xJMONEY" target="_blank" rel="noopener noreferrer">
    <img src={James} alt="James" className="image" /></a>
    <h3 className="images-title">(Team Lead)</h3>
  </div>
  <div className="image-item">
    <h3 className="images-title">Jen</h3>
    <a href="https://twitter.com/jen_aprilrain" target="_blank" rel="noopener noreferrer">
    <img src={Jen} alt="Jen" className="image" /></a>
    <h3 className="images-title">(Dev and Community Management Lead)</h3>
  </div>
  <div className="image-item">
    <h3 className="images-title">Zan</h3>
    <a href="https://twitter.com/DeFiiGhost" target="_blank" rel="noopener noreferrer">
    <img src={Zan} alt="Zan" className="image" /></a>
    <h3 className="images-title">(Metaverse / Strategy Lead)</h3>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    <div>
     <Footer />
     </div>
     </div>
     )
    }

export default team;