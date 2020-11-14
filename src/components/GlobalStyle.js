import { createGlobalStyle } from "styled-components";

// font-family: 'Abril Fatface', cursive;
// font-family: 'Montserrat', sans-serif;

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box
}

html{
    &::-webkit-scrollbar{
        width:0.3rem;
    }
    &::-webkit-scrollbar-thumb {
    background: indianred;
    }
    &::-webkit-scrollbar-track {
    background: grey;
    }
}
body{
font-family: 'Montserrat', sans-serif;
width:100%;
}
h2{
    font-size:2rem;
    font-family: 'Abril Fatface', cursive;
    font-weight:lighter;
}
h3{
    font-size:1.1rem;
    color:#333;
    padding:1.5rem 0rem;
}
p{
    font-size:1rem;
    line-height:200%;
    color:#696969;
}
a{
    text-decoration:none;
    color:#333;

}
`;

export default GlobalStyles;
