
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './elenco.css';

function Elenco({ todosOsElencos, mapaEscudos, temaDosTimes }) {
  const { nomeDoTime } = useParams();

  const jogadores = todosOsElencos[nomeDoTime];
  const escudoTime = mapaEscudos ? mapaEscudos[nomeDoTime] : null;
  const tema = temaDosTimes ? temaDosTimes[nomeDoTime] : null;

  if (!jogadores) {
    return (
      <div className="container-aviso">
        <Link to="/" className="btn-voltar-redondo">←</Link>
        <h2>O elenco do {nomeDoTime} ainda não foi cadastrado no sistema.</h2>
      </div>
    );
  }

  return (
    <div
      className="elenco-container"
      style={{
        background: tema?.fundo || "#000",
        color: tema?.texto || "#fff"
      }}
    >
      <header className="elenco-header">
        <div className="titulo-time-wrapper">
          <Link to="/" className="btn-voltar-redondo" title="Escolher outro time">←</Link>
          {escudoTime && (
            <img
              src={escudoTime}
              alt={nomeDoTime}
              className="escudo-time-topo"
            />
          )}
          <h1>{nomeDoTime}</h1>
        </div>
        <p className="subtitulo-elenco">
          Temporada 2026 | Elenco Profissional
        </p>
      </header>

      <div className="jogadores-grid">
        {jogadores.map((jogador, index) => (
          <div
            key={index}
            className="jogador-card"
            style={{
              background: tema?.card || "#111",
              color: tema?.texto || "#fff"
            }}
          >
            <div className="jogador-foto">
              <img
                src={jogador.imagem || "https://via.placeholder.com/150"}
                alt={jogador.nome}
              />
            </div>

            <div className="jogador-info">
              {jogador.numero && (
                <span className="numero-destaque">
                  {jogador.numero}
                </span>
              )}

              <h3 className="nome-jogador">
                {jogador.nome}
              </h3>

              <p className="posicao-badge">
                {jogador.posicao}
              </p>

              <div className="detalhes">
                <span>
                  <strong>Idade:</strong> {jogador.idade}
                </span>

                <div className="nacionalidade-wrapper">
                  <strong>País:</strong>
                  <img
                    src={jogador.nacionalidade}
                    alt="Bandeira"
                    className="bandeira-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Elenco;