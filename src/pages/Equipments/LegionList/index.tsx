import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { legionData } from '../../../data/legionData';
import { weaponsCategories } from '../../../data/waponsData';
import SearchBar from '../../../components/SearchBar';
import './LegionList.css';

const LegionList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const filterOptions = [
    { value: 'all', label: 'Todos os Braços' },
    { value: 'base', label: 'Jogo Base' },
    { value: 'dlc', label: 'DLC' },
  ];

  // Encontra as informações da categoria 'legioes' para o cabeçalho
  const categoryInfo = weaponsCategories.find(c => c.id === 'legioes');

  const filteredItems = legionData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.Location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === 'all' || 
                         (filter === 'dlc' ? item.isDLC : !item.isDLC);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="legion-list-page">
      <div className="list-overlay"></div>

      <div className="list-container">
        <button className="back-btn" onClick={() => navigate('/equipments')}>
          <span className="text">Retornar Categorias</span>
          <div className="btn-line"></div>
        </button>

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
