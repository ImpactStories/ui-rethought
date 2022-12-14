import { createGlobalStyle } from "styled-components";
import { buildFonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, ul, ol {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  ${buildFonts()}
`;
