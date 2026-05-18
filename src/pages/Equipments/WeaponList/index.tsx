import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { weaponsData, weaponsCategories } from '../../../data/waponsData';
import SearchBar from '../../../components/SearchBar'; // Importando o seu componente global
import './WeaponList.css';

const WeaponList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  // 1. Encontra as informações da categoria atual para o cabeçalho
  const categoryInfo = weaponsCategories.find(c => c.id === category);

  // 2. Filtra combinando a Categoria da URL + Busca por Nome ou Localização (L maiúsculo conforme o seu arquivo .ts)
  const filteredItems = weaponsData.filter(item => {
    const matchesCategory = item.category === category;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.Location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="weapon-list-page">
      <div className="list-overlay"></div>
      
      <div className="list-container">
        <button className="back-btn" onClick={() => navigate('/equipments')}>
          <span className="text">Retornar Categorias</span>
          <div className="btn-line"></div>
        </button>

        <header className="list-header">
          <h1 className="cinzel-title">{categoryInfo?.name}</h1>
          <div className="gold-divider"></div>
          
          {/* Sessão de Busca usando as mesmas classes e o componente SearchBar */}
          <div className="search-section">
            <SearchBar 
              value={searchTerm} 
              onChange={setSearchTerm} 
              placeholder="Buscar por nome ou localização..."
            />
          </div>
        </header>

        <main className="items-grid-container">
          <div className="items-grid">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`item-card soulslike-card ${item.isDLC ? 'is-dlc-card' : ''} ${item.isSpecial ? 'is-special-card' : ''}`}
                onClick={() => navigate(`/equipments/${item.category}/${item.id}`)}
              >
                {/* Container para as Tags/Badges */}
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

          {/* Mensagem de erro idêntica a dos Bosses quando a busca falha */}
          {filteredItems.length === 0 && (
            <p className="no-results">Nenhum equipamento encontrado com esses critérios.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default WeaponList;