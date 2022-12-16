import { Circle, Icon, SquareProps, useColorModeValue } from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

interface RadioCircleProps extends SquareProps {
  isCompleted: boolean;
  isActive: boolean;
}

export const StepCircle = (props: RadioCircleProps) => {
  const { isCompleted, isActive } = props;
  const bg = useColorModeValue('blue.50', 'blue.800');
  const boxShadow = useColorModeValue(
    'md',
    '0 0 60px 5px #fff,0 0 100px 5px #f0f,0 0 140px 15px #0ff'
  );

  return (
    <Circle
      size="8"
      bg={isCompleted ? 'blue.600' : bg}
      borderWidth={isCompleted ? '0' : '2px'}
      borderColor={isActive ? 'accent' : 'inherit'}
      color={isCompleted ? 'white' : 'balck'}
      boxShadow={isCompleted ? boxShadow : 'lg'}
      {...props}
    >
      {isCompleted ? (
        <Icon as={HiCheck} color="inverted" boxSize="5" />
      ) : (
        <Circle bg={isActive ? 'accent' : 'border'} size="3" />
      )}
    </Circle>
  );
};
