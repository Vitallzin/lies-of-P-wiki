import { useParams, useNavigate } from 'react-router-dom';
import { charactersData } from '../../data/charactersData';
import './CharacterDetails.css';

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Busca garantindo comparação de strings
  const character = charactersData.find(c => String(c.id) === String(id));

  if (!character) return null;

  const themeClass = character.isDLC ? 'theme-dlc' : 'theme-normal';

  return (
    <div className={`char-details-page ${themeClass}`}>
      <div className="char-details-container">
        
        {/* LADO ESQUERDO: VISUAL */}
        <div className="char-visual-section">
          <div className="char-frame">
            <img src={character.image} alt={character.name} className="char-large-img" />
            <div className="char-blood-glow"></div>
          </div>
          <button className="back-btn-minimal" onClick={() => navigate(-1)}>
            ← Retornar ao Hotel Krat
          </button>
        </div>

        {/* LADO DIREITO: INFORMAÇÕES NARRATIVAS */}
        <div className="char-text-section">
          <header className="char-header-info">
            <span className="char-affiliation-tag">{character.location}</span>
            <h1 className="char-name-title">{character.name}</h1>
          </header>

          <div className="char-biography">
            <h2 className="section-small-title">Crônica do Personagem</h2>
            <p className="char-desc-text">{character.description}</p>
          </div>

          {/* GRID DE INFORMAÇÕES TÉCNICAS (Estilo Boss) */}
          <div className="char-info-grid">
            <div className="info-block">
              <h4 className="block-label">Onde Encontrar</h4>
              <p className="block-content-text">{character.whereFind}</p>
            </div>

            <div className="info-block">
              <h4 className="block-label">Objetivos (Quests)</h4>
              <ul className="quests-list">
                {character.quests.map((quest, i) => (
                  <li key={i}>{quest}</li>
                ))}
              </ul>
            </div>

            <div className="info-block full-width">
              <h4 className="block-label">Curiosidades e Rumores</h4>
              <div className="trivia-grid">
                {character.trivia.map((fact, i) => (
                  <div key={i} className="trivia-item">
                    <span className="bullet"></span>
                    <p>{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="char-status-footer">
            <div className="status-indicator">
              <span className="dot"></span>
              <p>Status: Ativo nos registros de Geppetto</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CharacterDetails;