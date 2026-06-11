import { useParams, useNavigate } from 'react-router-dom';
import { classesData } from '../../data/classesData';
import { weaponsData } from '../../data/waponsData';
import './ClassesDetails.css';

const ClassDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const gameClass = classesData.find(c => c.id === id);

  if (!gameClass) {
    return (
      <div className="class-details-page">
        <div className="class-details-shell">
          <p className="class-details-error">Classe nao encontrada.</p>
        </div>
      </div>
    );
  }

  const initialWeapon = weaponsData.find(w => w.name === gameClass.startWeapon);
  const highestBaseStat = Math.max(...Object.values(gameClass.baseStats), 1);
  const highestAttribute = Math.max(...Object.values(gameClass.baseAttributes), 1);

  return (
    <div className="class-details-page">
      <div className="class-details-overlay"></div>

      <div className="class-details-shell">
        <button className="class-details-back" onClick={() => navigate('/classes')}>
          <span>Escolher Outro Caminho</span>
          <div className="class-details-back-line"></div>
        </button>

        <section className="class-details-hero">
          <div className="class-details-copy">
            <span className="class-details-kicker">Memoria de Combate</span>
            <h1 className="class-details-title">{gameClass.name}</h1>
            <p className="class-details-subtitle">{gameClass.descriptionCard}</p>

            <div className="class-details-description">
              <h2>Descricao da Memoria</h2>
              <p>{gameClass.descriptionDetail}</p>
            </div>
          </div>

          <aside className="class-details-visual-panel">
            <div className="class-details-portrait">
              <img src={gameClass.image} alt={gameClass.name} />
              <div className="class-details-portrait-glow"></div>
            </div>

            <div className="class-details-start-weapon">
              <span className="class-details-panel-label">Arma Inicial</span>
              {initialWeapon ? (
                <div className="class-details-weapon-card">
                  <div className="class-details-weapon-image">
                    <img src={initialWeapon.image} alt={initialWeapon.name} />
                  </div>
                  <div className="class-details-weapon-info">
                    <strong>{initialWeapon.name}</strong>
                    <span>{initialWeapon.type}</span>
                  </div>
                </div>
              ) : (
                <div className="class-details-weapon-card class-details-weapon-card-empty">
                  <div className="class-details-weapon-info">
                    <strong>{gameClass.startWeapon}</strong>
                    <span>Arma inicial</span>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </section>

        <section className="class-details-stats-area">
          <div className="class-details-stat-panel">
            <div className="class-details-panel-heading">
              <h2>Estatisticas Iniciais</h2>
              <span>Base</span>
            </div>
            <div className="class-details-stat-grid class-details-stat-grid-compact">
              {Object.entries(gameClass.baseStats).map(([label, value]) => (
                <div key={label} className="class-details-stat-row">
                  <div className="class-details-stat-label">
                    <span>{label.replace(/_/g, ' ')}</span>
                    <strong>{value}</strong>
                  </div>
                  <div className="class-details-stat-track">
                    <div
                      className="class-details-stat-fill"
                      style={{ width: `${Math.min((value / highestBaseStat) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="class-details-stat-panel">
            <div className="class-details-panel-heading">
              <h2>Atributos de Combate</h2>
              <span>Perfil</span>
            </div>
            <div className="class-details-stat-grid">
              {Object.entries(gameClass.baseAttributes).map(([label, value]) => (
                <div key={label} className="class-details-stat-row">
                  <div className="class-details-stat-label">
                    <span>{label.replace(/_/g, ' ')}</span>
                    <strong>{value}</strong>
                  </div>
                  <div className="class-details-stat-track">
                    <div
                      className="class-details-stat-fill"
                      style={{ width: `${Math.min((value / highestAttribute) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClassDetails;
