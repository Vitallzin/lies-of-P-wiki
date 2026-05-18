import { useParams, useNavigate } from 'react-router-dom';
import { classesData } from '../../data/classesData';
import { weaponsData } from '../../data/waponsData';
import './ClassesDetails.css';

const ClassDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const gameClass = classesData.find(c => c.id === id);

  if (!gameClass) return <div className="error">Classe não encontrada</div>;

  const initialWeapon = weaponsData.find(w => w.name === gameClass.startWeapon);

  return (
    <div className="class-details-page">
      <div className="class-details-wrapper">
        <header className="class-details-header">
          <button onClick={() => navigate('/classes')} className="back-btn"> Escolher Outro Caminho</button>
          <div className="btn-line"></div>
          <h1>{gameClass.name}</h1>
          <p className="class-subtitle">{gameClass.descriptionCard}</p>
        </header>

        <div className="class-main-content">
          {/* Lado A: Visual e Arma Inicial */}
          <aside className="class-sidebar">
            <div className="class-portrait-frame">
              <img src={gameClass.image} alt={gameClass.name} />
              <div className="red-glow-effect"></div>
            </div>

            <div className="sidebar-weapon-section">
              <h3>Arma Inicial</h3>
              <div className="recommended-weapons-grid">
                {initialWeapon ? (
                  <div className="recommended-weapon-item start-weapon-card">
                    <div className="weapon-img-container">
                      <img src={initialWeapon.image} alt={initialWeapon.name} />
                    </div>
                    <div className="weapon-info">
                      <p className="weapon-name">{initialWeapon.name}</p>
                      <p className="weapon-type">{initialWeapon.type}</p>
                    </div>
                  </div>
                ) : (
                  <div className="recommended-weapon-item">
                    <span className="weapon-icon">⚔️</span>
                    <p>{gameClass.startWeapon}</p>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Lado B: Atributos e Descrição */}
          <main className="class-guide-section">
            <div className="stats-box-detailed">
              <div className="stats-section-header">
                <h3>Estatísticas Iniciais</h3>
                <div className="stats-grid-container stats-small">
                  {Object.entries(gameClass.baseStats).map(([label, value]) => (
                    <div key={label} className="stat-line">
                      <span>{label}</span>
                      <div className="stat-value-container">
                        <div className="stat-bar" style={{ width: `${(value / 20) * 100}%` }}></div>
                        <span className="number">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="stats-section-header" style={{ marginTop: '30px' }}>
                <h3>Atributos de Combate</h3>
                <div className="stats-grid-container">
                  {Object.entries(gameClass.baseAttributes).map(([label, value]) => (
                    <div key={label} className="stat-line">
                      <span>{label.replace(/_/g, ' ')}</span>
                      <div className="stat-value-container">
                        <div className="stat-bar" style={{ width: `${(value / (value > 100 ? 400 : 100)) * 100}%` }}></div>
                        <span className="number">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <section className="guide-block description-section">
              <h3>Descrição da Memória</h3>
              <p className="description-text">{gameClass.descriptionDetail}</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;