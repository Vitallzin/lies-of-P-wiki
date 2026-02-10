import { useParams, useNavigate } from 'react-router-dom';
import { bossesData } from '../../data/bossesData';
import './BossDetails.css';

const BossDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const boss = bossesData.find(b => b.id === id);

  if (!boss) {
    return (
      <div className="boss-error">
        <h1>Inimigo não encontrado nos registros.</h1>
        <button onClick={() => navigate('/bosses')}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="boss-details-page">
      <div className="boss-details-hero" style={{ backgroundImage: `linear-gradient(to bottom, transparent, #050507), url(${boss.image})` }}>
        <button className="back-link" onClick={() => navigate(-1)}>
          ← Retornar
        </button>
        <div className="boss-hero-content">
          <span className={`difficulty-tag ${boss.difficulty.toLowerCase()}`}>
            Dificuldade: {boss.difficulty}
          </span>
          <h1 className="boss-name-huge">{boss.name}</h1>
          <p className="boss-location-subtitle">📍 {boss.location}</p>
        </div>
      </div>

      <div className="boss-details-body">
        <section className="boss-lore">
          <h2>Registro de Batalha</h2>
          <p>{boss.description}</p>
        </section>

        <section className="boss-rewards">
          <h2>Recompensas de Ergo</h2>
          <ul className="drops-list">
            {boss.drops.map((drop, index) => (
              <li key={index} className="drop-item">
                <span className="drop-icon">✨</span>
                {drop}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BossDetails;