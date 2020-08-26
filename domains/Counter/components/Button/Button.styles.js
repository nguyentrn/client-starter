import styled from "styled-components";

export default styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 10%;

  padding: 0.5rem;
`;
