import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './images/Red_Logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 768) {
          setIsMenuOpen(false);
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const Links = () => (
    <ul className="nav-links">
<li>
  <Link to="/">Home</Link>
</li>
<li className="dropdown">
  <Link to="/about" className="dropbtn">About</Link>
  <div className="dropdown-content">
    <Link to="/about/what-is-tees">What is Tees</Link>
    <Link to="/about/technology">Technology</Link>
    <Link to="/about/chains">Chains</Link>
  </div>
</li>
<li>
  <Link to="/team">Team</Link>
</li>
<li className="dropdown">
  <Link to="/partners" className="dropbtn">Partners</Link>
  <div className="dropdown-content">
    <Link to="/partners/uman">Uman</Link>
    <Link to="/partners/teens-on-acid">Teens on Acid</Link>
    <Link to="/partners/clokkworky">Clokkworky</Link>
    <Link to="/partners/potlucklabs">Potluck Labs</Link>
    <Link to="/partners/tombheads">Tombheads AH</Link>
    <Link to="/partners/fantompunks">Fantom Punks</Link>
  </div>
</li>
<li className="dropdown">
  <Link to="/collections" className="dropbtn">Collections</Link>
  <div className="dropdown-content">
    <Link to="/collections/royaltees">RoyalTees Collection</Link>
    <Link to="/collections/communitees">CommuniTees Collection</Link>
    <Link to="/collections/lifestyle">Lifestyle Collection</Link>
  </div>
</li>
<li className="dropdown">
  <Link to="/exclusive-drops" className="dropbtn">Exclusive Drops</Link>
  <div className="dropdown-content">
    <Link to="/exclusive-drops/uman-jacket">Uman Jacket</Link>
    <Link to="/exclusive-drops/hedera-holiday-sweater">Hedera Holiday Sweater</Link>
    </div>
  </li>
  <li>
  <Link to="/needle&chain">Needle & Chain</Link>
</li>
<li>
  <Link to="/mytees">My Tees</Link>
</li>
    </ul>
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      {windowWidth > 768 ? (
        /* Regular menu for larger screens */
        <Links />
      ) : (
        /* Hamburger icon and sidebar for smaller screens */
        <>
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
          {isMenuOpen && (
            <ul className="nav-links-vertical">
              <Links />
            </ul>
          )}
        </>
      )}
    </nav>
  );  
};

export default Navbar;
