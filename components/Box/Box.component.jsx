import StyledBox from './Box.styles';

const Box = ({ children, animate, padding = '1rem' }) => {
  return (
    <StyledBox animate={animate} padding={padding}>
      {children}
    </StyledBox>
  );
};

export default Box;
