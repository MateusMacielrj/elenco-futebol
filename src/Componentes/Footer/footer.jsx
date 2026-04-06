import Inicio from "../../assets/botao-de-inicio.png"
import Clubes from "../../assets/defesa-BS0LKKK4.png"
import Sobre from "../../assets/informacoes-DPJfE7iM.png"
import Twiter from "../../assets/twitter-DubbX6jP.png"
import Insta from "../../assets/instagram-DmYWk5ch.png"
import You from "../../assets/youtube-Bkrd1hYi.png"


function SectionFooter() {
  return (
    <footer>
      <div className="footer-container">
        
        <section className="explicativo">
          <h2>Serie A Stats</h2>
          <p>
            Plataforma de estatísticas do Campeonato Brasileiro Série A.
            Explore dados detalhados de todos os clubes e jogadores.
          </p>
        </section>

        <nav aria-label="Navegação do site">
          <ul>
            <li><img src={Inicio} alt="" /><a href="#">Início</a></li>
            <li> <img src={Clubes} alt="" /><a href="#">Clubes</a></li>
            <li><img src={Sobre} alt="" /><a href="#">Sobre</a></li>
          </ul>
        </nav>

        <nav aria-label="Redes sociais">
          <ul>
            <li><img src={Twiter} alt="" /><a href="#">X</a></li>
            <li><img src={Insta} alt="" /><a href="#">Instagram</a></li>
            <li><img src={You} alt="" /><a href="#">YouTube</a></li>
          </ul>
        </nav>

      </div>

      <p className="direitos">© 2026 Serie A Stats. Todos os direitos reservados.</p>
    </footer>
  );
}

export default SectionFooter;