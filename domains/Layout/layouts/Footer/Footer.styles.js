import styled from 'styled-components';

export default styled.div`
  height: 3rem;
  background: ${(props) => props.theme.colors.primary};
  ${(props) => props.theme.boxCenter};
  ${(props) => props.theme.textWhite};
  ${(props) => props.theme.textBold};
  ${(props) => props.theme.textSizeNormal};
`;
