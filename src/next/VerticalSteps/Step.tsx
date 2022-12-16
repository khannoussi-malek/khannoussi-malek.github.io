import * as React from 'react';

import {
  BoxProps,
  Divider,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import dayjs from 'dayjs';

import { StepCircle } from './StepCircle';

export interface StepProps {
  title: string;
  subTitle: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}
interface FCStepProps extends BoxProps {
  step: StepProps;
  isCompleted: boolean;
  isCompletedBar: boolean;
  isActive: boolean;
  isLastStep: boolean;
}

export const Step = (props: FCStepProps) => {
  const {
    isActive,
    isCompleted,
    isLastStep,
    isCompletedBar,
    step,
    ...stackProps
  } = props;
  const { title, subTitle, dateStart, dateEnd, description } = step;
  const dateEndDayjs = dateEnd === '' ? dayjs() : dayjs(dateEnd);
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
        <Stack
          p="8"
          pt="2"
          bg={isActive ? bg : 'inherit'}
          borderRadius="lg"
          boxShadow={isActive ? 'lg' : 'inherit'}
          mr={isActive ? '8' : '0'}
        >
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Text
                color="emphasized"
                fontWeight="medium"
                fontSize={isActive ? 'xl' : 'lg'}
              >
                <Text as="span" fontWeight="bold">
                  Company:
                </Text>{' '}
                {title}
              </Text>
              <Text
                color="emphasized"
                fontWeight="medium"
                fontSize={isActive ? 'lg' : 'md'}
              >
                <Text as="span" fontWeight="bold">
                  Function:
                </Text>{' '}
                {subTitle}
              </Text>
            </Stack>
            <Stack flex="0.5">
              <Text>
                Duration: {dateEndDayjs.diff(dayjs(dateStart), 'months')} Months
              </Text>
              <Text>
                {dayjs(dateStart).format('DD/MM/YYYY')} 📅{' '}
                {dateEndDayjs.format('DD/MM/YYYY')}
              </Text>
            </Stack>
          </Stack>
          <Text color="muted" fontSize={isActive ? 'ld' : 'md'}>
            {description}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
