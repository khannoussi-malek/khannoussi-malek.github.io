import { useEffect } from 'react';

import {
  Box,
  Button,
  CloseButton,
  Collapse,
  Icon,
  IconButton,
  Link,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';

export const Banner = () => {
  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    onToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      mt="20"
      bg="bg-accent"
      color="on-accent"
      px={isOpen ? { base: '4', md: '3' } : { base: 0 }}
      py={isOpen ? { base: '4', md: '2.5' } : { base: 0 }}
      position="relative"
      borderRadius="xl"
    >
      <Collapse in={isOpen} animateOpacity>
        <CloseButton
          display={{ md: 'none' }}
          position="absolute"
          right="2"
          top="2"
          onClick={onToggle}
        />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          spacing={{ base: '3', md: '2' }}
        >
          <Stack
            spacing="4"
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'start', md: 'center' }}
            alignItems={{ base: 'center', md: 'center' }}
          >
            {!isMobile && (
              <Square size="12" bg="bg-accent-subtle" borderRadius="md">
                <Icon as={MdOutlineConnectWithoutContact} boxSize="6" />
              </Square>
            )}
            <Stack spacing="0.5" pe={{ base: '4', md: '0' }}>
              <Text fontWeight="medium">what are you waiting for </Text>
              <Text color="on-accent-muted">
                <Link>contact me</Link>
              </Text>
            </Stack>
            {isMobile && (
              <Square size="12" bg="bg-accent-subtle" borderRadius="md">
                <Icon as={MdOutlineConnectWithoutContact} boxSize="6" />
              </Square>
            )}
          </Stack>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: '3', md: '2' }}
            align={{ base: 'stretch', md: 'center' }}
          >
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/malek-khannoussi-54726116b/"
              aria-label="LinkedIn"
              target="_blank"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/khannoussi-malek"
              aria-label="GitHub"
              target="_blank"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://www.facebook.com/malek.mikoooo/"
              target="_blank"
              aria-label="Facebook"
              icon={<FaFacebookF fontSize="1.25rem" />}
            />
            <CloseButton
              display={{ base: 'none', md: 'inline-flex' }}
              onClick={onToggle}
            />
          </Stack>
        </Stack>
      </Collapse>
    </Box>
  );
};
