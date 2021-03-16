import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
    :root{
        --windowBg: #333;
        --primaryFontGrey: #dedede;
        --btnBg: #111;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    body {
        background-image: url("/images/bg.jpg");
        color: var(--primaryFontGrey);
        font-family: 'Lato', sans-serif;    
    }
`
