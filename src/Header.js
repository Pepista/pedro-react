import './Header.css'; // Import stylů
import { Link } from 'react-router-dom'; // Import React Routeru

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Pedro Joestar</h1>
                <nav className="nav">
        <ul className="nav-links">
          
          <li><Link to="/">Domů</Link></li>
          <li><Link to="/About">O mně</Link></li>
          <li><Link to="/Projekty">Projekty</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
            </div>
        </header>
    );
}

export default Header;
