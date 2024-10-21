import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}

body {
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  background-size: cover; /* Faz a imagem de fundo cobrir toda a tela */
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
  text-align: center; /* Centraliza o texto do título */
  margin-bottom: 300px;
  margin-top: 25px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  min-height: 100vh; /* Garante que o main ocupe toda a altura da tela */

   /* Media query para dispositivos móveis */
  @media (max-width: 768px) {
    padding: 40px; /* Aumenta o preenchimento em telas menores */
  }
`;

const LampadaImage = styled.img`
  width: 400px; /* Define a largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  margin: 20px 0; /* Adiciona margem acima e abaixo da imagem */
  cursor: pointer; /* Adiciona o cursor pointer ao passar o mouse */
  transition: transform 0.2s; /* Transição suave para a animação */
  
  &:hover {
    transform: scale(1.1); /* Aumenta a imagem ao passar o mouse */
  }

/* Media query para dispositivos móveis */
  @media (max-width: 768px) {
    width: 80%; /* Reduz a largura da imagem para 80% da largura da tela em dispositivos móveis */
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
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
        onClick={trocarLampada}
      />
      <button onClick={trocarLampada}>Clique aqui</button>
    </Main>
  );
}
