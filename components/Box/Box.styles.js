import styled, { css } from 'styled-components';

const hover = css`
  transition: 0.3s ease-out;
  &:hover {
    transform: translateY(-0.2rem);
    ${(props) => props.theme.boxShadowDarker};
  }
`;

export default styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.padding};
  overflow: hidden;
  ${(props) => props.theme.borderRadius};
  ${(props) => props.theme.boxShadow};
  ${(props) => (props.animate ? hover : '')};
`;
