import { useParams, useNavigate } from 'react-router-dom';
import { charactersData } from '../../data/charactersData';
import './characterDetails.css';

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const character = charactersData.find(c => c.id === id);

  if (!character) {
    return (
      <div className="error-page">
        <h1>Personagem perdido nas sombras de Krat.</h1>
        <button onClick={() => navigate('/characters')}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="char-details-page">
      <div className="char-details-container">
        
        {/* Lado Esquerdo: Imagem com Moldura Dourada */}
        <div className="char-visual-section">
          <div className="char-frame">
            <img src={character.image} alt={character.name} className="char-large-img" />
            <div className="char-blood-glow"></div>
          </div>
          <button className="back-btn-minimal" onClick={() => navigate(-1)}>
            ← Retornar ao Hotel Krat
          </button>
        </div>

        {/* Lado Direito: Biografia e Afiliação */}
        <div className="char-text-section">
          <header className="char-header-info">
            <span className="char-affiliation-tag">{character.affiliation}</span>
            <h1 className="char-name-title">{character.name}</h1>
            <p className="char-role-label">{character.role}</p>
          </header>

          <div className="char-biography">
            <h2 className="section-small-title">Crônica do Personagem</h2>
            <p className="char-desc-text">{character.description}</p>
          </div>

          <div className="char-status-footer">
            <div className="status-indicator">
              <span className="dot"></span>
              <p>Status: Ativo em Krat</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CharacterDetails;