import { css } from 'styled-components';
import colors from './colors';

export default {
  boxShadow: css`
    box-shadow: 0 0.25rem 1.5rem 0 ${colors.black}19;
  `,
  boxShadowDarker: css`
    box-shadow: 0 0.5rem 1.5rem 0 ${colors.black}2c;
  `,
  tranEaseIn: css`
    transition: 0.2s ease-in;
  `,
  borderRadius: css`
    border-radius: 0.5rem;
  `
};
