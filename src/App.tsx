import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Estilos
import './styles/global.css';
import './styles/varibles.css';
import './styles/animations.css';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Páginas
import Home from './pages/Home';
import Equipments from './pages/Equipments/Home';
import WeaponList from './pages/Equipments/WeaponList'; // Você deve criar este arquivo
import WeaponDetails from './pages/Equipments/WeaponDetails';
import Bosses from './pages/Bosses';
import BossDetails from './pages/BossDetails';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Classes from './pages/Classes';
import ClassDetails from './pages/ClassesDetails';
import Dlc from './pages/DLC';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipments" element={<Equipments />} />
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
    </Router>
  );
}

export default App;