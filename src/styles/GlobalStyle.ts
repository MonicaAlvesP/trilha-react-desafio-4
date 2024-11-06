import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      font-family: 'Nunito', sans-serif;
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
      font-family: 'Nunito', sans-serif;
    }
`;