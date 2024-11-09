import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;

}
body{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem ;
    font-weight: 400;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-subtitle"]};
}
:focus{
    outline: 0;
    
}

`;
