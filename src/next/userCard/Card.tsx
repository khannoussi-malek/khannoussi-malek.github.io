import * as React from 'react';

import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.800')}
    maxWidth="2xl"
    mx="auto"
    p={{ base: '6', md: '8' }}
    rounded={{ sm: 'xl' }}
    shadow={{ md: 'base' }}
    boxShadow={useColorModeValue(
      'lg',
      '0 0 60px 5px #fff,0 0 100px 5px #f0f,0 0 140px 15px #0ff'
    )}
    {...props}
  />
);
