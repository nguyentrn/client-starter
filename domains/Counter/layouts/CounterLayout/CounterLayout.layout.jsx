import StyledCounterLayout from './CounterLayout.styles';
import ButtonContainer from '../../containers/ButtonContainer';
import Counter from '../../components/Counter';
import Box from '../../../../components/Box';

const CounterLayout = () => {
  return (
    <Box animate>
      <StyledCounterLayout>
        <Counter />
        <ButtonContainer />
      </StyledCounterLayout>
    </Box>
  );
};

export default CounterLayout;
