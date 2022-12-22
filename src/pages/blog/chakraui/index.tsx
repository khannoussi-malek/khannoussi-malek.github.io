import React from 'react';

import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Chakraui = () => {
  return (
    <>
      <Head>
        <title>🚀Malek☄️</title>
      </Head>
      <Box minW="100%" minH="100vh" userSelect="none">
        <ParallaxProvider>
          <WithSubnavigation />
          <Stack
            zIndex="2"
            py="40"
            spacing={10}
            px={{ base: '6', md: '12', lg: '20', xl: '44' }}
            bg={useColorModeValue('gray.100', 'gray.700')}
          >
            <Text>
              Chakra UI is an open-source React library that provides a simple
              and flexible foundation for building accessibility-first user
              interfaces. It was developed to help developers build accessible
              and modern applications with ease, and is designed to be
              lightweight, customizable, and easy to use.
            </Text>
            <Text>
              One of the main features of Chakra UI is its comprehensive set of
              accessible and customizable components. These components include
              basic UI elements such as buttons, forms, and layout containers,
              as well as more advanced components such as modals, tabs, and
              carousels. Each component is designed to be fully accessible and
              follows best practices for accessibility, including support for
              screen readers and keyboard navigation.
            </Text>
            <Text>
              In addition to its components, Chakra UI also provides a set of
              utility functions and styles that can be used to customize the
              look and feel of an application. These utilities include things
              like color palettes, typography styles, and spacing functions,
              which can be used to create a consistent design across an
              application.
            </Text>
            <Text>
              To use Chakra UI, you will need to have a basic understanding of
              React and the React ecosystem. You can install Chakra UI using the
              npm package manager, and then import the components and styles
              into your React application.
            </Text>
            <Text>
              There are many resources available for learning Chakra UI,
              including online tutorials, the Chakra UI documentation, and the
              Chakra UI website. The Chakra UI community is also active and
              welcoming, and there are many resources available for getting help
              and support with using the library.
            </Text>
            <Text>
              Overall, Chakra UI is a useful and powerful tool for building
              accessible and modern user interfaces with React. It is
              well-suited for developers who want to build applications that are
              easy to use and accessible to all users, regardless of their
              abilities or devices. Whether you are just starting out with React
              or are an experienced developer looking to improve your skills,
              learning Chakra UI is a great investment in your career.
            </Text>{' '}
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Chakraui;
