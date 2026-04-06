import { Link } from 'react-router-dom'; // Importante importar o Link

function Header() {
  return (
    <header>
      <h1>Serie A Stats</h1>

      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/">Clubes</Link></li> 
          <li><Link to="/#sobre">Sobre</Link></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;