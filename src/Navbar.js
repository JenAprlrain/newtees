import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './images/Red_Logo.png';
import logo2 from './images/logo_white.png';

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
<span className="dropbtn">About</span>
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
<Link to="/partners">Partners</Link>
  <div className="dropdown-content">
    <Link to="/partners/nftier">NFTier</Link>
    <Link to="/partners/uman">Uman</Link>
    <Link to="/partners/clokk">Clokkworky</Link>
    <Link to="/partners/potluck">Potluck Labs</Link>
    <Link to="/partners/tomb">Tombheads AH</Link>
    <Link to="/partners/punks">Fantom Punks</Link>
  </div>
</li>
<li className="dropdown">
<span className="dropbtn">Collections</span>
  <div className="dropdown-content">
    <Link to="/collections/royaltees">RoyalTees Collection</Link>
    <Link to="/collections/communitees">CommuniTees Collection</Link>
    <Link to="/collections/lifestyle">Lifestyle Collection</Link>
  </div>
</li>
<li className="dropdown">
<Link to="/drops">Exclusive Drops</Link>
  <div className="dropdown-content">
    <Link to="/drops/jacket">Uman Jacket</Link>
    <Link to="/drops/sweater">Hedera Holiday Sweater</Link>
    <Link to="/drops/yachtclub">Hedera Yacht Club</Link>
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
        <img src={logo2} alt="Logo" />
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
