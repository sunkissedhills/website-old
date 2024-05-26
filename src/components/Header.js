import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <header className="overlay-content">
    <nav className="quick-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/bio">Bio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://www.instagram.com/sunkissed.hills/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.tiktok.com/@sunkissed.hills" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="https://www.youtube.com/@sunkissed-rr3yy" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61558708397094" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
  </header>
);

export default Header;
