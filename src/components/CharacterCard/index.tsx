import { useNavigate } from 'react-router-dom';
import './CharacterCard.css';

interface CharacterCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  isDLC?: boolean;
}

const CharacterCard = ({ id, name, location, image, isDLC }: CharacterCardProps) => {
  const navigate = useNavigate();

  return (
    /* Mudado para bater com o CSS: characters-card e is-dlc-boss (para usar a mesma lógica do BossCard) */
    <div 
      className={`characters-card ${isDLC ? 'is-dlc-boss' : ''}`} 
      onClick={() => navigate(`/characters/${id}`)}
    >
      <div className="characters-image-wrapper">
        <img src={image} alt={name} className="characters-card-img" />
        <div className="characters-card-gradient"></div>
        {/* Badge de DLC no estilo do BossCard */}
        {isDLC && <div className="difficulty-badge">DLC</div>}
      </div>
      <div className="characters-card-info">
        <h3 className="characters-card-name">{name}</h3>
        <p className="characters-card-location">
          <span className="icon-gold"></span> {location}
        </p>
        {/* Nome da classe corrigido para bater com o CSS */}
        <div className="characters-glow-line"></div>
      </div>
    </div>
  );
};

export default CharacterCard;