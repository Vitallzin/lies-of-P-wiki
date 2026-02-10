import { useState } from 'react';
import { charactersData } from '../../data/charactersData';
import CharacterCard from '../../components/CharacterCard';
import SearchBar from '../../components/SearchBar';
import './Characters.css';

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChars = charactersData.filter(char => 
    char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    char.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="characters-page">
      <header className="characters-header">
        <h1 className="section-title">Habitantes de Krat</h1>
        <p className="section-subtitle">Aliados e mentores nesta jornada pela humanidade</p>
        
        <div className="search-section">
          <SearchBar 
            value={searchTerm} 
            onChange={setSearchTerm} 
            placeholder="Buscar personagem..."
          />
        </div>
      </header>

      <main className="characters-grid-container">
        <div className="characters-grid">
          {filteredChars.map((char) => (
            <CharacterCard key={char.id} {...char} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Characters;