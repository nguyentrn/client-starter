import StyledButton from "./Button.styles";

const Button = ({ fn, label }) => {
  const handleClick = () => {
    fn();
  };
  return <StyledButton onClick={handleClick}>{label}</StyledButton>;
};

export default Button;
