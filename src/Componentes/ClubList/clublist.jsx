import { Link } from 'react-router-dom';

function ClubCard({ nome, estadio, fundacao, escudo, tecnico }) {


  return (
    
    <Link to={`/elenco/${nome}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className="club-card">
        <img src={escudo} alt={`Escudo do ${nome}`} />
        <h3>{nome}</h3>
        <p>Fundação: {fundacao}</p>
        <p>Estádio: {estadio}</p>
        <p>Técnico: {tecnico}</p>
      </article>
    </Link>
  );
}

export default ClubCard;