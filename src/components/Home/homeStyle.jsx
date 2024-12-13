import styled from "styled-components";

export const StyledHome = styled.main`
  main { height: 85vh; }

  section {
    display: flex;
    justify-content: space-between;
  }

  #anuncio {
    font-family: Poppins;
    font-size: 3.4rem;
    padding: 10vh 0 10vh 5vw;
    height: 60vh;
  }

  h3 {
    font-family: Inter;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
    font-size: 3.6rem;

    h1 {
      color: #037143;
      display: inline;
    }
  }

  #enunciado { width: 800px; }

  p { font-size: 1.5rem; }
  
  #elipse {
    position: absolute;
    top: 44vh;
    left: 60vw;
    z-index: -1;

    width: 40vw;
  }

  #copoG { 
    position: relative;
    width: 27vw;
    left: 20vw;
    bottom: 40vh;
  }

  #vitrine {
    display: flex;
    justify-content: center;
  }

  #opcoes {
    display: flex;
    justify-content: center;
    height: 10vh;
    margin: 5vh 0;
  }

  button.amostras{
    background-color: #00000000;
    border: none;
    margin: 0 1%;

    img { 
      height: 12vh; 
      
      &:hover{
        cursor: pointer;
        transform: rotate(10deg) translateY(-10px);
        transition: transform 0.2s;
      }
    }
  }

  button#mais {
    font-family: Inter;
    font-size: 1.5rem;
    color: #ffffff;
    background-color: #037143;
    border-radius: 30px;
    border-style: none;
    width: 15vw;
    height: 5vh;
   
    &:hover {
      cursor: pointer;
      background-color: #195324;
    }
  }
`
