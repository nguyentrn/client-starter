import { useDispatch } from "react-redux";

import Counter from "../components/Counter";
import Button from "../components/Button";
import { increment, decrement, reset } from "../redux/slices/counterSlice";

const IndexPage = () => {
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
    <>
      <Counter />
      <Button fn={handleIncrement} label="Tăng" />
      <Button fn={handleDecrement} label="Giảm" />
      <Button fn={handleReset} label="Reset" />
    </>
  );
};

export default IndexPage;
