import EscudoFutebol from "../../assets/defesa-BS0LKKK4.png";
import JogadorFutebol from "../../assets/jogador-de-futebol-Cj1C2MVx.png";
import "./herosection.css";

function Herosection() {
  return (
    <section className="hero">
      <h1>
        Estatísticas do <span>Brasileirão Série A</span>
      </h1>

      <p>
        Explore dados detalhados de todos os clubes da elite do futebol
        brasileiro. Informações sobre elencos, estatísticas de jogadores e muito
        mais.
      </p>

      <nav>
        <ul className="hero-cards">
          <li className="card-info">
            <img src={EscudoFutebol} alt="Escudo" />
            <div>
              <span>20</span>
              <p>Clubes</p>
            </div>
          </li>

          <li className="card-info">
            <img src={JogadorFutebol} alt="Jogador" />
            <div>
              <span>160</span>
              <p>Jogadores</p>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Herosection;