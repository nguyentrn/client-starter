import { createGlobalStyle } from 'styled-components';

import styles from './styles';
import colors from './colors';
import devices from './devices';
import scrollBar from './scrollBar';

export const theme = {
  colors,
  devices,
  scrollBar,
  ...styles
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans JP', sans-serif;
    margin: 0;
  }

  *,h1,h2,h3,h4,h5,h6 {
    color: ${colors.dark};
  }
  
  ul {
    list-style:none;
  }

  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    
    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
