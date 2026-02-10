import { useNavigate } from 'react-router-dom';
import { classesData } from '../../data/classesData';
import './Classes.css';

const Classes = () => {
  const navigate = useNavigate();

  return (
    <div className="classes-page">
      <div className="classes-overlay"></div>
      
      <header className="classes-header">
        <h1 className="cinzel-title">Memórias do Despertar</h1>
        <div className="title-separator">
          <div className="line"></div>
          <div className="diamond"></div>
          <div className="line"></div>
        </div>
        <p className="subtitle">Escolha o caminho que define sua humanidade</p>
      </header>

      <div className="classes-grid">
        {classesData.map((c) => (
          <div key={c.id} className="class-selection-card" onClick={() => navigate(`/classes/${c.id}`)}>
            <div className="card-image-wrapper">
              <img src={c.image} alt={c.name} />
              <div className="card-gradient"></div>
            </div>
            
            <div className="card-body">
              <h2 className="class-type-name">{c.name}</h2>
              <p className="class-short-desc">{c.description}</p>
              
              <div className="action-area">
                <div className="red-glow-line"></div>
                <button className="view-build-btn">Ver Atributos</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;