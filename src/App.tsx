/* src/App.tsx */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação dos Estilos Globais
import './styles/global.css';
import './styles/varibles.css';
import './styles/animations.css';

// Importação dos Componentes de Layout (Fixos)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importação das Páginas
import Home from './pages/Home';
import Weapons from './pages/Weapons';
import WeaponDetails from './pages/WeaponDetails'; // Página individual da arma
import Bosses from './pages/Bosses';
import Characters from './pages/Characters';
import Classes from './pages/Classes';
import ClassDetails from './pages/ClassesDetails'; // Página individual da classe
import Dlc from './pages/DLC'; // Importação da nova página de DLC

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* A Navbar fica fora das Routes para aparecer em todas as páginas */}
        <Navbar />

        <main className="main-content">
          <Routes>
            {/* Página Inicial - Sinopse, Preços, História Dev */}
            <Route path="/" element={<Home />} />

            {/* Página de Armas - Grid e Pesquisa */}
            <Route path="/weapons" element={<Weapons />} />
            
            {/* Detalhes da Arma (Rota Dinâmica pelo ID ou Slug) */}
            <Route path="/weapons/:id" element={<WeaponDetails />} />

            {/* Página de Bosses - Narrativa e Lore */}
            <Route path="/bosses" element={<Bosses />} />

            {/* Página de Personagens - Lista Alternada */}
            <Route path="/characters" element={<Characters />} />

            {/* Página de Classes - Guia Inicial */}
            <Route path="/classes" element={<Classes />} />
            
            {/* Detalhes da Classe (Rota Dinâmica) */}
            <Route path="/classes/:id" element={<ClassDetails />} />

            {/* Página da DLC - Informações da Expansão (Tema Azul) */}
            <Route path="/dlc" element={<Dlc />} />
            
          </Routes>
        </main>

        {/* Footer fixo no final do conteúdo */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;