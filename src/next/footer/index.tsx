import * as React from 'react';

import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

import { Logo } from '@/components/Logo';

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    minW="100%"
    bg="gray.100"
    px={{ base: 1, md: 20 }}
    pt={{ base: '12', md: '16' }}
    pb="4"
  >
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="ghost">
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
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Khannoussi Malek, Inc. All rights
        reserved.
      </Text>
    </Stack>
  </Container>
);
