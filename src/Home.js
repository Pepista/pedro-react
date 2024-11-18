// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';  // Importuj Link z react-router-dom
import './Homepage.css';

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
          <li><Link to="/contact">Kontakt</Link></li> {/* Odkaz na stránku Kontakt */}
        </ul>
      </nav>
    </div>
  );
}

export default WelcomePage;
