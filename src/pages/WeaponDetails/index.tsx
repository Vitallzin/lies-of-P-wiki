import { useParams, useNavigate } from 'react-router-dom';
import { weaponsData } from '../../data/waponsData'; // Importando os dados
import './weaponDetails.css';

const WeaponDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Procuramos a arma específica pelo ID que veio na URL
  const weapon = weaponsData.find(w => w.id === id);

  // Caso o ID não exista (o usuário digitou um ID errado na URL)
  if (!weapon) {
    return (
      <div className="details-page">
        <div className="details-container">
          <h1 style={{color: 'white'}}>Arma não encontrada no arsenal.</h1>
          <button className="back-btn" onClick={() => navigate('/weapons')}>
            Voltar para Armas
          </button>
        </div>
      </div>
    );
  }

  // Se a arma existir, renderizamos os detalhes dela
  return (
    <div className="details-page">
      <div className="details-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Voltar ao Arsenal
        </button>

        <div className="details-content">
          <div className="details-visual">
            <div className="ergo-glow"></div>
            <img src={weapon.image} alt={weapon.name} className="details-image" />
          </div>

          <div className="details-info">
            <span className="details-type">{weapon.type}</span>
            <h1 className="details-title">{weapon.name}</h1>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Ataque Físico</span>
                <span className="stat-value">{weapon.attack}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Peso</span>
                <span className="stat-value">{weapon.weight}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Durabilidade</span>
                <span className="stat-value">{weapon.durability}</span>
              </div>
            </div>

            <div className="details-description">
              <h3>Descrição do Item</h3>
              <p>{weapon.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponDetails;