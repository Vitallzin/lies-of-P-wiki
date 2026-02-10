import React from 'react';
import { gameFeatures } from '../../data/homeData';
import './featureGrid.css';

const FeaturesGrid: React.FC = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {gameFeatures.map((feature) => (
            <div key={feature.id} className="feature-card">
              
              {/* Título com as linhas douradas (Essência da imagem) */}
              <div className="feature-header">
                <div className="header-line"></div>
                <h3 className="feature-title">{feature.title}</h3>
                <div className="header-line"></div>
              </div>

              {/* Moldura da Imagem com Cantos Dourados */}
              <div className="feature-image-container">
                <div className="feature-frame">
                  <img src={feature.image} alt={feature.title} />
                  <div className="frame-corner top-left"></div>
                  <div className="frame-corner bottom-right"></div>
                </div>
              </div>

              {/* Descrição Limpa (Sem destaques em vermelho) */}
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;