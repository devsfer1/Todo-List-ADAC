import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #242424;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`