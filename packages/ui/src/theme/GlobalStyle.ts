import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    caret-color: ${({ theme }) => theme.colors.primary.main};
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  input {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  button {
    background: none;
    border: none;
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;