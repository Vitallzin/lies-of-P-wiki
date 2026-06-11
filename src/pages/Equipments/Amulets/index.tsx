import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  amuletsData,
  aboutAmulets,
  howToUnlockAmulets,
  arethereDifferentAmulets,
  whereDoIFindAlidoro,
} from '../../../data/amuletsData';
import { weaponsCategories } from '../../../data/waponsData';
import SearchBar from '../../../components/SearchBar';
import { usePageFilterState } from '../../../hooks/usePageFilterState';
import './Amulets.css';

const Amulets = () => {
  const { searchTerm, setSearchTerm, filters, setFilters } = usePageFilterState('amulets');
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const filterOptions = [
    { value: 'all', label: 'Todos os Amuletos' },
    { value: 'base', label: 'Jogo Base' },
    { value: 'dlc', label: 'DLC' },
    { value: 'light', label: 'Leves' },
    { value: 'medium', label: 'Medios' },
    { value: 'heavy', label: 'Pesados' },
  ];

  const categoryInfo = weaponsCategories.find(c => c.id === 'amuletos');

  const filteredItems = amuletsData
    .filter(item => {
      const normalizedSearch = searchTerm.toLowerCase();
      const weight = Number(item.weight);
      const matchesSearch = item.name.toLowerCase().includes(normalizedSearch) ||
                            item.location.toLowerCase().includes(normalizedSearch) ||
                            item.effect.toLowerCase().includes(normalizedSearch) ||
                            item.description.toLowerCase().includes(normalizedSearch);

      const matchesFilter = filters.includes('all') ||
                            filters.some(filter => {
                              if (filter === 'base') return !item.isDLC;
                              if (filter === 'dlc') return item.isDLC;
                              if (filter === 'light') return weight <= 4;
                              if (filter === 'medium') return weight > 4 && weight <= 8;
                              if (filter === 'heavy') return weight > 8;
                              return false;
                            });

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  return (
    <div className="amulets-page">
      <div className="list-overlay"></div>

      <div className="list-container">
        <button className="back-btn" onClick={() => navigate('/equipments')}>
          <span className="text">Retornar Categorias</span>
          <div className="btn-line"></div>
        </button>

        <section className="amulets-blog-section">
          <div className="blog-row full-width">
            <div className="blog-card about-card horizontal">
              <div className="card-content">
                <h2>{aboutAmulets.title}</h2>
                {aboutAmulets.description && (
                  <p className="mini-text">{aboutAmulets.description}</p>
                )}
              </div>
              <div className="card-image small">
                <img src={aboutAmulets.image} alt={aboutAmulets.title} />
              </div>
            </div>
          </div>

          <div className={`expand-controller ${showMore ? 'is-expanded' : ''}`}>
            {!showMore && <div className="fade-overlay"></div>}
            <button
              className="btn-saiba-mais-blog"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Ocultar Detalhes ▲' : 'Saiba Mais sobre Amuletos ▼'}
            </button>
          </div>

          <div className={`blog-expandable-content ${showMore ? 'visible' : ''}`}>
            <div className="blog-stack">
              <div className="blog-row full-width">
                <div className="blog-card unlock-card horizontal">
                  <div className="card-image mini">
                    <img src={howToUnlockAmulets.image} alt={howToUnlockAmulets.title} />
                  </div>
                  <div className="card-content">
                    <h3>{howToUnlockAmulets.title}</h3>
                    {howToUnlockAmulets.description && (
                      <p className="mini-text">{howToUnlockAmulets.description}</p>
                    )}
                    {howToUnlockAmulets.description2 && (
                      <p className="mini-text" style={{ marginTop: '10px' }}>
                        {howToUnlockAmulets.description2}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="blog-row full-width">
                <div className="blog-card types-card horizontal">
                  <div className="card-content">
                    <h3>{arethereDifferentAmulets.title}</h3>
                    {arethereDifferentAmulets.description && (
                      <p className="mini-text">{arethereDifferentAmulets.description}</p>
                    )}
                  </div>
                  <div className="card-image mini">
                    <img src={arethereDifferentAmulets.image} alt={arethereDifferentAmulets.title} />
                  </div>
                </div>
              </div>

              <div className="blog-row full-width">
                <div className="blog-card alidoro-card horizontal">
                  <div className="card-image-stack">
                    <div className="card-image small">
                      <img src={whereDoIFindAlidoro.image} alt={whereDoIFindAlidoro.title} />
                    </div>
                    <div className="card-image small">
                      <img src={whereDoIFindAlidoro.image2} alt={whereDoIFindAlidoro.title} />
                    </div>
                  </div>
                  <div className="card-content">
                    <h3>{whereDoIFindAlidoro.title}</h3>
                    {whereDoIFindAlidoro.description && (
                      <p className="mini-text">{whereDoIFindAlidoro.description}</p>
                    )}
                    {whereDoIFindAlidoro.description2 && (
                      <p className="mini-text" style={{ marginTop: '10px' }}>
                        {whereDoIFindAlidoro.description2}
                      </p>
                    )}
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
          <h1 className="cinzel-title">{categoryInfo?.name || 'Amuletos'}</h1>
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
                onClick={() => navigate(`/equipments/amuletos/${item.id}`)}
              >
                <div className="badge-container">
                  {item.isDLC && <div className="dlc-badge">DLC</div>}
                </div>

                <div className="item-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <span>{item.weight} kg</span>
                  <div className="view-more">Ver Detalhes</div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="no-results">Nenhum amuleto encontrado com esses critérios.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Amulets;
