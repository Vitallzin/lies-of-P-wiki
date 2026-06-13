import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { weaponsData } from '../../../data/waponsData';
import './WeaponDetails.css';

type AttackPatternView = {
  attackNormal1?: string;
  attackNormal2?: string;
  attackNormal3?: string;
  attackNormal4?: string;
  attackNormal5?: string;
  attackSpecial1?: string;
  attackSpecial2?: string;
  successfulChargedParry?: string;
  successfulChargedParryCounter?: string;
  attackCharged1?: number | string;
  attackCharged2?: number | string;
  dodgingNormalAttack?: string;
  SprintgNormalAttack?: string;
  SprintingSpecialAttack?: string;
  swordForm?: AttackPatternView;
  glaiveForm?: AttackPatternView;
  standardForm?: AttackPatternView;
  stormNoticeActive?: AttackPatternView;
};

const getAttackPatternGroups = (typeAttack: AttackPatternView) => {
  const formGroups = [
    typeAttack.swordForm && { label: 'Forma Espada', attacks: typeAttack.swordForm },
    typeAttack.glaiveForm && { label: 'Forma Glaive', attacks: typeAttack.glaiveForm },
    typeAttack.standardForm && { label: 'Forma Padrao', attacks: typeAttack.standardForm },
    typeAttack.stormNoticeActive && { label: 'Storm Notice', attacks: typeAttack.stormNoticeActive },
  ].filter(Boolean) as { label: string; attacks: AttackPatternView }[];

  if (formGroups.length > 0) {
    return formGroups;
  }

  return [{ label: '', attacks: typeAttack }];
};

