import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}

body {
  background-image: url("https://www.shutterstock.com/image-photo/disney-style-castle-night-blue-600nw-2509077971.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media(min-widht:201px) and (max-widht: 500px){
  background-size: cover;
  }
}

button {
  font-family: "Sevillana", cursive;
  background-color: #2b58de;
  color: white;
  border-radius: 70px;
  cursor: pointer;
  padding: 25px 80px;
  font-size: 25px;
  margin-bottom: 250px;

  @media (max-width: 768px){
  background-color: #FA86C4;
  
  }
}
`;

const Titulo = styled.h1`
  color: white;
  font-family: "Sevillana", cursive;
  text-align: center; 
  margin-bottom: 300px;
  margin-top: 25px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const LampadaImage = styled.img`
  width: 400px;
  height: auto;
  margin: 20px 0;
  cursor: pointer;
  transition: transform 0.2s; 
  
  &:hover {
    transform: scale(1.1); /* Aumenta a imagem ao passar o mouse */
  }

  @media (max-width: 768px) {
    width: 80%;
  }

`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <Main>
      <GlobalStyle />
      <Titulo>Liberte a magia da programação com a lâmpada de Aladim.</Titulo>
      <LampadaImage
        src={
          lampada
            ? "https://w7.pngwing.com/pngs/859/841/png-transparent-lamp-genie-aladdin-funny-transformed-man.png"
            : "https://img.freepik.com/vetores-gratis/icone-isolado-de-lampada-de-aladim_98292-2691.jpg"
        }
        alt="Lâmpada"
        onClick={trocarLampada}
      />
      <button onClick={trocarLampada}>Clique aqui</button>
    </Main>
  );
}
