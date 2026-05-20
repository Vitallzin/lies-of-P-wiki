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
    /* Mudado para bater com o CSS: NPC-card e is-dlc-boss (para usar a mesma lógica do BossCard) */
    <div 
      className={`NPC-card soulslike-card ${isDLC ? 'is-dlc-boss is-dlc-card' : ''}`} 
      onClick={() => navigate(`/NPC/${id}`)}
    >
      <div className="NPC-image-wrapper">
        <img src={image} alt={name} className="NPC-card-img" />
        <div className="NPC-card-gradient"></div>
        {/* Badge de DLC no estilo do BossCard */}
        {isDLC && <div className="difficulty-badge">DLC</div>}
      </div>
      <div className="NPC-card-info">
        <h3 className="NPC-card-name">{name}</h3>
        <p className="NPC-card-location">
          <span className="icon-gold"></span> {location}
        </p>
        {/* Nome da classe corrigido para bater com o CSS */}
        <div className="NPC-glow-line"></div>
      </div>
    </div>
  );
};

export default CharacterCard;