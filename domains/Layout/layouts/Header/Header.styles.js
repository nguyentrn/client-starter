import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.boxShadow};
  z-index: 1;
`;
