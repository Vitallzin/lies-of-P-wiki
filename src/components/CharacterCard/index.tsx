import { useNavigate } from 'react-router-dom';
import './CharacterCard.css';

interface CharacterCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
}

const CharacterCard = ({ id, name, role, image }: CharacterCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="char-card" onClick={() => navigate(`/characters/${id}`)}>
      <div className="char-img-container">
        <img src={image} alt={name} className="char-img" />
        <div className="char-overlay">
          <div className="char-glow"></div>
        </div>
      </div>
      <div className="char-info">
        <span className="char-role">{role}</span>
        <h3 className="char-name">{name}</h3>
        <div className="char-line"></div>
      </div>
    </div>
  );
};

export default CharacterCard;