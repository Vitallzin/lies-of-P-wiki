import './PriceCarouselDLC.css';
import { priceDataDLC } from '../../data/priceData';

const PriceCarouselDLC = () => {
  const prices = priceDataDLC;

  return (
    <div className="carousel-container-dlc">
      <div className="carousel-track-dlc">
        {prices.map((item) => (
          <div key={item.id} className="price-card-dlc">
            
            <div className="icon-wrapper-dlc">
              <img 
                className="platform-icon-dlc" 
                src={item.icon} 
                alt={item.platform} 
              />
            </div>

            <h3 className="platform-name-dlc">{item.platform}</h3>
            
            <div className="dlc-purchase-options">
              {/* Opção 1: Apenas Expansão */}
              <div className="dlc-option-block">
                <span className="option-label">Expansão</span>
                <p className="price-text">{item.price}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dlc-buy-btn btn-standard"
                >
                  Adquirir
                </a>
              </div>

              {/* Opção 2: Bundle Completo */}
              <div className="dlc-option-block">
                <span className="option-label">Bundle Completo</span>
                <p className="price-text price-highlight">{item.priceBundle}</p>
                <a 
                  href={item.linkBundle} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dlc-buy-btn btn-bundle"
                >
                  Combo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCarouselDLC;