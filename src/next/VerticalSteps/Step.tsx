import * as React from 'react';

import {
  Box,
  BoxProps,
  Divider,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { StepCircle } from './StepCircle';

interface StepProps extends BoxProps {
  title: string;
  description: string;
  isCompleted: boolean;
  isCompletedBar: boolean;
  isActive: boolean;
  isLastStep: boolean;
}

export const Step = (props: StepProps) => {
  const {
    isActive,
    isCompleted,
    isLastStep,
    isCompletedBar,
    title,
    description,
    ...stackProps
  } = props;
  const bg = useColorModeValue('gray.50', 'gray.600');
  const borderColor = isLastStep ? 'transparent' : 'inherit';
  return (
    <Stack spacing="4" direction="row" {...stackProps}>
      <Stack spacing="0" align="center">
        <StepCircle isActive={isActive} isCompleted={isCompleted} />
        <Divider
          orientation="vertical"
          borderWidth="1px"
          borderColor={isCompletedBar ? 'accent' : borderColor}
        />
      </Stack>
      <Stack spacing="0.5" pb={isLastStep ? '0' : '8'} w="full">
        <Box
          p="8"
          pt="2"
          bg={isActive ? bg : 'inherit'}
          borderRadius="lg"
          boxShadow={isActive ? 'lg' : 'inherit'}
          mr={isActive ? '8' : '0'}
        >
          <Text
            color="emphasized"
            fontWeight="medium"
            fontSize={isActive ? 'xl' : 'lg'}
          >
            {title}
          </Text>
          <Text color="muted" fontSize={isActive ? 'ld' : 'md'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
};
