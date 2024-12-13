import { useState } from "react";
import { StyledHome } from "./homeStyle";
import vermelhoP from "../../assets/vermelho_p.png";
import amareloP from "../../assets/amarelo_p.png";
import laranjaP from "../../assets/laranja_p.png";
import vermelhoG from "../../assets/vermelho_g.png";
import amareloG from "../../assets/amarelo_g.png";
import laranjaG from "../../assets/laranja_g.png";
import fundoAmarelo from "../../assets/elipse_amarelo.png"
import fundoVerde from "../../assets/elipse_verde.png"
import fundoVermelho from "../../assets/elipse_vermelho.png"

export default function Home() {
  const [copo, setCopo] = useState(laranjaG);
  const [corFundo, setCorFundo] = useState(fundoVerde);

  const verLaranja = () => {
    setCopo(laranjaG);
    setCorFundo(fundoVerde);
  };
  const verVermelho = () => {
    setCopo(vermelhoG);
    setCorFundo(fundoVermelho);
  };
  const verAmarelo = () => {
    setCopo(amareloG);
    setCorFundo(fundoAmarelo);
  };

  return (
    <StyledHome>
      <section id="anuncio">
        <div id="enunciado">
          <h3>Mais que café</h3>
          <h2>Isso é <h1>Starbucks</h1></h2>
          <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
          <button id="mais">SAIBA MAIS</button>
        </div>
      </section>

      <section id="vitrine">
        <div id="opcoes">
          <button className="amostras" onClick={verLaranja}>
            <img src={laranjaP} alt="Miniatura de um copo na cor laranja" />
          </button>
          <button className="amostras" onClick={verVermelho}>
            <img src={vermelhoP} alt="Miniatura de um copo na cor vermelha" />
          </button>
          
          <button className="amostras" onClick={verAmarelo}>
            <img src={amareloP} alt="Miniatura de um copo na cor amarela" />
          </button>
        </div>

        <div >
          <img id="elipse" src={corFundo} alt="Um Fundo colorido que destaca uma amostra do copo servido no Starbucks" />
          <img id="copoG" src={copo} alt="Um copo grande mostrando uma deliciosa bebida gelada" />
        </div>
      </section>
    </StyledHome>
  );
};
