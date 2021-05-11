import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import logo from '../../assets/images/logo.png'
import shoppingCart from '../../assets/images/shopping-cart.png'
import search from '../../assets/images/search.png'

function Header() {
  const [ querySearch, setquerySearch ] = useState('');

  const handleChange = (e) => {
    setquerySearch(e?.target?.value)
  }
  
  return (
    <div className="header-container ">
      <div className="navbar">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <a href="/">Nossas Soluções</a>
          <a href="/">Conheça a Jüssi</a>
        </div>
        <div>
          <div className="search-container">
            <input placeholder="Buscar" onChange={handleChange}/>
            <Link to={`/search/${querySearch}`}>
              <img src={search} alt="Search" />
            </Link>
          </div>
          <a href="/">Login</a>
          <a href="/">
          <img src={shoppingCart} alt="Shopping Cart" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;