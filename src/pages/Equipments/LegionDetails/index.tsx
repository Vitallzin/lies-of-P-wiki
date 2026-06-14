import { useParams, useNavigate } from 'react-router-dom';
import { 
  legionData
} from '../../../data/legionData';
import './LegionDetails.css';

const LegionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const legion = legionData.find(l => String(l.id) === String(id));

  if (!legion) {
    return (
      <div className="details-page">
        <button className="back-btn-modern" onClick={() => navigate(-1)}>
          <span className="text">Retornar ao Arsenal</span>
          <div className="btn-line"></div>
        </button>
      </div>
    );
  }

  const themeClass = legion.isDLC ? 'theme-dlc' : 'theme-normal';

  return (
    <div className={`details-page ${themeClass}`}>
      <div className="details-container">
        <button className="back-btn-modern" onClick={() => navigate(-1)}>
          <span className="text">Retornar ao Arsenal</span>
          <div className="btn-line"></div>
        </button>

        <div className="details-main-layout">
          <div className="details-header-section">
            <div className="header-text">
              <span className="category-tag">
                {legion.isDLC ? 'Conteúdo de Expansão' : 'Braço da Legião'}
              </span>
              <h1 className="weapon-name-title">{legion.name}</h1>
              <div className="description-box">
                <h3>Descrição</h3>
                <p>{legion.description}</p>
                <br />
                <h3>Informação Adicional</h3>
                <p>{legion.infomationLegion}</p>
              </div>
            </div>

            <div className="header-visual">
              <div className="image-frame">
                <img src={legion.image} alt={legion.name} />
                <div className="frame-glow"></div>
              </div>
            </div>
          </div>

          <div className="details-footer-info">
            <div className="info-block stats-block">
              <h4 className="block-label">Atributos de Combate</h4>
              <div className="stats-row">
                <div className="data-item"><span>Tipo de Ataque:</span> <strong>{legion.typeAttack}</strong></div>
                <div className="data-item"><span>Dano:</span> <strong>{legion.attack}</strong></div>
                <div className="data-item"><span>Peso:</span> <strong>{legion.weight}</strong></div>
              </div>
            </div>

            <div className="info-block scaling-block">
              <h4 className="block-label">Escalonamento</h4>
              <div className="scaling-row">
                <div className="scale-box">
                  <span className="label">Motricidade</span>
                  <span className={`value scale-${legion.Motivity}`}>{legion.Motivity}</span>
                </div>
                <div className="scale-box">
                  <span className="label">Técnica</span>
                  <span className={`value scale-${legion.Technique}`}>{legion.Technique}</span>
                </div>
                <div className="scale-box">
                  <span className="label">Avançado</span>
                  <span className={`value scale-${legion.Advance}`}>{legion.Advance}</span>
                </div>
              </div>
            </div>

            <div className="info-block modifications-block">
              <h4 className="block-label">Modificações e Melhorias</h4>
              {legion.modifications ? (
                <div className="modifications-list">
                  <div className="mod-item">
                    <div className="mod-header">
                      <span className="mod-level lv0">{legion.modifications.level0}</span>
                      <span className="mod-materials">{legion.modifications.requiredMaterialsLv0}</span>
                    </div>
                    <p className="mod-desc">{legion.modifications.descriptionlevel0}</p>
                  </div>
                  <div className="mod-item">
                    <div className="mod-header">
                      <span className="mod-level lv1">Nível {legion.modifications.level1}</span>
                      <span className="mod-materials">{legion.modifications.requiredMaterialsLv1}</span>
                    </div>
                    <p className="mod-desc">{legion.modifications.descriptionlevel1}</p>
                  </div>
                  <div className="mod-item">
                    <div className="mod-header">
                      <span className="mod-level lv2">Nível {legion.modifications.level2}</span>
                      <span className="mod-materials">{legion.modifications.requiredMaterialsLv2}</span>
                    </div>
                    <p className="mod-desc">{legion.modifications.descriptionlevel2}</p>
                  </div>
                  <div className="mod-item">
                    <div className="mod-header">
                      <span className="mod-level lv3">Nível {legion.modifications.level3}</span>
                      <span className="mod-materials">{legion.modifications.requiredMaterialsLv3}</span>
                    </div>
                    <p className="mod-desc">{legion.modifications.descriptionlevel3}</p>
                  </div>
                </div>
              ) : (
                <div className="no-modifications-message">
                  <strong>Sem modificações disponíveis</strong>
                  <p>Este Braço da Legião não possui melhorias ou níveis de modificação.</p>
                </div>
              )}
            </div>

            {legion.Location && (
              <div className="info-block location-block">
                <h4 className="block-label">Localizaçãoo</h4>
                <p>{legion.Location}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default LegionDetails;
