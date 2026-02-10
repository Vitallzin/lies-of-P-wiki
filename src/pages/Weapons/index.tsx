import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import WeaponCard from '../../components/WeaponsCard';
import { weaponsData } from '../../data/waponsData';
import './Weapons.css';

const Weapons = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra as armas por nome ou tipo
  const filteredWeapons = weaponsData.filter((weapon) =>
    weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    weapon.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="weapons-page">
      <header className="weapons-header">
        <h1 className="section-title">Arsenal de Krat</h1>
        <p className="section-subtitle">Pressione o aço contra a verdade de Krat</p>
        
        <div className="search-section">
          <SearchBar 
            value={searchTerm} 
            onChange={setSearchTerm} 
            placeholder="Buscar por nome ou categoria..."
          />
        </div>
      </header>

      <main className="weapons-grid-container">
        {filteredWeapons.length > 0 ? (
          <div className="weapons-grid">
            {filteredWeapons.map((weapon) => (
              <WeaponCard
                key={weapon.id}
                id={weapon.id}
                name={weapon.name}
                type={weapon.type}
                image={weapon.image}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>Nenhum item encontrado no inventário.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Weapons;