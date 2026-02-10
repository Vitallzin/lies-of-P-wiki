import { useState } from 'react';
import { bossesData } from '../../data/bossesData';
import BossCard from '../../components/BossCard';
import SearchBar from '../../components/SearchBar';
import './Bosses.css';

const Bosses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBosses = bossesData.filter(boss => 
    boss.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    boss.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bosses-page">
      <header className="bosses-header">
        <h1 className="section-title">Grandes Inimigos</h1>
        <p className="section-subtitle">As marionetes colossais e os horrores que guardam Krat</p>
        
        <div className="search-section">
          <SearchBar 
            value={searchTerm} 
            onChange={setSearchTerm} 
            placeholder="Buscar por nome ou local..."
          />
        </div>
      </header>

      <main className="bosses-grid-container">
        <div className="bosses-grid">
          {filteredBosses.map((boss) => (
            <BossCard 
              key={boss.id}
              {...boss} // Espalha as props id, name, location, etc.
            />
          ))}
        </div>
        
        {filteredBosses.length === 0 && (
          <p className="no-results">Nenhum inimigo encontrado. Você está seguro... por enquanto.</p>
        )}
      </main>
    </div>
  );
};

export default Bosses;