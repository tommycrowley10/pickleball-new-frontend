// src/styles/globalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #f7f7f7;  /* Light background */
    color: #333;  /* Text color */
    line-height: 1.6;
    font-size: 16px;
  }

  h1, h2, h3, h4 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    color: #007bff; /* Links color */
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
