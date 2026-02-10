import { useNavigate } from 'react-router-dom';
import './WeaponsCar.css';

interface WeaponCardProps {
  id: string;
  name: string;
  type: string;
  image: string;
}

const WeaponCard = ({ id, name, type, image }: WeaponCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navega para a página de detalhes usando o ID da arma
    navigate(`/weapons/${id}`);
  };

  return (
    <div className="weapon-card" onClick={handleCardClick}>
      <div className="weapon-image-container">
        <img src={image} alt={name} className="weapon-image" />
        <div className="weapon-overlay">
          <span>Ver Detalhes</span>
        </div>
      </div>
      
      <div className="weapon-info">
        <p className="weapon-type">{type}</p>
        <h3 className="weapon-name">{name}</h3>
        <div className="weapon-card-decorator"></div>
      </div>
    </div>
  );
};

export default WeaponCard;