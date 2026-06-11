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
import LegionList from './pages/Equipments/LegionList';
import LegionDetails from './pages/Equipments/LegionDetails';
import Amulets from './pages/Equipments/Amulets';
import AmuletDetails from './pages/Equipments/AmuletDetails';
import Bosses from './pages/Bosses';
import BossDetails from './pages/BossDetails';
import NPC from './pages/NPC';
import NPCDetails from './pages/NPCDetails';
import Classes from './pages/Classes';
import ClassDetails from './pages/ClassesDetails';
import Dlc from './pages/DLC';

// Dados para verificação de DLC
import { bossesData } from './data/bossesData';
import { weaponsData } from './data/waponsData';
import { NPCData } from './data/NPCData';
import { legionData } from './data/legionData';
import { amuletsData } from './data/amuletsData';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    // 1. Verifica se está na seção principal da DLC
    const isDlcSection = pathname.startsWith('/dlc');

    // 2. Coleta todos os IDs de itens que são DLC
    const dlcIds = [
      ...bossesData.filter(b => b.isDLC).map(b => String(b.id)),
      ...weaponsData.filter(w => w.isDLC).map(w => String(w.id)),
      ...NPCData.filter(n => n.isDLC).map(n => String(n.id)),
      ...legionData.filter(l => l.isDLC).map(l => String(l.id)),
      ...amuletsData.filter(a => a.isDLC).map(a => String(a.id))
    ];

    // 3. Verifica se o ID na URL pertence a um item DLC
    const pathSegments = pathname.split('/');
    const isDlcItem = dlcIds.some(id => pathSegments.includes(id));

    // Aplica o tema global
    if (isDlcSection || isDlcItem) {
      document.body.classList.add('theme-dlc');
    } else {
      document.body.classList.remove('theme-dlc');
    }
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <div key={location.pathname} className="page-transition animate-fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipments" element={<Equipments />} />
            <Route path="/equipments/legioes" element={<LegionList />} />
            <Route path="/equipments/legioes/:id" element={<LegionDetails />} />
            <Route path="/equipments/amuletos" element={<Amulets />} />
            <Route path="/equipments/amuletos/:id" element={<AmuletDetails />} />
            <Route path="/equipments/:category" element={<WeaponList />} />
            <Route path="/equipments/:category/:id" element={<WeaponDetails />} />
            <Route path="/bosses" element={<Bosses />} />
            <Route path="/bosses/:id" element={<BossDetails />} />
            <Route path="/NPC" element={<NPC />} />
            <Route path="/NPC/:id" element={<NPCDetails />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/:id" element={<ClassDetails />} />
            <Route path="/dlc" element={<Dlc />} />
          </Routes>
        </div>
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
