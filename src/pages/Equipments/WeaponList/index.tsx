import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  weaponsData, 
  weaponsCategories,
  aboutWeapons,
  weaponsGuide,
  howToUpgradeWeapons,
  howToEquipWeapons,
  howtoAssembleWeapons,
  advancedWeapons,
  newWeaponsDLC
} from '../../../data/waponsData';
import SearchBar from '../../../components/SearchBar'; 
import './WeaponList.css';

const WeaponList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showMore, setShowMore] = useState(false);
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const filterOptions = [
    { value: 'all', label: 'Todos os Itens' },
    { value: 'common', label: 'Comuns' },
    { value: 'special', label: 'Especiais' },
    { value: 'dlc', label: 'DLC' },
  ];

  const categoryInfo = weaponsCategories.find(c => c.id === category);

  const filteredItems = weaponsData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.Location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || 
                         (filter === 'special' ? item.isSpecial : 
                          filter === 'dlc' ? item.isDLC : 
                          (!item.isSpecial && !item.isDLC));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="weapon-list-page animate-fadeIn">
      <div className="list-overlay"></div>
      
      <div className="list-container">
        <button className="back-btn" onClick={() => navigate('/equipments')}>
          <span className="text">Retornar Categorias</span>
          <div className="btn-line"></div>
        </button>

        {/* SEÇÃO INFORMATIVA (BLOG) */}
        <section className="weapons-blog-section">
          
          {/* SEMPRE VISÍVEL: About Weapons */}
          <div className="blog-row full-width">
            <div className="blog-card about-card horizontal">
              <div className="card-content">
                <h2>{aboutWeapons.title}</h2>
                <p className="mini-text">{aboutWeapons.description}</p>
              </div>
              <div className="card-image small">
                <img src={aboutWeapons.image} alt={aboutWeapons.title} />
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
              {showMore ? 'Ocultar Detalhes ▲' : 'Saiba Mais sobre Armamentos ▼'}
            </button>
          </div>

          {/* CONTEÚDO EXPANSÍVEL: Restante dos Cards */}
          <div className={`blog-expandable-content ${showMore ? 'visible' : ''}`}>
            <div className="blog-stack">
              
              {/* Weapons Guide & Upgrading */}
              <div className="blog-row full-width">
                <div className="blog-card guide-card horizontal">
                  <div className="card-image mini">
                    <img src={weaponsGuide.image} alt={weaponsGuide.title} />
                  </div>
                  <div className="card-content">
                    <h3>{weaponsGuide.title}</h3>
                    <p className="mini-text">{weaponsGuide.description}</p>
                  </div>
                </div>
              </div>

              {/* How to Upgrade */}
              <div className="blog-row full-width">
                <div className="blog-card upgrade-card horizontal">
                  <div className="card-content">
                    <h3>{howToUpgradeWeapons.title}</h3>
                    <p className="mini-text">{howToUpgradeWeapons.description}</p>
                    <p className="mini-text" style={{ marginTop: '10px' }}>{howToUpgradeWeapons.description2}</p>
                  </div>
                  <div className="card-image mini">
                    <img src={howToUpgradeWeapons.image} alt={howToUpgradeWeapons.title} />
                  </div>
                </div>
              </div>

              {/* How to Equip & Assemble */}
              <div className="blog-row full-width">
                <div className="blog-card assemble-card horizontal">
                  <div className="card-content">
                    <h3>{howtoAssembleWeapons.title}</h3>
                    <p className="mini-text">{howtoAssembleWeapons.description}</p>
                    <p className="mini-text" style={{ marginTop: '10px' }}>{howtoAssembleWeapons.description2}</p>
                  </div>
                  <div className="card-image small">
                    <img src={howtoAssembleWeapons.image} alt={howtoAssembleWeapons.title} />
                  </div>
                </div>
              </div>

              {/* Equipping Weapons Gallery */}
              <div className="blog-row full-width">
                <div className="blog-card equip-card horizontal">
                  <div className="card-image-stack">
                    <div className="card-image small">
                      <img src={howToEquipWeapons.image} alt={howToEquipWeapons.title} />
                    </div>
                    <div className="card-image small">
                      <img src={howToEquipWeapons.image2} alt={howToEquipWeapons.title} />
                    </div>
                  </div>
                  <div className="card-content">
                    <h3>{howToEquipWeapons.title}</h3>
                    <p className="mini-text">{howToEquipWeapons.description}</p>
                    <p className="mini-text" style={{ marginTop: '10px' }}>{howToEquipWeapons.description2}</p>
                  </div>
                </div>
              </div>

              {/* Advanced Weapons */}
              <div className="blog-row full-width">
                <div className="blog-card advanced-card horizontal">
                  <div className="card-content">
                    <h3>{advancedWeapons.title}</h3>
                    <p className="mini-text">{advancedWeapons.description}</p>
                  </div>
                  <div className="card-image mini">
                    <img src={advancedWeapons.image} alt={advancedWeapons.title} />
                  </div>
                </div>
              </div>

              {/* DLC Weapons */}
              <div className="blog-row full-width">
                <div className="blog-card dlc-weapons-card horizontal">
                  <div className="card-image small">
                    <img src={newWeaponsDLC.image} alt={newWeaponsDLC.title} />
                  </div>
                  <div className="card-content">
                    <h3>{newWeaponsDLC.title}</h3>
                    <p className="mini-text">{newWeaponsDLC.description}</p>
                    <p className="mini-text" style={{ marginTop: '10px' }}>{newWeaponsDLC.description2}</p>
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
              filterValue={filter}
              onFilterChange={setFilter}
              filterOptions={filterOptions}
            />
          </div>
        </header>

        <main className="items-grid-container">
          <div className="items-grid">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`item-card soulslike-card ${item.isDLC ? 'is-dlc-card' : ''} ${item.isSpecial ? 'is-special-card' : ''}`}
                onClick={() => navigate(`/equipments/armas/${item.id}`)}
              >
                <div className="badge-container">
                  {item.isDLC && <div className="dlc-badge">DLC</div>}
                  {item.isSpecial && <div className="special-badge">Especial</div>}
                </div>

                <div className="item-image-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <span>{item.type}</span>
                  <div className="view-more">Ver Detalhes</div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="no-results">Nenhum equipamento encontrado com esses critérios.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default WeaponList;