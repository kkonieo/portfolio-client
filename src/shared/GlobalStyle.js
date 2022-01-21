import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --main: blue;
    }
    
    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'); */
  * {
        /* font-family: 'Montserrat'; */
        box-sizing: border-box;
        /* font-family: 'Cedarville Cursive', cursive;
        letter-spacing: -0.015em; */
    }
    
    html {

    }
    
    body {
        margin: 0;
        padding: 0;
	}

`;

export default GlobalStyle;
