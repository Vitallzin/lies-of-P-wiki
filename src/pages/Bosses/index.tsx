import { useState } from 'react';
import { 
  bossesData, 
  aboutBossses, // Nota: mantido com o erro de digitação do seu arquivo de dados
  rewardsBosses, 
  kindsBosses, 
  showCaseBosses, 
  dying, 
  spectres 
} from '../../data/bossesData';
import BossCard from '../../components/BossCard';
import SearchBar from '../../components/SearchBar';
import './Bosses.css';

const Bosses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showMore, setShowMore] = useState(false);

  const filterOptions = [
    { value: 'all', label: 'Todos os Chefes' },
    { value: 'Principal', label: 'Principais' },
    { value: 'Mini-Boss', label: 'Mini-Chefes' },
    { value: 'Optional', label: 'Opcionais' },
    { value: 'DLC', label: 'DLC' },
  ];

  const filteredBosses = bossesData.filter(boss => {
    const matchesSearch = boss.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          boss.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || 
                         (filter === 'DLC' ? boss.isDLC : 
                          filter === 'Optional' ? boss.isOptional : 
                          filter === 'Mini-Boss' ? boss.BossCategory !== 'Principal' && boss.BossCategory !== 'Chefe Opcional' :
                          boss.BossCategory === filter);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bosses-page animate-fadeIn">
      {/* SEÇÃO INFORMATIVA (BLOG) */}
      <section className="bosses-blog-section">
        
        {/* SEMPRE VISÍVEL: About Bosses */}
        <div className="blog-row full-width">
          <div className="blog-card about-card horizontal">
            <div className="card-content">
              <h2>{aboutBossses.title}</h2>
              <p className="mini-text">{aboutBossses.descripiton}</p>
            </div>
            <div className="card-image small">
              <img src={aboutBossses.image} alt={aboutBossses.title} />
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
            {showMore ? 'Ocultar Detalhes ▲' : 'Saiba Mais sobre Combates ▼'}
          </button>
        </div>

        {/* CONTEÚDO EXPANSÍVEL: Restante dos Cards Empilhados */}
        <div className={`blog-expandable-content ${showMore ? 'visible' : ''}`}>
          <div className="blog-stack">
            
            {/* Rewards */}
            <div className="blog-row full-width">
              <div className="blog-card rewards-card horizontal">
                <div className="card-content">
                  <h3>{rewardsBosses.title}</h3>
                  <p className="mini-text">{rewardsBosses.description}</p>
                  <p className="mini-text" style={{ marginTop: '10px' }}>{rewardsBosses.description2}</p>
                  <div className="rewards-gallery mini">
                    <img src={rewardsBosses.image} alt="Ergo 1" title="Ergo Raro 1" />
                    <img src={rewardsBosses.image2} alt="Ergo 2" title="Ergo Raro 2" />
                    <img src={rewardsBosses.image3} alt="Ergo 3" title="Ergo Raro 3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Kinds */}
            <div className="blog-row full-width">
              <div className="blog-card kinds-card horizontal">
                <div className="card-image mini">
                  <img src={kindsBosses.image} alt={kindsBosses.title} />
                </div>
                <div className="card-content">
                  <h3>{kindsBosses.title}</h3>
                  <p className="mini-text">{kindsBosses.description}</p>
                </div>
              </div>
            </div>

            {/* Showcase */}
            <div className="blog-row full-width">
              <div className="blog-card showcase-card horizontal">
                <div className="card-content">
                  <h3>{showCaseBosses.title}</h3>
                  <p className="mini-text">{showCaseBosses.description}</p>
                  <p className="mini-text" style={{ marginTop: '10px', fontStyle: 'italic' }}>{showCaseBosses.description2}</p>
                  <ul className="blog-list mini">
                    <li>{showCaseBosses.description3}</li>
                    <li>{showCaseBosses.description4}</li>
                    <li>{showCaseBosses.description5}</li>
                    <li>{showCaseBosses.description6}</li>
                  </ul>
                </div>
                <div className="card-image-stack">
                  <div className="card-image small">
                    <img src={showCaseBosses.image} alt={showCaseBosses.title} />
                  </div>
                  <div className="card-image small">
                    <img src={showCaseBosses.image2} alt={showCaseBosses.title} />
                  </div>
                </div>
              </div>
            </div>

            {/* Dying */}
            <div className="blog-row full-width">
              <div className="blog-card dying-card horizontal">
                <div className="card-image mini">
                  <img src={dying.image} alt={dying.title} />
                </div>
                <div className="card-content">
                  <h3>{dying.title}</h3>
                  <p className="mini-text">{dying.description}</p>
                  <p className="mini-text" style={{ marginTop: '10px' }}>{dying.description2}</p>
                </div>
              </div>
            </div>

            {/* Spectres */}
            <div className="blog-row full-width">
              <div className="blog-card spectres-card horizontal">
                <div className="card-content">
                  <h3>{spectres.title}</h3>
                  <p className="mini-text">{spectres.description}</p>
                </div>
                <div className="card-image mini">
                  <img src={spectres.image} alt={spectres.title} />
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

      {/* CABEÇALHO DA LISTAGEM E BUSCA */}
      <header className="bosses-header">
        <h1 className="section-title">Todos os Chefes</h1>
        <p className="section-subtitle">As marionetes colossais e os horrores que guardam Krat</p>
        
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

      {/* GRADE DE BOSSES */}
      <main className="bosses-grid-container">
        <div className="bosses-grid">
          {filteredBosses.map((boss) => (
            <BossCard
              key={boss.id}
              id={boss.id}
              name={boss.name}
              location={boss.location}
              image={boss.image}
              isDLC={boss.isDLC}
              category={boss.BossCategory}
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