import { useParams, useNavigate } from 'react-router-dom';
import { weaponsData, weaponsCategories } from '../../../data/waponsData';
import './WeaponList.css';



const WeaponList = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const categoryInfo = weaponsCategories.find(c => c.id === category);
  const filteredItems = weaponsData.filter(item => item.category === category);

  return (
    <div className="weapon-list-page">
      <div className="list-overlay"></div>
      
      <div className="list-container">
        <button className="back-btn" onClick={() => navigate('/equipments')}>
          ← Voltar Categorias
        </button>

        <header className="list-header">
          <h1 className="cinzel-title">{categoryInfo?.name}</h1>
          <div className="gold-divider"></div>
        </header>

        <div className="items-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`item-card ${item.isDLC ? 'is-dlc-card' : ''} ${item.isSpecial ? 'is-special-card' : ''}`}
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
      </div>
    </div>
  );
};

export default WeaponList;