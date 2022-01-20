import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
    --main: #F2273E;
    }
    /* @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap'); */
  * {
        box-sizing: border-box;
        /* font-family: 'Cedarville Cursive', cursive;
        letter-spacing: -0.015em; */
    }
`;

export default GlobalStyle;
