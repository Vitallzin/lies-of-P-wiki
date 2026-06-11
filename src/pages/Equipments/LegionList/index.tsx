import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  legionData,
  aboutLegionArms,
  whatAreLegionArms,
  arethereDifferentLegionArms,
  bestLegionArms,
  howToSwitchModifyAndUpgradeLegionArms,
  howToGainLegionArms,
  newLegionArmsDLC 
} from '../../../data/legionData';
import { weaponsCategories } from '../../../data/waponsData';
import SearchBar from '../../../components/SearchBar';
import { usePageFilterState } from '../../../hooks/usePageFilterState';
import './LegionList.css';

const LegionList = () => {
  const { searchTerm, setSearchTerm, filters, setFilters } = usePageFilterState('legion-arms');
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const attackTypeOptions = Array.from(new Set(legionData.map(item => item.typeAttack).filter(Boolean)))
    .map(type => ({ value: `attack:${type}`, label: `Ataque: ${type}` }));

  const filterOptions = [
    { value: 'all', label: 'Todos os Bracos' },
    { value: 'base', label: 'Jogo Base' },
    { value: 'dlc', label: 'DLC' },
    ...attackTypeOptions,
  ];

  // Encontra as informações da categoria 'legioes' para o cabeçalho
  const categoryInfo = weaponsCategories.find(c => c.id === 'legioes');

  const filteredItems = legionData
    .filter(item => {
      const normalizedSearch = searchTerm.toLowerCase();
      const matchesSearch = item.name.toLowerCase().includes(normalizedSearch) ||
                            item.Location.toLowerCase().includes(normalizedSearch) ||
                            item.typeAttack.toLowerCase().includes(normalizedSearch) ||
                            item.description.toLowerCase().includes(normalizedSearch) ||
                            item.infomationLegion.toLowerCase().includes(normalizedSearch);

      const matchesFilter = filters.includes('all') ||
                            filters.some(filter => {
                              if (filter === 'base') return !item.isDLC;
                              if (filter === 'dlc') return item.isDLC;
                              if (filter.startsWith('attack:')) return item.typeAttack === filter.replace('attack:', '');
                              return false;
                            });

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  return (
    <div className="legion-list-page">
      <div className="list-overlay"></div>

      <div className="list-container">
        <button className="back-btn" onClick={() => navigate('/equipments')}>
          <span className="text">Retornar Categorias</span>
          <div className="btn-line"></div>
        </button>

        {/* SEÇÃO INFORMATIVA (BLOG) */}
        <section className="legion-blog-section">
          
          {/* SEMPRE VISÍVEL: About Legion Arms */}
          <div className="blog-row full-width">
            <div className="blog-card about-card horizontal">
              <div className="card-content">
                <h2>{aboutLegionArms.title}</h2>
                <p className="mini-text">{aboutLegionArms.descripiton}</p>
              </div>
              <div className="card-image small">
                <img src={aboutLegionArms.image} alt={aboutLegionArms.title} />
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
              {showMore ? 'Ocultar Detalhes ▲' : 'Saiba Mais sobre Braços da Legião ▼'}
            </button>
          </div>

          {/* CONTEÚDO EXPANSÍVEL: Restante dos Cards */}
          <div className={`blog-expandable-content ${showMore ? 'visible' : ''}`}>
            <div className="blog-stack">
              
              {/* What are Legion Arms */}
              <div className="blog-row full-width">
                <div className="blog-card what-card horizontal">
                  <div className="card-image mini">
                    <img src={whatAreLegionArms.image} alt={whatAreLegionArms.title} />
                  </div>
                  <div className="card-content">
                    <h3>{whatAreLegionArms.title}</h3>
                    <p className="mini-text">{whatAreLegionArms.description}</p>
                  </div>
                </div>
              </div>

              {/* Different Types */}
              <div className="blog-row full-width">
                <div className="blog-card types-card horizontal">
                  <div className="card-content">
                    <h3>{arethereDifferentLegionArms.title}</h3>
                    <p className="mini-text">{arethereDifferentLegionArms.description}</p>
                    <p className="mini-text" style={{ marginTop: '10px' }}>{arethereDifferentLegionArms.description2}</p>
                  </div>
                  <div className="card-image small">
                    <img src={arethereDifferentLegionArms.image} alt={arethereDifferentLegionArms.title} />
                  </div>
                </div>
              </div>

              {/* Best Legion Arms */}
              <div className="blog-row full-width">
                <div className="blog-card best-card horizontal">
                  <div className="card-image small">
                    <img src={bestLegionArms.image} alt={bestLegionArms.title} />
                  </div>
                  <div className="card-content">
                    <h3>{bestLegionArms.title}</h3>
                    <p className="mini-text">{bestLegionArms.description}</p>
                    <ul className="blog-list mini">
                      <li>{bestLegionArms.description2}</li>
                      <li>{bestLegionArms.description3}</li>
                      <li>{bestLegionArms.description4}</li>
                      <li>{bestLegionArms.description5}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How to Switch/Modify/Upgrade */}
              <div className="blog-row full-width">
                <div className="blog-card upgrade-card horizontal">
                  <div className="card-content">
                    <h3>{howToSwitchModifyAndUpgradeLegionArms.title}</h3>
                    <p className="mini-text">{howToSwitchModifyAndUpgradeLegionArms.description}</p>
                  </div>
                  <div className="card-image mini">
                    <img src={howToSwitchModifyAndUpgradeLegionArms.image} alt={howToSwitchModifyAndUpgradeLegionArms.title} />
                  </div>
                </div>
              </div>

              {/* How to Gain */}
              <div className="blog-row full-width">
                <div className="blog-card gain-card horizontal">
                  <div className="card-image mini">
                    <img src={howToGainLegionArms.image} alt={howToGainLegionArms.title} />
                  </div>
                  <div className="card-content">
                    <h3>{howToGainLegionArms.title}</h3>
                    <p className="mini-text">{howToGainLegionArms.description}</p>
                    <p className="mini-text" style={{ marginTop: '10px' }}>{howToGainLegionArms.description2}</p>
                  </div>
                </div>
              </div>

              {/* New DLC Legion Arms */}
              <div className="blog-row full-width">
                <div className="blog-card dlc-legion-card horizontal">
                  <div className="card-image small">
                    <img src={newLegionArmsDLC.image} alt={newLegionArmsDLC.title} />
                  </div>
                  <div className="card-content">
                    <h3>{newLegionArmsDLC.title}</h3>
                    <p className="mini-text">{newLegionArmsDLC.description}</p>
                    <p className="mini-text" style={{ marginTop: '10px' }}>{newLegionArmsDLC.description2}</p>
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

        <header className="list-header">
          <h1 className="cinzel-title">{categoryInfo?.name}</h1>
          <div className="gold-divider"></div>

          <div className="search-section">
            <SearchBar 
              value={searchTerm} 
              onChange={setSearchTerm} 
              placeholder="Buscar por nome ou localização..."
              filterValue={filters}
              onFilterChange={setFilters}
              filterOptions={filterOptions}
            />
          </div>
        </header>

        <main className="items-grid-container">
          <div className="items-grid">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`item-card soulslike-card ${item.isDLC ? 'is-dlc-card' : ''}`}
                onClick={() => navigate(`/equipments/legioes/${item.id}`)}
              >
                <div className="badge-container">
                  {item.isDLC && <div className="dlc-badge">DLC</div>}
                </div>

                <div className="item-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <span>{item.typeAttack}</span>
                  <div className="view-more">Ver Detalhes</div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="no-results">Nenhum braço da legião encontrado com esses critérios.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default LegionList;
