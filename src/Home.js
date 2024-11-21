// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importuj Link z react-router-dom
import './Homepage.css';

// Importuj obrázky
import facebookImg from './facebook.png';
import instagramImg from './instagram.png';
import githubImg from './github.png';

const WelcomePage = () => {
  return (
    <div className="welcome">
      <h1 className="welcome-title">
        Vítej v <span className="highlight">Pedrově ráji</span>
      </h1>
      <p className="welcome-subtitle">Student IT | Budoucí milionář</p>

      <nav className="nav">
        <ul className="nav-links">
          {/* Používáme Link místo <a> */}
          <li><Link to="/about">O mně</Link></li>
          <li><Link to="/projekty">Projekty</Link></li>
          
        </ul>
      </nav>

      {/* Přidáme sekci pro obrázky s prokliky */}
      <div className="image-gallery">
        <a href="https://www.facebook.com/petr.cechak.391/" target="_blank" rel="noopener noreferrer">
          <img src={facebookImg} alt="Facebook" className="gallery-image" />
        </a>
        <a href="https://www.instagram.com/petr_cechak/" target="_blank" rel="noopener noreferrer">
          <img src={instagramImg} alt="Instagram" className="gallery-image" />
        </a>
        <a href="https://github.com/Pepista" target="_blank" rel="noopener noreferrer">
          <img src={githubImg} alt="GitHub" className="gallery-image" />
        </a>
      </div>
    </div>
  );
}

export default WelcomePage;
