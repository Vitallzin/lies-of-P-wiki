import { useState } from 'react';
import { 
  NPCData, 
  aboutNPCs, 
  stargarazers, 
  increasingMerchant 
} from '../../data/NPCData';
import CharacterCard from '../../components/CharacterCard';
import SearchBar from '../../components/SearchBar';
import './NPC.css';

const NPC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showMore, setShowMore] = useState(false);

  const filterOptions = [
    { value: 'all', label: 'Todos os Habitantes' },
    { value: 'base', label: 'Jogo Base' },
    { value: 'dlc', label: 'DLC' },
  ];

  const filteredNPC = NPCData.filter(NPC => {
    const matchesSearch = NPC.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          NPC.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || 
                         (filter === 'dlc' ? NPC.isDLC : !NPC.isDLC);

    return matchesSearch && matchesFilter;
  });

/* No seu index.tsx, o retorno deve ser exatamente este: */
return (
  <div className="NPC-page animate-fadeIn" >
    {/* SEÇÃO INFORMATIVA (BLOG) */}
    <section className="NPC-blog-section">
      
      {/* SEMPRE VISÍVEL: About NPCs */}
      <div className="blog-row full-width">
        <div className="blog-card about-card horizontal">
          <div className="card-content">
            <h2>{aboutNPCs.title}</h2>
            <p className="mini-text">{aboutNPCs.description}</p>
          </div>
          <div className="card-image small">
            <img src={aboutNPCs.image} alt={aboutNPCs.title} />
          </div>
        </div>
      </div>

      {/* CONTROLE DE EXPANSÃO COM FADE */}
      <div className={`expand-controller ${showMore ? 'is-expanded' : ''}`}>
        {!showMore && <div className="fade-overlay"></div>}
        <button 
          className="btn-saiba-mais-blog" 
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Ocultar Detalhes ▲' : 'Saiba Mais sobre Krat ▼'}
        </button>
      </div>

      {/* CONTEÚDO EXPANSÍVEL: Restante dos Cards Empilhados */}
      <div className={`blog-expandable-content ${showMore ? 'visible' : ''}`}>
        <div className="blog-stack">
          
          {/* Stargazers */}
          <div className="blog-row full-width">
            <div className="blog-card stargazers-card horizontal">
              <div className="card-image-stack">
                <div className="card-image small">
                  <img src={stargarazers.image} alt={stargarazers.title} />
                </div>
                <div className="card-image small">
                  <img src={stargarazers.image2} alt={stargarazers.title} />
                </div>
              </div>
              <div className="card-content">
                <h3>{stargarazers.title}</h3>
                <p className="mini-text">{stargarazers.description}</p>
                <p className="mini-text" style={{ marginTop: '10px' }}>{stargarazers.description2}</p>
              </div>
            </div>
          </div>

          {/* Increasing Merchant */}
          <div className="blog-row full-width">
            <div className="blog-card merchant-card horizontal">
              <div className="card-content">
                <h3>{increasingMerchant.titles}</h3>
                <p className="mini-text">{increasingMerchant.description}</p>
                <p className="mini-text" style={{ marginTop: '10px' }}>{increasingMerchant.description2}</p>
              </div>
              <div className="card-image-stack">
                <div className="card-image small">
                  <img src={increasingMerchant.image} alt={increasingMerchant.titles} />
                </div>
                <div className="card-image small">
                  <img src={increasingMerchant.image2} alt={increasingMerchant.titles} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>

    <div className="section-divider-container mini">
      <div className="gold-line"></div>
      <div className="divider-icon">✦</div>
      <div className="gold-line"></div>
    </div>

    <header className="NPC-header">
      <h1 className="section-title">Todos os NPCs</h1>
      <p className="section-subtitle">Amigos e inimigos encontrados nas ruas decadentes.</p>
      
      <div className="search-section">
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          placeholder="Buscar por nome ou local..."
          filterValue={filter}
          onFilterChange={setFilter}
          filterOptions={filterOptions}
        />
      </div>
    </header>

    <main className="NPC-grid-container">
      <div className="NPC-grid">
        {filteredNPC.map((character) => (
          <CharacterCard
            key={character.id}
            {...character} 
          />
        ))}
      </div>
      
      {filteredNPC.length === 0 && (
        <p className="no-results">Nenhum personagem encontrado. Você está seguro... por enquanto.</p>
      )}
    </main>
  </div>
);
};

export default NPC;