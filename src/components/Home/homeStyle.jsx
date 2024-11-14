import styled from "styled-components";

export const StyledHome = styled.main`
  
  section {

  }

  button.amostras{
    background-color: #00000000;
    border: none;

    &:hover{
      cursor: pointer;
      transform: rotate(10deg) translateY(-10px);
      transition: transform 0.2s;
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
