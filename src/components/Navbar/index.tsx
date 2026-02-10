import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">
            LIES OF <span className="highlight-p">P</span><span className="highlight-wiki"> Wiki</span>
          </NavLink>
        </div>

        <ul className="navbar-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/weapons" className={({ isActive }) => (isActive ? 'active' : '')}>
              Armas
            </NavLink>
          </li>
          <li>
            <NavLink to="/bosses" className={({ isActive }) => (isActive ? 'active' : '')}>
              Bosses
            </NavLink>
          </li>
          <li>
            <NavLink to="/characters" className={({ isActive }) => (isActive ? 'active' : '')}>
              Personagens
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes" className={({ isActive }) => (isActive ? 'active' : '')}>
              Classes
            </NavLink>
          </li>
          <li>
            {/* Classe especial nav-dlc adicionada aqui */}
            <NavLink 
              to="/dlc" 
              className={({ isActive }) => (isActive ? 'active nav-dlc' : 'nav-dlc')}
            >
              DLC
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;