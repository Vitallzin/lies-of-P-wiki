import { useNavigate } from 'react-router-dom';
import './BossCard.css';

interface BossCardProps {
  id: string;
  name: string;
  location: string;
  difficulty: string;
  image: string;
}

const BossCard = ({ id, name, location, difficulty, image }: BossCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="boss-card" onClick={() => navigate(`/bosses/${id}`)}>
      <div className="boss-image-wrapper">
        <img src={image} alt={name} className="boss-card-img" />
        <div className={`difficulty-badge ${difficulty.toLowerCase()}`}>
          {difficulty}
        </div>
      </div>
      <div className="boss-card-info">
        <h3 className="boss-card-name">{name}</h3>
        <p className="boss-card-location">
          <span>📍</span> {location}
        </p>
      </div>
    </div>
  );
};

export default BossCard;