const WeaponDetails = () => {
  const { id } = useParams<{ category: string, id: string }>();
  const navigate = useNavigate();
  const [activeAttackPattern, setActiveAttackPattern] = useState({ weaponId: id, index: 0 });
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
  const hasUpgradeData = Boolean(weapon.upgrades?.length);
  const hasScalingData = Boolean(weapon.scalings?.length);
  const attackPatternGroups = getAttackPatternGroups(weapon.typeAttack);
  const hasUpgradeMaterials = Boolean(weapon.upgrades?.some(upgrade => upgrade.requiredMaterials));
  const activeAttackPatternIndex = activeAttackPattern.weaponId === id ? activeAttackPattern.index : 0;
  const selectedAttackPattern = attackPatternGroups[activeAttackPatternIndex] ?? attackPatternGroups[0];

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
                {weapon.isDLC ? 'ConteÃºdo de ExpansÃ£o' : weapon.isSpecial ? 'Arma Especial (Chefe)' : 'Arma Comum'}
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
            {/* LINHA 1: Atributos | PadrÃµes */}
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
                {weapon.criticalRate !== undefined && (
                  <div className="weapon-data-item"><span>Taxa crítica:</span> <strong>{weapon.criticalRate}%</strong></div>
                )}
                {weapon.fableCharge !== undefined && (
                  <div className="weapon-data-item"><span>Carga de Fabula:</span> <strong>{weapon.fableCharge}</strong></div>
                )}
                {weapon.ChargePulseCells !== undefined && (
                  <div className="weapon-data-item"><span>Carga de Células:</span> <strong>{weapon.ChargePulseCells}</strong></div>
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
              <div className="weapon-block-header-with-selector">
                <h4 className="weapon-block-label">Padrões de Ataque</h4>
                {attackPatternGroups.length > 1 && (
                  <div className="weapon-attack-mode-selector">
                    {attackPatternGroups.map((group, index) => (
                      <button
                        className={`weapon-attack-mode-btn ${activeAttackPatternIndex === index ? 'active' : ''}`}
                        key={group.label}
                        onClick={() => setActiveAttackPattern({ weaponId: id, index })}
                        type="button"
                      >
                        {group.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="weapon-pattern-group">
                {selectedAttackPattern.label && (
                  <h5 className="weapon-pattern-group-title">{selectedAttackPattern.label}</h5>
                )}
                <div className="weapon-patterns-grid">
                  {selectedAttackPattern.attacks.attackNormal1 && <div className="weapon-pattern-item"><span>Normal 1</span> <strong>{selectedAttackPattern.attacks.attackNormal1}</strong></div>}
                  {selectedAttackPattern.attacks.attackNormal2 && <div className="weapon-pattern-item"><span>Normal 2</span> <strong>{selectedAttackPattern.attacks.attackNormal2}</strong></div>}
                  {selectedAttackPattern.attacks.attackNormal3 && <div className="weapon-pattern-item"><span>Normal 3</span> <strong>{selectedAttackPattern.attacks.attackNormal3}</strong></div>}
                  {selectedAttackPattern.attacks.attackNormal4 && <div className="weapon-pattern-item"><span>Normal 4</span> <strong>{selectedAttackPattern.attacks.attackNormal4}</strong></div>}
                  {selectedAttackPattern.attacks.attackNormal5 && <div className="weapon-pattern-item"><span>Normal 5</span> <strong>{selectedAttackPattern.attacks.attackNormal5}</strong></div>}
                  {selectedAttackPattern.attacks.attackSpecial1 && <div className="weapon-pattern-item"><span>Especial 1</span> <strong>{selectedAttackPattern.attacks.attackSpecial1}</strong></div>}
                  {selectedAttackPattern.attacks.attackSpecial2 && <div className="weapon-pattern-item"><span>Especial 2</span> <strong>{selectedAttackPattern.attacks.attackSpecial2}</strong></div>}
                  {selectedAttackPattern.attacks.successfulChargedParry && <div className="weapon-pattern-item"><span>Parry Carregado</span> <strong>{selectedAttackPattern.attacks.successfulChargedParry}</strong></div>}
                  {selectedAttackPattern.attacks.successfulChargedParryCounter && <div className="weapon-pattern-item"><span>Contra Parry</span> <strong>{selectedAttackPattern.attacks.successfulChargedParryCounter}</strong></div>}
                  {selectedAttackPattern.attacks.attackCharged1 && <div className="weapon-pattern-item"><span>Carregado 1</span> <strong>{selectedAttackPattern.attacks.attackCharged1}</strong></div>}
                  {selectedAttackPattern.attacks.attackCharged2 && <div className="weapon-pattern-item"><span>Carregado 2</span> <strong>{selectedAttackPattern.attacks.attackCharged2}</strong></div>}
                  {selectedAttackPattern.attacks.dodgingNormalAttack && <div className="weapon-pattern-item"><span>Esquiva</span> <strong>{selectedAttackPattern.attacks.dodgingNormalAttack}</strong></div>}
                  {selectedAttackPattern.attacks.SprintgNormalAttack && <div className="weapon-pattern-item"><span>Corrida (Leve)</span> <strong>{selectedAttackPattern.attacks.SprintgNormalAttack}</strong></div>}
                  {selectedAttackPattern.attacks.SprintingSpecialAttack && <div className="weapon-pattern-item"><span>Corrida (Forte)</span> <strong>{selectedAttackPattern.attacks.SprintingSpecialAttack}</strong></div>}
                </div>
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
                  <span className={`value scale-${weapon.Advance}`}>{weapon.Advance}</span>
                </div>
              </div>
            </div>

            <div className="weapon-info-block fable-block">
              <h4 className="weapon-block-label">Artes da FÃ¡bula</h4>
              <div className="weapon-fable-grid">
                <div className="weapon-fable-column">
                  <span className="label">Lámina</span>
                  <strong className="value stat-color">{weapon.fableArts.fableArt1}</strong>
                </div>
                <div className="weapon-fable-column">
                  <span className="label">Cabo</span>
                  <strong className="value stat-color">{weapon.fableArts.fableArt2}</strong>
                </div>
              </div>
            </div>

            {hasUpgradeData && (
              <div className="weapon-info-block weapon-upgrades-block">
                <h4 className="weapon-block-label">Melhorias da Arma</h4>
                <div className="weapon-details-table-wrap">
                  <table className="weapon-details-table">
                    <thead>
                      <tr>
                        <th>Nivel</th>
                        <th>Ataque</th>
                        <th>Células</th>
                        <th>Fabula</th>
                        <th>Redução</th>
                        <th>Durabilidade</th>
                        {hasUpgradeMaterials && <th>Materiais</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {weapon.upgrades?.map(upgrade => (
                        <tr key={upgrade.level}>
                          <td className="weapon-table-highlight">{upgrade.level}</td>
                          <td>{upgrade.physicalAttack}</td>
                          <td>{upgrade.ChargePulseCells}</td>
                          <td>{upgrade.fableCharge}</td>
                          <td>{upgrade.damageReduction}%</td>
                          <td>{upgrade.durability}</td>
                          {hasUpgradeMaterials && (
                            <td>
                              {upgrade.requiredMaterials
                                ? `${upgrade.requiredMaterials.material} / ${upgrade.requiredMaterials.ergo} Ergo`
                                : '-'}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {hasScalingData && (
              <div className="weapon-info-block weapon-crank-scaling-block">
                <h4 className="weapon-block-label">Escalonamento por Crank</h4>
                <div className="weapon-details-table-wrap">
                  <table className="weapon-details-table weapon-scaling-table">
                    <thead>
                      <tr>
                        <th>Crank</th>
                        <th>Motricidade</th>
                        <th>Técnica</th>
                        <th>Avançado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weapon.scalings?.map(scaling => (
                        <tr key={scaling.crankType}>
                          <td className="weapon-table-highlight">{scaling.crankType}</td>
                          <td className={`scale-${scaling.Motivity}`}>{scaling.Motivity}</td>
                          <td className={`scale-${scaling.Technique}`}>{scaling.Technique}</td>
                          <td className={`scale-${scaling.Advance}`}>{scaling.Advance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* LINHA 3: LocalizaÃ§Ã£o (Ocupa tudo) */}
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



