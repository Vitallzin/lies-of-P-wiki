import { useNavigate } from 'react-router-dom';
import './BossCard.css';

interface BossCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  isDLC?: boolean;
  category?: string;
}

const BossCard = ({ id, name, location, image, isDLC, category }: BossCardProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className={`boss-card soulslike-card ${isDLC ? 'is-dlc-boss is-dlc-card' : ''}`} 
      onClick={() => navigate(`/bosses/${id}`)}
    >
      <div className="boss-image-wrapper">
        <img src={image} alt={name} className="boss-card-img" />
        <div className="boss-card-gradient"></div>
        
        {/* Container para as Tags/Badges */}
        <div className="badge-container">
          {isDLC && <div className="dlc-badge">DLC</div>}
          {category && (
            <div className={`difficulty-badge ${
              category === 'Principal' ? 'main-boss-badge' : 
              category === 'Chefe Opcional' ? 'optional-boss-badge' : 
              'mini-boss-badge'
            }`}>
              {category}
            </div>
          )}
        </div>
      </div>
      <div className="boss-card-info">
        <h3 className="boss-card-name">{name}</h3>
        <p className="boss-card-location">
          <span className="icon-gold"></span> {location}
        </p>
        {/* Linha de brilho que você usa nos outros cards */}
        <div className="boss-glow-line"></div>
      </div>
    </div>
  );
};

export default BossCard;