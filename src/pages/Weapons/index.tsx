import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { weaponsCategories } from '../../data/waponsData';
import './Weapons.css';

const Weapons = () => {
  const navigate = useNavigate();
  // Estado para guardar qual imagem de fundo exibir
  const [activeBg, setActiveBg] = useState('');

  return (
    <div className="weapons-page">
      {/* Camada de Fundo Dinâmico */}
      <div 
        className={`dynamic-bg ${activeBg ? 'fade-in' : ''}`} 
        style={{ backgroundImage: `url(${activeBg})` }}
      ></div>
      
      <div className="weapons-overlay"></div>
      
      <header className="weapons-header">
        <h1 className="cinzel-title">Oficina de Eugénie</h1>
        <div className="title-separator">
          <div className="line"></div>
          <div className="diamond"></div>
          <div className="line"></div>
        </div>
      </header>

      <div className="weapons-category-grid">
        {weaponsCategories.map((cat) => (
          <div 
            key={cat.id} 
            className="weapon-category-card" 
            onClick={() => navigate(`/weapons/${cat.id}`)}
            onMouseEnter={() => setActiveBg(cat.bgImage)} // Muda o fundo
            onMouseLeave={() => setActiveBg('')}          // Volta ao padrão
          >
            <div className="card-image-wrapper">
              <img src={cat.image} alt={cat.name} />
              <div className="card-gradient"></div>
            </div>
            
            <div className="card-body">
              <h2 className="category-type-name">{cat.name}</h2>
              <p className="category-short-desc">{cat.description}</p>
              
              <div className="action-area">
                <div className="gold-glow-line"></div>
                <button className="view-category-btn">Explorar Arsenal</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weapons;