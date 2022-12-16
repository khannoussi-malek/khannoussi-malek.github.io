import * as React from 'react';

import {
  Flex,
  FlexProps,
  Heading,
  IconButton,
  Stack,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { Icon as CIcon } from '@/components/Icons';

interface CardHeaderProps extends FlexProps {
  title: string;
  action: React.ReactNode;
}

export const CardHeader = (props: CardHeaderProps) => {
  const { title, action, ...flexProps } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack justifyContent="space-between" direction="row">
      <Flex justifyContent="space-between" alignItems="center" {...flexProps}>
        <Heading
          size="md"
          fontWeight="extrabold"
          letterSpacing="tight"
          marginEnd="6"
        >
          {title}
        </Heading>
        {action}
      </Flex>
      <Tooltip label={colorMode === 'dark' ? 'Make it 🌅' : "Let's see 🌠"}>
        <IconButton
          aria-label="dark mode"
          icon={
            <CIcon
              icon={colorMode === 'dark' ? FiSun : FiMoon}
              fontSize="lg"
              color="gray.400"
            />
          }
          onClick={() => toggleColorMode()}
        />
      </Tooltip>
    </Stack>
  );
};
