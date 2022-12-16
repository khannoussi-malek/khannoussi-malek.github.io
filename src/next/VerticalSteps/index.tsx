import * as React from 'react';

import {
  Box,
  Center,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import dayjs from 'dayjs';

import { Step, StepProps } from './Step';
import { steps } from './data';
import { useStep } from './useStep';

export const VerticalSteps = () => {
  const [currentStep, { setStep }] = useStep({
    maxStep: steps.length,
    initialStep: 2,
  });
  const fullExperience = steps
    ?.map((step) =>
      (step.dateEnd ? dayjs(step.dateEnd) : dayjs()).diff(
        dayjs(step.dateStart),
        'months'
      )
    )
    .reduce((a, b) => a + b, 0);

  return (
    <Box
      zIndex="2"
      py="40"
      px={{ base: '6', lg: '12' }}
      bg={useColorModeValue('gray.100', 'gray.700')}
    >
      <Center>
        <Heading my="12">
          Full experience is {Math.floor(fullExperience / 12)} year and{' '}
          {fullExperience % 12} months
        </Heading>
      </Center>
      <Stack spacing="0">
        {steps.map((step: StepProps, id) => (
          <Step
            key={id}
            step={step}
            cursor="pointer"
            onMouseOver={() => setStep(id)}
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
