import { useParams, useNavigate } from 'react-router-dom';
import { bossesData } from '../../data/bossesData';
import './BossDetails.css';

const BossDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const boss = bossesData.find(b => String(b.id) === String(id));

  if (!boss) return null;

  const themeClass = boss.isDLC ? 'theme-dlc' : 'theme-normal';

  return (
    <div className={`details-page ${themeClass}`}>
      <div className="details-container">
        {/* BOTÃO VOLTAR PADRONIZADO */}
        <button className="back-btn-modern" onClick={() => navigate(-1)}>
          <span className="text">Voltar aos Registros</span>
          <div className="btn-line"></div>
        </button>

        <div className="details-main-layout">
          {/* TOPO: LORE (ESQUERDA) | IMAGEM (DIREITA) */}
          <div className="details-header-section">
            <div className="header-text">
              <span className="category-tag">
                {boss.isDLC ? 'Expansão: Shadow of Krat' : 'Chefe de Campo'}
              </span>
              <h1 className="weapon-name-title">{boss.name}</h1>
              <div className="description-box">
                <h3>Registro de Batalha</h3>
                <p>{boss.biography}</p>
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
            <div className="info-block stats-block">
              <h4 className="block-label">Análise de Combate</h4>
              <div className="stats-row">
                
                <div className="data-item"><span>Local:</span> <strong>{boss.location}</strong></div>

                <div className="data-item"><span>Tipo:</span> <strong>{boss.type || 'Marionete'}</strong></div>

                <div className="data-item"><span>Vida:</span> <strong>{boss.health.normal} HP</strong><br/>
                <strong>{boss.health.NGplus} HP (NG+)</strong><br/>
                <strong>{boss.health.NGplus2} HP (NG+2)</strong></div>

                {boss.ergoDrops && (<div className="data-item"><span>Recompensa de Ergo:</span> <strong>{boss.ergoDrops.normal} (Normal)<br/> 
                {boss.ergoDrops.NGplus} (NG+)<br/>
                {boss.ergoDrops.NGplus2} (NG+2)</strong></div>)}

                <div className="data-item"><span>Convocação de espectro:</span> <strong>{boss.isSpecterSommer ? 'Sim' : 'Não'}</strong></div>

                <div className="data-item"><span>Dano Fase 1:</span> <strong>{boss.damage.fase1}</strong></div>
                {boss.damage.fase2 && <div className="data-item"><span>Dano Fase 2:</span> <strong>{boss.damage.fase2}</strong></div>}
                {boss.damage.fase3 && <div className="data-item"><span>Dano Fase 3:</span> <strong>{boss.damage.fase3}</strong></div>}

                <div className="data-item"><span>Armas que Quebram Partes:</span> <strong>{boss.isbreakableWeapons ? 'Sim' : 'Não'}</strong></div>

                {boss.inflictsStatus && <div className="data-item"><span>Inflige Status:</span> <strong>{boss.inflictsStatus.join(', ')}</strong></div>}

                {boss.poise && <div className="data-item"><span>Valor de Poise:</span> <strong>{boss.poise.NGplus} (NG+), {boss.poise.NGplus2} (NG+2)</strong></div>}

              </div>
            </div>

            {/* Bloco 2: Absorções (Onde a imagem da tabela entra) */}
            <div className="info-block analysis-grid-block">
              <h4 className="block-label">Taxas de Absorção de Dano (%)</h4>
              <div className="sensor-grid">
                <div className="sensor-item"><span>Corte</span><strong className={boss.absorptions.slash < 0 ? 'weak' : ''}>{boss.absorptions.slash}%</strong></div>
                <div className="sensor-item"><span>Impacto</span><strong className={boss.absorptions.strike < 0 ? 'weak' : ''}>{boss.absorptions.strike}%</strong></div>
                <div className="sensor-item"><span>Perfuração</span><strong className={boss.absorptions.pierce < 0 ? 'weak' : ''}>{boss.absorptions.pierce}%</strong></div>
                <div className="sensor-item-divider"></div>
                <div className="sensor-item elemental"><span>Fogo</span><strong className={boss.absorptions.fire < 0 ? 'weak' : ''}>{boss.absorptions.fire}%</strong></div>
                <div className="sensor-item elemental"><span>Elétrico</span><strong className={boss.absorptions.electric < 0 ? 'weak' : ''}>{boss.absorptions.electric}%</strong></div>
                <div className="sensor-item elemental"><span>Ácido</span><strong className={boss.absorptions.acid < 0 ? 'weak' : ''}>{boss.absorptions.acid}%</strong></div>
              </div>
            </div>

            {/* Bloco 3: Resistências a Status */}
            <div className="info-block analysis-grid-block">
              <h4 className="block-label">Resistência a Alterações de Estado</h4>
              <div className="sensor-grid triplet">
                <div className="sensor-item"><span>Sobrecarga</span><strong>{boss.resistances.overheat}</strong></div>
                <div className="sensor-item"><span>Choque</span><strong>{boss.resistances.shock}</strong></div>
                <div className="sensor-item"><span>Decadência</span><strong>{boss.resistances.decay}</strong></div>
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