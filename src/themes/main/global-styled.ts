import {createGlobalStyle} from "styled-components";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle<{theme: typeof theme}>`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,400;0,500;1,400&family=Open+Sans:wght@400;700&display=swap');
 body {
     font-family: 'Open Sans', sans-serif;
     background: ${props => props.theme.palette.core.secondary};
 }
 `