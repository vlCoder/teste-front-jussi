import './styles.scss'
import solutionsList from './content'

function Solutions() {
  return (
    <div className="solutions-container">
      <h1>Nossas Soluções</h1>
      <div className="list-solutions">
        {solutionsList.map((item, index) => (
          <div className="card-solutions" key={index}>
            <div className="header-card">
              <div className="img-card">{item.img}</div>
            </div>
            <div className="card">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <ul>
                {item.list.map((feature, index) => (
                  <li key={index}>{feature.name}</li>
                ))}
              </ul>
            </div>
            <div className="footer-card">
              <button>Ver solução</button>
            </div>
          </div> 
        ))} 
      </div>
    </div>
  );
}

export default Solutions;