import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyle = createGlobalStyle`
:root{
    /* Colors */
    --nhorange: ${Colors.nhorange.toCSS()};
    --nhskin: ${Colors.nhskin.toCSS()};
    --nhdarkgray: ${Colors.nhdarkgray.toCSS()};
    --nhlightgray: ${Colors.nhlightgray.toCSS()};
    --nhblack: ${Colors.nhblack.toCSS()};
    --nhwhite: ${Colors.nhwhite.toCSS()};
    --purewhite: ${Colors.purewhite.toCSS()};
    --pureblack: ${Colors.pureblack.toCSS()};
    --transparent: ${Colors.transparent.toCSS()};
    /* Fonts 
    --poppins: "poppins" , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --proximasoft: "proxima-soft" , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    */
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

@font-face {
  font-family: "Pangea Text Trial";
  src: url("/fonts/pangea/PangeaTextTrial-Light.woff") format("truetype");
  font-style: normal;
  font-weight: 100;
  font-display: swap;
}

@font-face {
  font-family: "MT Dalat Sans";
  src: url("/fonts/mtdalatsans/MTDalatSans.woff") format("truetype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

::-moz-selection {
  color: #ffffff;
  background: #e52b08;
}

::selection {
  color: #ffffff;
  background: #e52b08;
}

a {
  color: inherit;
  text-decoration: none;
}
    
`;

export default GlobalStyle;
