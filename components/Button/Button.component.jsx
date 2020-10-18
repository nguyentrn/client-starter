import StyledButton from './Button.styles';

const Button = ({ fn, label = 'Button', background = 'primary', color = 'white' }) => {
  const handleClick = () => {
    fn();
  };
  return (
    <StyledButton onClick={handleClick} background={background} color={color}>
      {label}
    </StyledButton>
  );
};

export default Button;
