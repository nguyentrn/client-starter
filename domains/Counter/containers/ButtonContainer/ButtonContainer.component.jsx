import { useDispatch } from "react-redux";

import StyledButtonContainer from "./ButtonContainer.styles";
import Button from "../../components/Button";
import {
  increment,
  decrement,
  reset,
} from "../../../../redux/slices/counterSlice";

const ButtonContainer = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <StyledButtonContainer>
      <Button fn={handleIncrement} label="Tăng" />
      <Button fn={handleDecrement} label="Giảm" />
      <Button fn={handleReset} label="Reset" />
    </StyledButtonContainer>
  );
};

export default ButtonContainer;
