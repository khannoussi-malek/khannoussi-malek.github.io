import * as React from 'react';

import { Flex, FlexProps, Heading } from '@chakra-ui/react';

interface CardHeaderProps extends FlexProps {
  title: string;
  action: React.ReactNode;
}

export const CardHeader = (props: CardHeaderProps) => {
  const { title, action, ...flexProps } = props;
  return (
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
  );
};
