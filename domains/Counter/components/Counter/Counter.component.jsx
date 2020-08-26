import { useSelector } from "react-redux";

import StyledCounter from "./Counter.styles";
import useColor from "../../hooks/useColor.hook";

const Counter = ({ margin }) => {
  const { value } = useSelector((state) => state.counter);
  const isPositive = useColor(value);

  return (
    <StyledCounter isPositive={isPositive} margin={margin}>
      {value}
    </StyledCounter>
  );
};

export default Counter;
