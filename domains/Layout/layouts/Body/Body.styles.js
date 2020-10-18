import styled from 'styled-components';

export default styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.background};
  min-height: calc(100vh - 6rem);
`;
