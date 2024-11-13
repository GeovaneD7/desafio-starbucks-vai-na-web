
---

## Métodos utilizados:

### Início do projeto:

- Um projeto React foi criado através do Vite.
- Foi deletado todos os arquivos de testes que o Vite cria normalmente.
- Criei o diretório `components` e dentro dele as pastas `About`, `Header`, `Home`, `News` e dentro de cada pasta os respectivos arquivos `.jsx`.
- Foram instalados os módulos [Styled-Components](https://styled-components.com/docs) e [React Router](https://v5.reactrouter.com/web/api/BrowserRouter).
- Adicionado as imagens a serem usadas que foram disponibilizadas no Figma.
- Criado os arquivos de estilos em suas respectivas pastas de componentes.
- Exportado as fontes de texto que serão usadas na `head` do `index.html`.

### Desenvolvimento do App:

- No `App.jsx` foi importado os atributos `BrowserRouter, Route e Routes` da `react-router-dom`, os componentes `Header, Home, About e News` e o GlobalStyle que será o reset de estilo da página.
- Foi feito a exportação da função padrão `App()` retornando todos os componentes que serão renderizados. Retornando:
  - GlobalStyle: para indicar onde que ficação as rotas.
  - Header: Para que seja renderizado o menu de navegação.
  - Routes: Tag pai que acolherá as rotas em si.
  - Route: Uma rota para cada caminho da página web.

### Desenvolvimento da Header:

- Na Header foi usado o atributo `Link` dentro das `<li>` para indicar a navegação e importado o arquivo de estilização `headerStyle.jsx`.
- No arquivo de estilo  foi usado flex box e um pouco de aninhamento pra manter o código limpo.
- O arquivo foi estilizado para ficar conforme o proposto no Figma, utilizando flexbox e resets para que fique o mais parecido possível.

### Desenvolvimento do About:
- O arquivo foi iniciado com a exportação da função padrão `About()` retornando a tag `<StyledAbout>` que foi importada do arquivo de estilo `aboutStyle.jsx`.
- Dentro dessa tag container é estruturado o html contendo os detalhes da página de acordo com o Figma.
- Para o botão foi optado por usar a tag `<button>` por ser mais semântica e atual.
- Além da estilização conforme o Figma foi usado o pseudo-elemento `:hover` pra criar a aparência de um link clicável.
