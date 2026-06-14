import { useParams, useNavigate } from 'react-router-dom';
import { NPCData, type MerchantItem } from '../../data/NPCData';
import './NPC.css';

const formatMerchantCost = (cost: number | 'special') =>
  cost === 'special' ? 'Especial' : `${cost.toLocaleString('pt-BR')} Ergo`;

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Busca garantindo comparação de strings
  const character = NPCData.find(c => String(c.id) === String(id));

  if (!character) return null;

  const themeClass = character.isDLC ? 'theme-dlc' : 'theme-normal';
  const inventoryByCollection = character.merchantInventory?.reduce<Record<string, MerchantItem[]>>(
    (groups, item) => {
      const groupKey = item.requiredCollection === 0
        ? 'Disponivel inicialmente'
        : `${item.requiredCollection} colecao(oes) necessaria(s)`;

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }

      groups[groupKey].push(item);
      return groups;
    },
    {}
  );

  return (
    <div className={`details-page ${themeClass}`}>
      <div className="details-container">
        {/* BOTÃO VOLTAR PADRONIZADO */}
        <button className="back-btn-modern" onClick={() => navigate('/NPC')}>
          <span className="text">Retornar a lista de Personagens</span>
          <div className="btn-line"></div>
        </button>

        <div className="details-main-layout">
          {/* TOPO: BIOGRAFIA (ESQUERDA) | IMAGEM (DIREITA) */}
          <div className="details-header-section">
            <div className="header-text">
              <div className="npc-detail-badges">
                <span className="category-tag">{character.location}</span>
                {character.isDLC && <span className="npc-detail-badge dlc">DLC</span>}
                {character.isMerchant && <span className="npc-detail-badge merchant">Mercante</span>}
              </div>
              <h1 className="weapon-name-title">{character.name}</h1>
              <div className="description-box">
                <h3>Crônica do Personagem</h3>
                <p>{character.description}</p>
              </div>
            </div>

            <div className="header-visual">
              <div className="image-frame">
                <img src={character.image} alt={character.name} />
                <div className="frame-glow"></div>
              </div>
            </div>
          </div>

          {/* BAIXO: INFORMAÇÕES NARRATIVAS E TÉCNICAS */}
          <div className="details-footer-info">
            {/* Bloco 1: Onde Encontrar */}
            <div className="info-block">
              <h4 className="block-label">Onde Encontrar</h4>
              <p className="block-content-text">{character.whereFind}</p>
            </div>

            {/* Bloco 2: Objetivos (Quests) */}
            <div className="info-block">
              <h4 className="block-label">Objetivos (Quests)</h4>
              <ul className="quests-list">
                {character.quests.map((quest, i) => (
                  <li key={i}>{quest}</li>
                ))}
              </ul>
            </div>

            {character.isMerchant && inventoryByCollection && (
              <div className="info-block full-width merchant-inventory-block">
                <h4 className="block-label">Estoque do Mercante</h4>
                <div className="merchant-inventory-groups">
                  {Object.entries(inventoryByCollection).map(([groupName, items]) => (
                    <div className="merchant-inventory-group" key={groupName}>
                      <h5>{groupName}</h5>
                      <div className="merchant-items-grid">
                        {items.map((item) => (
                          <div className="merchant-item-card" key={`${groupName}-${item.name}`}>
                            <div>
                              <strong>{item.name}</strong>
                              <span>{item.type}</span>
                            </div>
                            <div className="merchant-item-meta">
                              <span>{formatMerchantCost(item.cost)}</span>
                              {item.isNGPlus && <em>NG+</em>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bloco 3: Curiosidades (Ocupa a largura total) */}
            <div className="info-block full-width">
              <h4 className="block-label">Curiosidades e Rumores</h4>
              <div className="trivia-grid">
                {character.trivia.map((fact, i) => (
                  <div key={i} className="trivia-item">
                    <span className="bullet"></span>
                    <p>{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
