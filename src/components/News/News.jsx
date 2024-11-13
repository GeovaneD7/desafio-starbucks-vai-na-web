import cafe from "../../assets/grao_cafe.png"

export default function News() {
  return (
    <section>
      <h3>PREPARAÇÃO</h3>
      <h2>Níveis de Torra</h2>
      <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
      <button>SAIBA MAIS</button>
      <img src={cafe} alt="" />
    </section>
  );
};
