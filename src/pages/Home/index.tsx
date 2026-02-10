import './home.css';
import PriceCarousel from '../../components/PriceCarousel';
import FeaturesGrid from '../../components/FeatureGrid';
import {aboutGame} from '../../data/homeData';
import { historyGame } from '../../data/homeData';
import { keyFeatures } from '../../data/homeData';
import { aboutDev } from '../../data/homeData';
import Lies_of_P_logo from '../../assets/img/home/logo.png';

const Home = () => {
  return (
    <div className="home-container">
  
      {/* SEÇÃO 1: HERO / SINOPSE (Não alterada) */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-logo"><img src={Lies_of_P_logo} alt="Lies of P logo" /></div>
          <p className="synopsis-text">
            Um site dedicado a explorar a história, personagens, armas e segredos de Lies of P reunindo informações e guias para fãs do jogo.
          </p>
          <div className="hero-divider"></div>
          <p className="quote-text">
            “A aparência engana mais do que a própria mentira.”<br />
            - Platão
          </p>
        </div>
      </section>

      {/* SEÇÃO 2: Visão Geral do Jogo */}
      <section className="about-game-section">
        <div className="about-game-container">
          <div className="about-game-image">
            <div className="image-frame">
              <img src={aboutGame.image} alt="Lies of P Game" />
              <div className="frame-border-top"></div>
              <div className="frame-border-bottom"></div>
            </div>
          </div>

          <div className="about-game-content">
            <h2 className="section-title">Visão geral do jogo</h2>
            <div className="gold-divider"></div>
            <p>{aboutGame.description}</p>
            <p>{aboutGame.description2}</p>
          </div>
          <div className="about-game-content2">
            <p>{aboutGame.description3}</p>   
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: História e Cenário */}
      <section className="about-game-section" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
        <div className="about-game-container-reverse">
           <div className="about-game-image">
            <div className="image-frame">
              <img src={historyGame.image} alt="Lies of P History" />
              <div className="frame-border-top"></div>
              <div className="frame-border-bottom"></div>
            </div>
          </div>
          <div className="about-game-content">
            <h2 className="section-title">História e Cenário</h2>
            <div className="gold-divider"></div>
              <p>{historyGame.description}</p>
              <p>{historyGame.description2}</p>
              <p>{historyGame.description3}</p>
          </div>     
        </div>
      </section>

      {/* SEÇÃO 4: Recursos do Jogo */}
      <section className="features-main-section">
        <div className='about-game-content2'>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}> Principais características do jogo</h2>
            <div className='gold-divider-features'></div>
          <p>{keyFeatures.description}</p>
        </div>
        <FeaturesGrid />
      </section>

      {/* SEÇÃO 5: DESENVOLVEDORA (IMAGEM NA ESQUERDA) */}
   <section className="about-game-section" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
        <div className="about-game-container-reverse">
           <div className="about-game-image">
              <div className="dev-image-placeholder">
                <img src={aboutDev.image} alt="Lies of P History" />
              <div className="image-border"></div>
           </div>
          </div>
          <div className="about-game-content">
            <h2 className="section-title">Desenvolvedora</h2>
            <div className="gold-divider"></div>
              <p>{aboutDev.description}</p>
          </div>     
           <div className="about-game-content2">
            <p>{aboutDev.description2}</p>   
          </div>
        </div>
      </section>
    
         
            
          
     

      {/* SEÇÃO 5: PREÇOS */}
      <section className="prices-section">
        <h2 className="section-title">Adquira sua Edição</h2>
        <p className="section-subtitle">Disponível nas principais plataformas</p>
        <PriceCarousel />
      </section>
    </div>
  );
};

export default Home;