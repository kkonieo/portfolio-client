import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --main: #279eea;
    }
    
    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
  * {
        font-family: 'Jua', sans-serif;
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
