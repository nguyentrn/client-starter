import StyledCounterContainer from "./CounterContainer.styles";
import ButtonContainer from "../ButtonContainer";
import Counter from "../../components/Counter";

const CounterContainer = () => {
  return (
    <StyledCounterContainer>
      <Counter />
      <ButtonContainer />
    </StyledCounterContainer>
  );
};

export default CounterContainer;
