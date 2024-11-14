import { useState } from "react";
import { StyledHome } from "./homeStyle";
import copinhoV from "../../src/assets/vermelho_p.png";
import copinhoA from "../../src/assets/amarelo_p.png";
import copinhoL from "../../src/assets/laranja_p.png";
import copoV from "../../src/assets/vermelho_g.png";
import copoA from "../../src/assets/amarelo_g.png";
import copoL from "../../src/assets/laranja_g.png";

export default function Home() {
  const [copo, setcopo] = useState();

  return (
    <StyledHome>
      <section>
        <h3>Mais que café</h3>
        <h2>Isso é <h1>Starbucks</h1></h2>
        <button>SAIBA MAIS</button>
        <div>
          <img src={copo} alt="" />
        </div>
      </section>
      <section>
        <button>{}</button>
      </section>
    </StyledHome>
  );
};
