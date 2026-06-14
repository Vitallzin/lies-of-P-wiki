import { useParams, useNavigate } from 'react-router-dom';
import { amuletsData } from '../../../data/amuletsData';
import './AmuletDetails.css';

const splitAmuletText = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map(paragraph => paragraph.trim())
    .filter(Boolean);

const AmuletDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const amulet = amuletsData.find(a => String(a.id) === String(id));

  if (!amulet) {
    return (
      <div className="amulet-details-page">
        <button className="amulet-details-back" onClick={() => navigate(-1)}>
          <span className="amulet-details-back-text">Retornar aos Amuletos</span>
          <div className="amulet-details-back-line"></div>
        </button>
      </div>
    );
  }

  const themeClass = amulet.isDLC ? 'theme-dlc' : 'theme-normal';
  const descriptionParagraphs = splitAmuletText(amulet.description);
  const locationParagraphs = splitAmuletText(amulet.location);
  const effectParts = amulet.effect.split(/\s*\|\s*/).filter(Boolean);
  const weightValues = amulet.weight.split(/\s*;\s*/).filter(Boolean);

  return (
    <div className={`amulet-details-page ${themeClass}`}>
      <div className="amulet-details-shell">
        <button className="amulet-details-back" onClick={() => navigate(-1)}>
          <span className="amulet-details-back-text">Retornar aos Amuletos</span>
          <div className="amulet-details-back-line"></div>
        </button>

        <div className="amulet-details-layout">
          <div className="amulet-details-hero">
            <div className="amulet-details-copy">
              <span className="amulet-details-tag">
                {amulet.isDLC ? 'Conteudo de Expansao' : 'Amuleto'}
              </span>
              <h1 className="amulet-details-title">{amulet.name}</h1>
              <div className="amulet-details-description">
                <span className="amulet-details-section-label">Efeito principal</span>
                <div className="amulet-details-effect-box">
                  {effectParts.map((effectPart, index) => (
                    <p key={`${amulet.id}-effect-${index}`}>{effectPart}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="amulet-details-visual">
              <div className="amulet-details-frame">
                <img src={amulet.image} alt={amulet.name} />
                <div className="amulet-details-glow"></div>
              </div>
            </div>
          </div>

          <div className="amulet-details-info-grid">
            <div className="amulet-details-card amulet-details-specs">
              <h4 className="amulet-details-card-title">Especificacoes</h4>
              <div className="amulet-details-spec-list">
                <div className="amulet-details-spec-row">
                  <span>Peso</span>
                  <div className="amulet-details-weight-list">
                    {weightValues.map((weight, index) => (
                      <strong key={`${amulet.id}-weight-${index}`}>
                        {weight} kg
                      </strong>
                    ))}
                  </div>
                </div>

                <div className="amulet-details-spec-row">
                  <span>Tipo</span>
                  <strong>{amulet.isDLC ? 'DLC Overture' : 'Jogo base'}</strong>
                </div>
              </div>
            </div>

            <div className="amulet-details-card amulet-details-lore">
              <h4 className="amulet-details-card-title">Descricao</h4>
              <div className="amulet-details-paragraphs">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={`${amulet.id}-description-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="amulet-details-location-grid">
            {amulet.location && (
              <div className="amulet-details-card amulet-details-location">
                <h4 className="amulet-details-card-title">Localizacao</h4>
                <div className="amulet-details-paragraphs">
                  {locationParagraphs.map((paragraph, index) => (
                    <p key={`${amulet.id}-location-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmuletDetails;
