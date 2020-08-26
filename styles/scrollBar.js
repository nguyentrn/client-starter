import { css } from "styled-components";
import colors from "./colors";

const scrollBarCommon = css`
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar {
    border-radius: 10px;
    max-width: 0.4rem;
    max-height: 6rem;
    background-color: rgba(255, 255, 255, 0);
  }
`;

export const scrollBarDark = css`
  ${scrollBarCommon};

  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.primary}aa;
  }
`;

const scrollBar = css`
  ${scrollBarCommon};

  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.white}cc;
  }
`;

export default scrollBar;
