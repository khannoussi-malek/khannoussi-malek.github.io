import { Code, CodeProps } from '@chakra-ui/react';

export const CodeBlock = (props: CodeProps) => (
  <Code
    colorScheme="blue"
    p={10}
    fontWeight="bold"
    fontFamily="arial"
    bg="gray.800"
    lineHeight="1.5"
    borderRadius="lg"
    color="gray.50"
    boxShadow="lg"
    {...props}
    as="pre"
  />
);
