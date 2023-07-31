import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root{
      --color-primary: #FF577F;
      --color-primary-focus:#FF427F;
      --color-primary-negative:#59323F;
      --grey-1:#121214;
      --grey-2:#212529;
      --grey-3:#343B41;
      --grey-4:#868E96;
      --grey-5:#F8F9FA;
      --grey-opacity:#12121480;
      --sucess:#3FE864;
      --negative:#E83F5B;
      --white: #FFFFFF;
}

body{
font-family: 'Inter', sans-serif;
background-color: var(--grey-1);
margin: 0;
padding: 0;
box-sizing: border-box;
width: 100vw;
height: 100vh;

.div-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

}

button{
    cursor: pointer;
    border: none;
    background: transparent;
}

a{
    color: unset;
    text-decoration: none;
}

ul, ol, li{
    list-style: none;
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
    font-family: 'Inter', sans-serif;
}



`;
