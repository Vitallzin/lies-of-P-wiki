import { useParams, useNavigate } from 'react-router-dom';
import { classesData } from '../../data/classesData';
import './ClassesDetails.css';

const ClassDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const gameClass = classesData.find(c => c.id === id);

  if (!gameClass) return <div className="error">Classe não encontrada</div>;

  return (
    <div className="class-details-page">
      <div className="class-details-wrapper">
        <header className="class-details-header">
          <button onClick={() => navigate('/classes')} className="back-btn">← Escolher Outro Caminho</button>
          <h1>{gameClass.name}</h1>
        </header>

        <div className="class-main-content">
          {/* Lado A: Visual e Atributos */}
          <aside className="class-sidebar">
            <div className="class-portrait-frame">
              <img src={gameClass.image} alt={gameClass.name} />
              <div className="red-glow-effect"></div>
            </div>
            
            <div className="stats-box-detailed">
              <h3>Atributos Base</h3>
              {Object.entries(gameClass.stats).map(([label, value]) => (
                <div key={label} className="stat-line">
                  <span>{label}</span>
                  <div className="stat-value-container">
                    <div className="stat-bar" style={{ width: `${(value / 15) * 100}%` }}></div>
                    <span className="number">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Lado B: Dicas de Build e Armas */}
          <main className="class-guide-section">
            <section className="guide-block">
              <h3>Dicas de Sobrevivência (Build)</h3>
              <ul className="tips-list">
                {gameClass.buildTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </section>

            <section className="guide-block">
              <h3>Melhores Armas Recomendadas</h3>
              <div className="recommended-weapons-grid">
                {gameClass.bestWeapons.map((weapon, i) => (
                  <div key={i} className="recommended-weapon-item">
                    <span className="weapon-icon">⚔️</span>
                    <p>{weapon}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="pro-tip-box">
              <p><strong>Nota do Mentor:</strong> Esta classe foca em {gameClass.id === '3' ? 'Força Bruta' : gameClass.id === '2' ? 'Precisão' : 'Versatilidade'}. Ajuste seu estilo de jogo conforme a necessidade.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;