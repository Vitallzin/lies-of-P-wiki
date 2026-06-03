import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bossesData } from '../../data/bossesData';
import './BossDetails.css';

type GameMode = 'normal' | 'NGplus' | 'NGplus2';

const BossDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [gameMode, setGameMode] = useState<GameMode>('normal');
  const [phase, setPhase] = useState<'fase1' | 'fase2'>('fase1');

  const boss = bossesData.find(b => String(b.id) === String(id));

  if (!boss) return null;

  const themeClass = boss.isDLC ? 'theme-dlc' : 'theme-normal';

  const getAbsorption = (key: 'slash' | 'strike' | 'pierce' | 'fire' | 'electric' | 'acid') => {
    if (phase === 'fase2' && boss.isSecondPhace) {
      const phase2Key = `SecondPhace${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof typeof boss.absorptions;
      if (boss.absorptions[phase2Key] !== undefined) {
        return boss.absorptions[phase2Key];
      }
    }
    return boss.absorptions[key];
  };

  const getResistance = (key: 'overheat' | 'shock' | 'decay') => {
    if (phase === 'fase2' && boss.isSecondPhace) {
      const phase2Key = `SecondPhace${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof typeof boss.resistances;
      if (boss.resistances[phase2Key] !== undefined) {
        return boss.resistances[phase2Key];
      }
    }
    return boss.resistances[key];
  };

  return (
    <div className={`details-page ${themeClass}`}>
      <div className="details-container">
        {/* BOTÃO VOLTAR PADRONIZADO */}
        <button className="back-btn-modern" onClick={() => navigate(-1)}>
          <span className="text">Voltar aos Chefes</span>
          <div className="btn-line"></div>
        </button>

        <div className="details-main-layout">
          {/* TOPO: LORE (ESQUERDA) | IMAGEM (DIREITA) */}
          <div className="details-header-section">
            <div className="header-text">
              <span className="category-tag">
                {boss.isDLC ? `${boss.BossCategory} DLC` : boss.BossCategory}
              </span>
              <h1 className="weapon-name-title">{boss.name}</h1>
              <div className="description-box">
                <h3>Registro de Batalha</h3>
                <p>{boss.biography}</p>
                <div className="location-info-outside">
                  <span>Local:</span> <strong>{boss.location}</strong>
                </div>
              </div>
            </div>

            <div className="header-visual">
              <div className="image-frame">
                <img src={boss.image} alt={boss.name} />
                <div className="frame-glow"></div>
              </div>
            </div>
          </div>

          {/* BAIXO: INFORMAÇÕES TÉCNICAS */}
          <div className="details-footer-info">
            {/* Bloco 1: Status Base */}
            <div className={`info-block stats-block mode-context-${gameMode}`}>
              <div className="block-header-with-selector">
                <h4 className="block-label">Análise de Combate</h4>
                <div className="mini-mode-selector">
                  <button 
                    className={`mini-mode-btn normal ${gameMode === 'normal' ? 'active' : ''}`}
                    onClick={() => setGameMode('normal')}
                    title="Normal"
                  >
                    NG
                  </button>
                  <button 
                    className={`mini-mode-btn ng-plus ${gameMode === 'NGplus' ? 'active' : ''}`}
                    onClick={() => setGameMode('NGplus')}
                    title="NG+"
                  >
                    NG+
                  </button>
                  <button 
                    className={`mini-mode-btn ng-plus-2 ${gameMode === 'NGplus2' ? 'active' : ''}`}
                    onClick={() => setGameMode('NGplus2')}
                    title="NG++"
                  >
                    NG++
                  </button>
                </div>
              </div>
              
              <div className="stats-row">
                
                <div className="data-item"><span>Tipo:</span> <strong>{boss.type || 'Marionete'}</strong></div>

                <div className="data-item"><span>Vida:</span><strong> {boss.health[gameMode].toLocaleString('pt-BR')} HP</strong></div>

                <div className="data-item"><span>Convocação de espectro:</span> <strong>{boss.isSpecterSommer ? 'Sim' : 'Não'}</strong></div>
                {boss.ergoDrops && (
                  <div className="data-item">
                    <span>Recompensa de Ergo:</span> 
                    <strong>
                      {boss.ergoDrops[gameMode].toLocaleString('pt-BR')}
                    </strong>
                  </div>
                )}

                <div className="data-item"><span>Dano Fase 1:</span> <strong>{boss.damage.fase1}</strong></div>
                {boss.damage.fase3 && <div className="data-item"><span>Dano Fase 3:</span> <strong>{boss.damage.fase3}</strong></div>}

                <div className="data-item"><span>Quebra Arma:</span> <strong>{boss.isbreakableWeapons ? 'Sim' : 'Não'}</strong></div>
                {boss.damage.fase2 && <div className="data-item"><span>Dano Fase 2:</span> <strong>{boss.damage.fase2}</strong></div>}

                {boss.isbreakableWeapons && boss.ifBreakableWeapons && (
                  <div className="data-item">
                    <span>Durabilidade da Arma:</span> 
                    <strong>
                      {boss.ifBreakableWeapons[gameMode]?.toLocaleString('pt-BR')}
                    </strong>
                  </div>
                )}
                {boss.weakAganist && <div className="data-item"><span>Fraco contra:</span> <strong>{boss.weakAganist.join(', ')}</strong></div>}
                {boss.inflictsStatus && <div className="data-item"><span>Inflige Status:</span> <strong>{boss.inflictsStatus.join(', ')}</strong></div>}
                {boss.StrongAganist && <div className="data-item"><span>Forte contra:</span> <strong>{boss.StrongAganist.join(', ')}</strong></div>}

                {boss.poise && (
                  <div className="data-item">
                    <span>Valor de Poise:</span> 
                    <strong>
                      {boss.poise[gameMode].toLocaleString('pt-BR')}
                    </strong>
                  </div>
                )}

              </div>
            </div>

            {/* Bloco 2: Absorções (Onde a imagem da tabela entra) */}
            <div className={`info-block analysis-grid-block phase-context-${phase}`}>
              <div className="block-header-with-selector">
                <h4 className="block-label">Taxas de Absorção de Dano (%)</h4>
                {boss.isSecondPhace && (
                  <div className="mini-mode-selector">
                    <button 
                      className={`mini-mode-btn phase-1 ${phase === 'fase1' ? 'active' : ''}`}
                      onClick={() => setPhase('fase1')}
                    >
                      Fase 1
                    </button>
                    <button 
                      className={`mini-mode-btn phase-2 ${phase === 'fase2' ? 'active' : ''}`}
                      onClick={() => setPhase('fase2')}
                    >
                      Fase 2
                    </button>
                  </div>
                )}
              </div>
              <div className="sensor-grid">
                <div className="sensor-item"><span>Corte</span><strong className={Number(getAbsorption('slash')) < 0 ? 'weak' : ''}>{getAbsorption('slash')}%</strong></div>
                <div className="sensor-item"><span>Impacto</span><strong className={Number(getAbsorption('strike')) < 0 ? 'weak' : ''}>{getAbsorption('strike')}%</strong></div>
                <div className="sensor-item"><span>Perfuração</span><strong className={Number(getAbsorption('pierce')) < 0 ? 'weak' : ''}>{getAbsorption('pierce')}%</strong></div>
                <div className="sensor-item-divider"></div>
                <div className="sensor-item elemental"><span>Fogo</span><strong className={Number(getAbsorption('fire')) < 0 ? 'weak' : ''}>{getAbsorption('fire')}%</strong></div>
                <div className="sensor-item elemental"><span>Elétrico</span><strong className={Number(getAbsorption('electric')) < 0 ? 'weak' : ''}>{getAbsorption('electric')}%</strong></div>
                <div className="sensor-item elemental"><span>Ácido</span><strong className={Number(getAbsorption('acid')) < 0 ? 'weak' : ''}>{getAbsorption('acid')}%</strong></div>
              </div>
            </div>

            {/* Bloco 3: Resistências a Status */}
            <div className={`info-block analysis-grid-block phase-context-${phase}`}>
              <div className="block-header-with-selector">
                <h4 className="block-label">Resistência a Alterações de Estado</h4>
                {boss.isSecondPhace && (
                  <div className="mini-mode-selector">
                    <button 
                      className={`mini-mode-btn phase-1 ${phase === 'fase1' ? 'active' : ''}`}
                      onClick={() => setPhase('fase1')}
                    >
                      Fase 1
                    </button>
                    <button 
                      className={`mini-mode-btn phase-2 ${phase === 'fase2' ? 'active' : ''}`}
                      onClick={() => setPhase('fase2')}
                    >
                      Fase 2
                    </button>
                  </div>
                )}
              </div>
              <div className="sensor-grid triplet">
                <div className="sensor-item"><span>Sobrecarga</span><strong>{getResistance('overheat')}</strong></div>
                <div className="sensor-item"><span>Choque</span><strong>{getResistance('shock')}</strong></div>
                <div className="sensor-item"><span>Decadência</span><strong>{getResistance('decay')}</strong></div>
              </div>
            </div>

            {/* Bloco 4: Drops (Ocupa a largura total) */}
            <div className="info-block drops-block">
              <h4 className="block-label">Recompensas de Ergo (Drops)</h4>
              <div className="drops-container-flex">
                {boss.drops.map((drop, index) => (
                  <div key={index} className="drop-tag"> {drop}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BossDetails;