import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Estilos
import './styles/global.css';
import './styles/variables.css';
import './styles/animations.css';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Páginas
import Home from './pages/Home';
import Equipments from './pages/Equipments/Home';
import WeaponList from './pages/Equipments/WeaponList';
import WeaponDetails from './pages/Equipments/WeaponDetails';
import Bosses from './pages/Bosses';
import BossDetails from './pages/BossDetails';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Classes from './pages/Classes';
import ClassDetails from './pages/ClassesDetails';
import Dlc from './pages/DLC';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/dlc') {
      document.body.classList.add('theme-dlc');
    } else {
      document.body.classList.remove('theme-dlc');
    }
  }, [location]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/equipments/:category" element={<WeaponList />} />
          <Route path="/equipments/:category/:id" element={<WeaponDetails />} />
          <Route path="/bosses" element={<Bosses />} />
          <Route path="/bosses/:id" element={<BossDetails />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:id" element={<ClassDetails />} />
          <Route path="/dlc" element={<Dlc />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
