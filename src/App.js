// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutPage from './AboutPage';  // Importuj AboutPage
import ProjectsPage from './ProjectsPage';  // Importuj ProjectsPage
import ContactPage from './ContactPage';  // Importuj ContactPage
import './App.css';

function App() {
  return (
    <Router> {/* Obalíme celou aplikaci v Router */}
      <div className="App">
        <div className="content">
          <Routes>  {/* Definujeme cesty */}
            <Route path="/" element={<Home />} /> {/* Hlavní stránka */}
            <Route path="/about" element={<AboutPage />} /> {/* O mně stránka */}
            <Route path="/projekty" element={<ProjectsPage />} /> {/* Projekty stránka */}
            <Route path="/contact" element={<ContactPage />} /> {/* Kontakt stránka */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
