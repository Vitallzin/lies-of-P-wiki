import { useParams, useNavigate } from 'react-router-dom';
import { NPCData, type MerchantItem, type ShopInventoryItem } from '../../data/NPCData';
import './NPC.css';

const formatMerchantCost = (cost: number | string) =>
  cost === 'special'
    ? 'Especial'
    : typeof cost === 'number'
      ? `${cost.toLocaleString('pt-BR')} Ergo`
      : cost;

const getQuestName = (quest: string | { name: string }) =>
  typeof quest === 'string' ? quest : quest.name;

const getQuestDescription = (quest: string | { description?: string }) =>
  typeof quest === 'string' ? undefined : quest.description;

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
  const shopInventoryByRequirement = character.shopInventory?.reduce<Record<string, ShopInventoryItem[]>>(
    (groups, item) => {
      const groupKey = item.required || 'Disponivel';

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
                  <li key={i}>
                    <strong>{getQuestName(quest)}</strong>
                    {getQuestDescription(quest) && <span>{getQuestDescription(quest)}</span>}
                  </li>
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

            {character.isMerchant && shopInventoryByRequirement && (
              <div className="info-block full-width merchant-inventory-block">
                <h4 className="block-label">Estoque do Mercante</h4>
                <div className="merchant-inventory-groups">
                  {Object.entries(shopInventoryByRequirement).map(([groupName, items]) => (
                    <div className="merchant-inventory-group" key={groupName}>
                      <h5>{groupName}</h5>
                      <div className="merchant-items-grid">
                        {items.map((item) => (
                          <div className={`merchant-item-card ${item.isDLC ? 'merchant-item-dlc' : ''}`} key={`${groupName}-${item.itemName}`}>
                            <div>
                              <strong>{item.itemName}</strong>
                              <span>{item.itemType}</span>
                            </div>
                            <div className="merchant-item-meta">
                              <span>{formatMerchantCost(item.cost)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {character.inventoryRareErgo && (
              <div className="info-block full-width merchant-inventory-block">
                <h4 className="block-label">Trocas de Ergo Raro</h4>
                <div className="merchant-items-grid">
                  {character.inventoryRareErgo.map((item) => (
                    <div className={`merchant-item-card ${character.isDLC || item.isDLC ? 'merchant-item-dlc' : ''}`} key={`${item.name}-${item.price}`}>
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.type}</span>
                      </div>
                      <div className="merchant-item-meta">
                        <span>{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {character.inventoryAncientDisks && (
              <div className="info-block full-width merchant-inventory-block">
                <h4 className="block-label">Discos Antigos</h4>
                <div className="merchant-items-grid">
                  {character.inventoryAncientDisks.map((item) => (
                    <div className={`merchant-item-card ${character.isDLC || item.isDLC ? 'merchant-item-dlc' : ''}`} key={`${item.name}-${item.required}`}>
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.type} - Qtde: {item.amount}</span>
                      </div>
                      <div className="merchant-item-meta">
                        <span>{item.price} disco(s)</span>
                        {item.required !== '-' && <em>{item.required}</em>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {character.baseGame && (
              <div className="info-block full-width merchant-inventory-block">
                <h4 className="block-label">Estoque do Jogo Base</h4>
                <div className="merchant-location-list">
                  {character.baseGame.locations.map((location) => (
                    <p key={`${location.chapter}-${location.name}`}>
                      <strong>{location.chapter} - {location.name}:</strong> {location.detail}
                    </p>
                  ))}
                </div>
                <div className="merchant-inventory-groups">
                  {character.baseGame.inventories.map((inventory) => (
                    <div className="merchant-inventory-group" key={inventory.shopLocation}>
                      <h5>{inventory.shopLocation}</h5>
                      {inventory.note && <p className="merchant-note">{inventory.note}</p>}
                      <div className="merchant-items-grid">
                        {inventory.items.map((item) => (
                          <div className={`merchant-item-card ${item.isDLC ? 'merchant-item-dlc' : ''}`} key={`${inventory.shopLocation}-${item.name}`}>
                            <div>
                              <strong>{item.name}</strong>
                              <span>{item.type} - Qtde: {item.amount}</span>
                            </div>
                            <div className="merchant-item-meta">
                              <span>{item.price}</span>
                              {item.required && <em>{item.required}</em>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {character.dlc && (
              <div className="info-block full-width merchant-inventory-block merchant-dlc-section">
                <h4 className="block-label">Estoque da DLC Overture</h4>
                <div className="merchant-location-list">
                  {character.dlc.locations.map((location) => (
                    <p key={`${location.chapter}-${location.name}`}>
                      <strong>{location.chapter} - {location.name}:</strong> {location.detail}
                    </p>
                  ))}
                </div>
                <div className="merchant-inventory-groups">
                  {character.dlc.inventories.map((inventory) => (
                    <div className="merchant-inventory-group" key={inventory.shopLocation}>
                      <h5>{inventory.shopLocation}</h5>
                      <div className="merchant-items-grid">
                        {inventory.items.map((item) => (
                          <div className="merchant-item-card merchant-item-dlc" key={`${inventory.shopLocation}-${item.name}`}>
                            <div>
                              <strong>{item.name}</strong>
                              <span>{item.type} - Qtde: {item.amount}</span>
                            </div>
                            <div className="merchant-item-meta">
                              <span>{item.price}</span>
                              {item.required && <em>{item.required}</em>}
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
