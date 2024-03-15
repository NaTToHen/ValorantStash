import { Link } from 'react-router-dom'
import '../global/global.css';

import logo from '../assets/img/logo.svg'
import pesquisa from '../assets/img/pesquisa.svg'

function Header(props) {
  return (
    <header className="headerHome">
      <Link to="/"><img src={logo} /></Link>

      <nav className="navBar">
        <Link to="/" style={{textDecoration: 'none'}}>
          <a className="navLink" href="">INICIO</a>
        </Link>
        <Link to="/armas" style={{textDecoration: 'none'}}>
          <a className="navLink" href=''>ARMAS</a>
        </Link>
        <Link to="/facas" style={{textDecoration: 'none'}}>
          <a className="navLink" href=''>FACAS</a>
        </Link>
        <Link to="/sobre" style={{textDecoration: 'none'}}>
          <a className="navLink" href=''>SOBRE</a>
        </Link>

        <div className="containerPesquisa">
          <input className='inputPesquisa' type="text"/>
          <img className='btnPesquisa' src={pesquisa} alt="pesquisar"/>
        </div>
      </nav>
    </header>
  )
}

export default Header