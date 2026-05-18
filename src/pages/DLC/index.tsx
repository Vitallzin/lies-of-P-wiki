import './DLC.css';
import PriceCarousel from '../../components/PriceCarousel';
import { whatDLC, howAccess, dlcNewGampelay } from '../../data/DLC';
import logoDLC from '../../assets/img/DLC/logoDLC.webp';

const Dlc = () => {
  return (
    <div className="home-container dlc-page-container">
      {/* SEÇÃO 1: HERO / SINOPSE */}
      <section className="hero-section dlc-hero-section">
        <div className="hero-background dlc-hero-background"></div>
        <div className="hero-overlay dlc-hero-overlay"></div>
        <div className="hero-content dlc-hero-content">
          <div className="hero-logo dlc-hero-logo">
            <img src={logoDLC} alt="Lies of P Overture logo" />
          </div>
          <p className="synopsis-text">
            Uma prequela dramática que transporta você para a cidade de Krat em seus últimos dias de grandeza, 
            revelando histórias não contadas e segredos arrepiantes.
          </p>
          <div className="hero-divider dlc-hero-divider"></div>
          <p className="quote-text dlc-quote-text">
            “No coração das trevas reside a chave para desvendar os segredos de uma história atemporal.”<br />
            - Overture
          </p>
        </div>
      </section>

      {/* SEÇÃO 2: Visão Geral */}
      <section className="about-game-section">
        <div className="about-game-container">
          <div className="about-game-image">
            <div className="image-frame">
              <img src={whatDLC.image} alt="Lies of P Overture" />
              <div className="frame-border-top"></div>
              <div className="frame-border-bottom"></div>
            </div>
          </div>

          <div className="about-game-content">
            <h2 className="section-title">Visão geral da dlc</h2>
            <div className="gold-divider dlc-blue-divider"></div>
            <p>{whatDLC.description}</p>
            <p>{whatDLC.description2}</p>
          </div>
          <div className="about-game-content2">
            <p>{whatDLC.description3}</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: Como Acessar */}
      <section className="about-game-section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="about-game-container-reverse">
          <div className="about-game-image">
            <div className="image-frame">
              <img src={howAccess.image} alt="Como Acessar" />
              <div className="frame-border-top"></div>
              <div className="frame-border-bottom"></div>
            </div>
          </div>
          <div className="about-game-content">
            <h2 className="section-title">Como Acessar</h2>
            <div className="gold-divider dlc-blue-divider"></div>
            <p>{howAccess.description}</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: Recursos da DLC */}
      <section className="features-main-section">
        <div className="about-game-content2">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Novidades da Expansão
          </h2>
          <div className="gold-divider-features dlc-blue-divider-features"></div>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            Descubra as novas mecânicas, armas e desafios que Lies of P: Overture traz para os jogadores.
          </p>
        </div>

        <div className="dlc-features-grid">
          {dlcNewGampelay.map((feature) => (
            <div key={feature.id} className="dlc-feature-card">
              <div className="dlc-feature-header">
                <div className="dlc-header-line"></div>
                <h3 className="dlc-feature-title">{feature.title}</h3>
                <div className="dlc-header-line"></div>
              </div>

              <div className="dlc-feature-image-container">
                <div className="dlc-feature-frame">
                  <img src={feature.image} alt={feature.title} />
                  <div className="dlc-frame-corner dlc-top-left"></div>
                  <div className="dlc-frame-corner dlc-bottom-right"></div>
                </div>
              </div>

              <div className="dlc-feature-description">
                <p>{feature.description}</p>
                {feature.description2 && <p style={{ marginTop: '10px' }}>{feature.description2}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 5: PREÇOS */}
      <section className="prices-section">
        <h2 className="section-title">Adquira sua Edição</h2>
        <p className="section-subtitle">Disponível para todas as plataformas</p>
        <PriceCarousel />
      </section>
    </div>
  );
};

export default Dlc;
