import { useSelector } from "react-redux";

import StyledCounter from "./Counter.styles";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  return <StyledCounter>{value}</StyledCounter>;
};

export default Counter;
