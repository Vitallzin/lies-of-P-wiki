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
        <button className="back-btn-modern" onClick={() => navigate(-1)}>
          <span className="text">Retornar ao Arsenal</span>
          <div className="btn-line"></div>
        </button>
      </div>
    );
  }

  const themeClass = weapon.isDLC ? 'theme-dlc' : 'theme-normal';

  return (
    <div className={`weapon-details-page ${themeClass}`}>
      <div className="weapon-details-container">
        <button className="back-btn-modern" onClick={() => navigate(-1)}>
          <span className="text">Retornar ao Arsenal</span>
          <div className="btn-line"></div>
        </button>

        <div className="weapon-details-main-layout">
          <div className="weapon-details-header-section">
            <div className="header-text">
              <span className="category-tag">
                {weapon.isDLC ? 'Conteúdo de Expansão' : weapon.isSpecial ? 'Arma Especial (Chefe)' : 'Arma Comum'}
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

          <div className="weapon-details-footer-info">
            {/* LINHA 1: Atributos | Padrões */}
            <div className="weapon-info-block stats-block">
              <h4 className="weapon-block-label">Atributos de Combate</h4>
              <div className="weapon-stats-row">
                <div className="weapon-data-item"><span>Tipo:</span> <strong>{weapon.type}</strong></div>
                <div className="weapon-data-item"><span>Ataque Físico:</span> <strong>{weapon.physicalAttack}</strong></div>
                {weapon.elementalAttackType !== 'None' && (
                  <div className="weapon-data-item">
                    <span>Ataque {weapon.elementalAttackType}:</span> 
                    <strong>{weapon.elementalAttack}</strong>
                  </div>
                )}
                <div className="weapon-data-item"><span>Peso:</span> <strong>{weapon.weight}</strong></div>
                <div className="weapon-data-item"><span>Redução de Dano:</span> <strong>{weapon.damageReductionRate}%</strong></div>
                <div className="weapon-data-item"><span>Durabilidade:</span> <strong>{weapon.durability}</strong></div>
                {weapon.ergoCost && (
                  <div className="weapon-data-item"><span>Custo Ergo:</span> <strong>{weapon.ergoCost}</strong></div>
                )}
                
                <div className="weapon-data-item full-width">
                  <span>Slash:</span> 
                  <strong className="ascii-bar">{weapon.slash}</strong>
                </div>

                <div className="weapon-data-item full-width">
                  <span>Stab:</span> 
                  <strong className="ascii-bar">{weapon.stab}</strong>
                </div>
                
              </div>
            </div>

            <div className="weapon-info-block attack-patterns-block">
              <h4 className="weapon-block-label">Padrões de Ataque</h4>
              <div className="weapon-patterns-grid">
                <div className="weapon-pattern-item"><span>Normal 1</span> <strong>{weapon.typeAttack.attackNormal1}</strong></div>
                <div className="weapon-pattern-item"><span>Normal 2</span> <strong>{weapon.typeAttack.attackNormal2}</strong></div>
                {weapon.typeAttack.attackNormal3 && <div className="weapon-pattern-item"><span>Normal 3</span> <strong>{weapon.typeAttack.attackNormal3}</strong></div>}
                {weapon.typeAttack.attackNormal4 && <div className="weapon-pattern-item"><span>Normal 4</span> <strong>{weapon.typeAttack.attackNormal4}</strong></div>}
                <div className="weapon-pattern-item"><span>Especial 1</span> <strong>{weapon.typeAttack.attackSpecial1}</strong></div>
                {weapon.typeAttack.attackSpecial2 && <div className="weapon-pattern-item"><span>Especial 2</span> <strong>{weapon.typeAttack.attackSpecial2}</strong></div>}
                <div className="weapon-pattern-item"><span>Carregado 1</span> <strong>{weapon.typeAttack.attackCharged1}</strong></div>
                {weapon.typeAttack.attackCharged2 && <div className="weapon-pattern-item"><span>Carregado 2</span> <strong>{weapon.typeAttack.attackCharged2}</strong></div>}
                <div className="weapon-pattern-item"><span>Esquiva</span> <strong>{weapon.typeAttack.dodgingNormalAttack}</strong></div>
                <div className="weapon-pattern-item"><span>Corrida (Leve)</span> <strong>{weapon.typeAttack.SprintgNormalAttack}</strong></div>
                <div className="weapon-pattern-item"><span>Corrida (Forte)</span> <strong>{weapon.typeAttack.SprintingSpecialAttack}</strong></div>
              </div>
            </div>

            {/* LINHA 2: Escalonamento | Artes */}
            <div className="weapon-info-block scaling-block">
              <h4 className="weapon-block-label">Escalonamento</h4>
              <div className="weapon-scaling-row">
                <div className="weapon-scale-box">
                  <span className="label">Motricidade</span>
                  <span className={`value scale-${weapon.Motivity}`}>{weapon.Motivity}</span>
                </div>
                <div className="weapon-scale-box">
                  <span className="label">Técnica</span>
                  <span className={`value scale-${weapon.Technique}`}>{weapon.Technique}</span>
                </div>
                <div className="weapon-scale-box">
                  <span className="label">Avançado</span>
                  <span className={`value scale-${weapon.Advanced}`}>{weapon.Advanced}</span>
                </div>
              </div>
            </div>

            <div className="weapon-info-block fable-block">
              <h4 className="weapon-block-label">Artes da Fábula</h4>
              <div className="weapon-fable-grid">
                <div className="weapon-fable-column">
                  <span className="label">Lâmina</span>
                  <strong className="value stat-color">{weapon.fableArts.fableArt1}</strong>
                </div>
                <div className="weapon-fable-column">
                  <span className="label">Cabo</span>
                  <strong className="value stat-color">{weapon.fableArts.fableArt2}</strong>
                </div>
              </div>
            </div>

            {/* LINHA 3: Localização (Ocupa tudo) */}
            {weapon.Location && (
              <div className="weapon-info-block location-block">
                <h4 className="weapon-block-label">Localização</h4>
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