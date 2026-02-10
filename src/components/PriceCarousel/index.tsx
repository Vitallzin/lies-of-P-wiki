import './PriceCarousel.css';
import { priceData } from '../../data/priceData';

const PriceCarousel = () => {
  const prices = priceData;

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {prices.map((item) => (
          <div key={item.id} className="price-card">
            
            <div className="icon-wrapper">
              <img 
                className="platform-icon" 
                src={item.icon} 
                alt={item.platform} 
              />
            </div>

            <h3 className="platform-name">{item.platform}</h3>
            <p className="price-tag">{item.price}</p>
            
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="buy-button"
            >
              Comprar agora
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCarousel;