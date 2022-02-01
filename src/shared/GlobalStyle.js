import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --main: #279eea;
        --gray: #a2a2a2;
        --darkblue: #0c7bc1;
        --white: #ffffff;
    }

    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
  * {
        font-family: 'Jua', sans-serif;
        box-sizing: border-box;
    }

    html {

    }

    body {
        margin: 0;
        padding: 0;
    }

`;

export default GlobalStyle;
