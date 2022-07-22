import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    transition: all 0.2s;
  }
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
}

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, p {
    padding: 0;
    margin: 0;
  }

  input, button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
