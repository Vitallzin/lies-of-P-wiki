import { useState } from 'react';
import { charactersData } from '../../data/charactersData';
import CharacterCard from '../../components/CharacterCard';
import SearchBar from '../../components/SearchBar';
import './Characters.css';

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharacters = charactersData.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

/* No seu index.tsx, o retorno deve ser exatamente este: */
return (
  <div className="characters-page"> {/* Certifique-se que o CSS tem esse 's' */}
    <header className="characters-header">
      <h1 className="section-title">Habitantes de Krat</h1>
      <p className="section-subtitle">Amigos e inimigos encontrados nas ruas decadentes.</p>
      
      <div className="search-section">
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          placeholder="Buscar por nome ou local..."
        />
      </div>
    </header>

    <main className="characters-grid-container">
      <div className="characters-grid">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            {...character} 
          />
        ))}
      </div>
      
      {filteredCharacters.length === 0 && (
        <p className="no-results">Nenhum personagem encontrado. Você está seguro... por enquanto.</p>
      )}
    </main>
  </div>
);
};

export default Characters;