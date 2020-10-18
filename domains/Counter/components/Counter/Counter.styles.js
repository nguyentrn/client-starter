import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  font-size: 3rem;
  font-weight: 300;
  color: ${(props) => (props.isPositive ? props.theme.colors.green : props.theme.colors.red)};
  border: 0.2rem solid
    ${(props) => (props.isPositive ? props.theme.colors.green : props.theme.colors.red)};
  border-radius: 50%;
`;
