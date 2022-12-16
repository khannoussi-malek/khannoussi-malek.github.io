import * as React from 'react';

import { Box, Stack, useColorModeValue } from '@chakra-ui/react';

import { Step } from './Step';
import { steps } from './data';
import { useStep } from './useStep';

export const VerticalSteps = () => {
  const [currentStep, { setStep }] = useStep({
    maxStep: steps.length,
    initialStep: 2,
  });
  return (
    <Box
      zIndex="2"
      py="40"
      px={{ base: '6', lg: '12' }}
      bg={useColorModeValue('gray.100', 'gray.700')}
    >
      <Stack spacing="0">
        {steps.map((step, id) => (
          <Step
            key={id}
            cursor="pointer"
            onMouseOver={() => setStep(id)}
            title={step?.title}
            description={step.description}
            isActive={currentStep === id}
            isCompleted={currentStep >= id}
            isCompletedBar={currentStep > id}
            isLastStep={steps.length === id + 1}
          />
        ))}
      </Stack>
    </Box>
  );
};
