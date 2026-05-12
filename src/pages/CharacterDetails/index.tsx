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
    <div className={`details-page ${themeClass}`}>
      <div className="details-container">
        {/* BOTÃO VOLTAR PADRONIZADO */}
        <button className="back-btn-modern" onClick={() => navigate('/characters')}>
          <span className="text">Retornar a lista de Personagens</span>
          <div className="btn-line"></div>
        </button>

        <div className="details-main-layout">
          {/* TOPO: BIOGRAFIA (ESQUERDA) | IMAGEM (DIREITA) */}
          <div className="details-header-section">
            <div className="header-text">
              <span className="category-tag">
                {character.location}
              </span>
              <h1 className="weapon-name-title">{character.name}</h1>
              <div className="description-box">
                <h3>Crônica do Personagem</h3>
                <p>{character.description}</p>
              </div>
            </div>

            <div className="header-visual">
              <div className="image-frame">
                <img src={character.image} alt={character.name} />
                <div className="frame-glow"></div>
              </div>
            </div>
          </div>

          {/* BAIXO: INFORMAÇÕES NARRATIVAS E TÉCNICAS */}
          <div className="details-footer-info">
            {/* Bloco 1: Onde Encontrar */}
            <div className="info-block">
              <h4 className="block-label">Onde Encontrar</h4>
              <p className="block-content-text">{character.whereFind}</p>
            </div>

            {/* Bloco 2: Objetivos (Quests) */}
            <div className="info-block">
              <h4 className="block-label">Objetivos (Quests)</h4>
              <ul className="quests-list">
                {character.quests.map((quest, i) => (
                  <li key={i}>{quest}</li>
                ))}
              </ul>
            </div>

            {/* Bloco 3: Curiosidades (Ocupa a largura total) */}
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
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;