import * as React from 'react';

import {
  Badge,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

import { Logo } from '@/components/Logo';

import { skills } from '../Skills';

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    minW="100%"
    bg={useColorModeValue('gray.100', 'gray.700')}
    px={{ base: 1, md: 20 }}
    pt={{ base: '20', md: '16' }}
    pb="4"
  >
    <Stack spacing={{ base: '4', md: '5' }} py={{ base: '12', md: '8' }}>
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
      <Stack spacing="4" wrap="wrap" direction="row">
        {skills?.map((value, index) => (
          <Badge
            colorScheme="purple"
            key={index}
            as={Link}
            rel="preload"
            href={value.href || ''}
          >
            {value.text}
          </Badge>
        ))}
      </Stack>
    </Stack>
  </Container>
);
