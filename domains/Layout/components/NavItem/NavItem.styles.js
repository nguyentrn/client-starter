import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  a {
    ${(props) => props.theme.textWhite};
    ${(props) => props.theme.textBold};
    ${(props) => props.theme.textSizeNormal};
  }

  &:hover {
  }
`;
