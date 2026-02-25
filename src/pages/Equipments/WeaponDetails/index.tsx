import { useParams, useNavigate } from 'react-router-dom';
import { weaponsData } from '../../../data/waponsData';
import './WeaponDetails.css';

const WeaponDetails = () => {
  const { id } = useParams<{ category: string, id: string }>();
  const navigate = useNavigate();
  const weapon = weaponsData.find(w => String(w.id) === String(id));

  if (!weapon) {
    return (
      <div className="details-page">
        <h1 style={{color: 'white', marginTop: '150px'}}>
          Equipamento {id} não encontrado!
        </h1>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }

  // Define se usa o tema de DLC (azul) ou padrão (dourado)
  const themeClass = weapon.isDLC ? 'theme-dlc' : 'theme-normal';

  return (
    <div className={`details-page ${themeClass}`}>
      <div className="details-container">
        <button className="back-btn-modern" onClick={() => navigate(-1)}>
          <span className="text">Voltar</span>
          <div className="btn-line"></div>
        </button>

        <div className="details-main-layout">
          <div className="details-header-section">
            <div className="header-text">
              <span className="category-tag">
                {weapon.isDLC ? 'Conteúdo de Expansão' : weapon.category}
              </span>
              <h1 className="weapon-name-title">{weapon.name}</h1>
              <div className="description-box">
                <h3>Descrição</h3>
                <p>{weapon.description}</p>
              </div>
            </div>

            <div className="header-visual">
              <div className="image-frame">
                <img src={weapon.image} alt={weapon.name} />
                <div className="frame-glow"></div>
              </div>
            </div>
          </div>

          <div className="details-footer-info">
            <div className="info-block stats-block">
              <h4 className="block-label">Atributos de Combate</h4>
              <div className="stats-row">
                <div className="data-item"><span>Tipo:</span> <strong>{weapon.type}</strong></div>
                <div className="data-item"><span>Dano:</span> <strong>{weapon.attack}</strong></div>
                <div className="data-item"><span>Peso:</span> <strong>{weapon.weight}</strong></div>
                <div className="data-item"><span>Durabilidade:</span> <strong>{weapon.durability}</strong></div>
                
                {/* NOVOS CAMPOS SLASH E STAB */}
                <div className="data-item full-width">
                  <span>Slash:</span> 
                  <strong className="ascii-bar">{weapon.slash}</strong>
                </div>

                <div className="data-item full-width">
                  <span>Stab:</span> 
                  <strong className="ascii-bar">{weapon.stab}</strong>
                </div>
              </div>
            </div>

            <div className="info-block scaling-block">
              <h4 className="block-label">Escalonamento</h4>
              <div className="scaling-row">
                <div className="scale-box">
                  <span className="label">Motricidade</span>
                  <span className={`value ${weapon.Motivity !== '-' ? 'stat-color' : ''}`}>{weapon.Motivity}</span>
                </div>
                <div className="scale-box">
                  <span className="label">Técnica</span>
                  <span className={`value ${weapon.Technique !== '-' ? 'stat-color' : ''}`}>{weapon.Technique}</span>
                </div>
                <div className="scale-box">
                  <span className="label">Avançado</span>
                  <span className={`value ${weapon.Advanced !== '-' ? 'stat-color' : ''}`}>{weapon.Advanced}</span>
                </div>
              </div>
            </div>

            {weapon.Location && (
              <div className="info-block location-block">
                <h4 className="block-label">Localização</h4>
                <p>{weapon.Location}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponDetails;