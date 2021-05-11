import './styles.scss'

function StarWarList({ query, search}) {
  return (
    <div className="starwars-container">
      <h1>Busca para: {search}</h1>
        <div className="starwars-list">
          {query?.map((item, index) => (
            <div className="starwars-card" key={index}>
              <div className="card-content">
                <h2>{item.name}</h2>
                <ul>
                  <li>Gender: {item.gender}</li>
                  <li>Height: {item.height}</li>
                  <li>Mass: {item.mass}</li>
                  <li>Hair Color: {item.hair_color}</li>
                  <li>Eye Color:{item.hair_color}</li>
                  <li>Birth Year: {item.birth_year}</li>
                </ul>
              </div>
            </div>
         ))}
        </div>     
    </div>
  );
}

export default StarWarList;