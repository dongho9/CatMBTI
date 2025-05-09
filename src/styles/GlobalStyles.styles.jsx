import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SimKyungha from "../fonts/SimKyungha.ttf";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  ul, li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  :root{
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --accent-color: #dc143c;
  }
  @font-face{
    font-family: "SimKyungha";
    src: url(${SimKyungha}) format("truetype"); //src 경로
    /* src:  url("/fonts/SimKyungha.ttf") format("truetype"); //public 경로 */
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem !important;
    font-family: "SimKyungha" !important;
  }
`;

export default GlobalStyle;
