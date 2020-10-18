import StyledBox from './Box.styles';

const Box = ({ children, animate, padding = '0' }) => {
  return (
    <StyledBox animate={animate} padding={padding}>
      {children}
    </StyledBox>
  );
};

export default Box;
