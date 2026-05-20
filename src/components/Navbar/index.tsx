import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>
            LIES OF <span className="highlight-p">P</span><span className="highlight-wiki"> Wiki</span>
          </NavLink>
        </div>

        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Início
            </NavLink>
          </li>
          
          <li className="dropdown">
            <NavLink to="/equipments" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Equipamentos <span className="arrow">▼</span>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/equipments/armas" onClick={closeMenu}>Armas</NavLink>
              </li>
              <li>
                <NavLink to="/equipments/legioes" onClick={closeMenu}>Braços de Legião</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/bosses" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Bosses
            </NavLink>
          </li>
          <li>
            <NavLink to="/NPC" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Personagens
            </NavLink>
          </li>

          <li className="dropdown">
            <NavLink to="/classes" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Classes <span className="arrow">▼</span>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/classes/1" onClick={closeMenu}>Equilíbrio</NavLink>
              </li>
              <li>
                <NavLink to="/classes/2" onClick={closeMenu}>Destreza</NavLink>
              </li>
              <li>
                <NavLink to="/classes/3" onClick={closeMenu}>Força</NavLink>
              </li>
            </ul>
          </li>

          <li>
            {/* Classe especial nav-dlc adicionada aqui */}
            <NavLink 
              to="/dlc" 
              className={({ isActive }) => (isActive ? 'active nav-dlc' : 'nav-dlc')}
              onClick={closeMenu}
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