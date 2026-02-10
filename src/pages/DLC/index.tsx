import './DLC.css';

const Dlc = () => {
  return (
    <div className="dlc-page-container">
      {/* HERO DA DLC */}
      <section className="dlc-hero">
        <div className="dlc-hero-background"></div>
        <div className="dlc-hero-overlay"></div>
        <div className="dlc-hero-content">
          <h1 className="dlc-title">Sombras de <span className="blue-glow">Krat</span></h1>
          <p className="dlc-subtitle">A Expansão Definitiva</p>
        </div>
      </section>

      {/* SEÇÃO INFORMATIVA 1 (Foto Esquerda) */}
      <section className="dlc-info-section">
        <div className="dlc-container">
          <div className="dlc-image-side">
            <div className="blue-frame">
              <img src="/assets/img/dlc/new-area.png" alt="Nova Área" />
              <div className="blue-border-top"></div>
              <div className="blue-border-bottom"></div>
            </div>
          </div>
          <div className="dlc-text-side">
            <h2 className="section-title">A Ilha dos Alquimistas</h2>
            <div className="blue-divider"></div>
            <p>Explore novas profundezas e descubra o que aconteceu com os experimentos mais obscuros da oficina. A expansão introduz áreas inéditas repletas de segredos e perigos mecânicos.</p>
            <p className="blue-highlight">Novas mecânicas de exploração vertical e enigmas complexos aguardam os jogadores.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO INFORMATIVA 2 (Foto Direita) */}
      <section className="dlc-info-section alt-bg">
        <div className="dlc-container reverse">
          <div className="dlc-text-side">
            <h2 className="section-title">Arsenal de Ergo</h2>
            <div className="blue-divider"></div>
            <p>Forje novas armas de destruição. O braço de legião recebe módulos de tecnologia perdida, permitindo estilos de combate ainda mais agressivos e variados.</p>
            <p className="blue-highlight">Domine o novo sistema de personalização de lâminas raras.</p>
          </div>
          <div className="dlc-image-side">
            <div className="blue-frame">
              <img src="/assets/img/dlc/weapons.png" alt="Novas Armas" />
              <div className="blue-border-top"></div>
              <div className="blue-border-bottom"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dlc;