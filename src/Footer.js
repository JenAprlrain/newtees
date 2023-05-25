import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaDiscord, FaMedium } from 'react-icons/fa';
import './App.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Team</Link>
          <Link to="/contact">Partners</Link>
          <Link to="/contact">Collections</Link>
          <Link to="/contact">Exclusive Drops</Link>
          <Link to="/contact">Needle & Chain</Link>
          <Link to="/contact">My Tees</Link>
        </div>
        <div className="social-media">
          <a href="https://twitter.com/OfficialNftees" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={32} />
          </a>
          <a href="https://discord.com/invite/EkKahYya9g" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={32} />
          </a>
          <a href="https://officialnftees.medium.com" target="_blank" rel="noopener noreferrer">
          <FaMedium size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
