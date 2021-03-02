import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  @media(max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: #121214;
    color: #e4e7ea;
    -webkit-font-smoothing: antialiased !important;
    font: 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

  ul {
    list-style: none;
  }
`;
