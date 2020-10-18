import styled from 'styled-components';

export default styled.button`
  display: flex;
  cursor: pointer;
  border-radius: 0.3rem;
  background: ${(props) => props.theme.colors[props.background]};
  color: ${(props) => props.theme.colors[props.color]};
  padding: 0.7rem 1.8rem;
  ${(props) => props.theme.boxShadow};
  ${(props) => props.theme.tranEaseIn};

  &:hover {
    ${(props) => props.theme.boxShadowDarker};
  }
`;
