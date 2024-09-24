import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* VARS */
  :root{
    --font-stack-1: 'Pacifico', cursive;
    --font-stack-2: 'Annie Use Your Telescope', cursive;
    --white: #ffffff;
    --black: #000000;
    --purple: #9741FA;
  }

  /* RESETS */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* border: 1px solid red; */
    /* overflow-x: hidden; */
  }

  body{
    background-image: linear-gradient(to bottom, #370534, #5c065b, #830587, #aa08b7, #d112eb);
    height: fit-content;
  }
`;
