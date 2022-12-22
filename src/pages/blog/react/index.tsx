import React from 'react';

import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Me = () => {
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
              React is a JavaScript library for building user interfaces. It was
              developed by Facebook and is now maintained by a community of
              developers. React allows developers to create reusable components
              that can be easily shared and used across different parts of an
              application.
            </Text>
            <Text>
              One of the main benefits of using React is that it utilizes a
              virtual DOM (Document Object Model) which allows for efficient
              updates to the actual DOM. This means that instead of updating the
              entire DOM whenever there is a change, React only updates the
              specific components that have been modified. This helps to improve
              the performance of applications built with React.
            </Text>
            <Text>
              React follows a declarative programming style, which means that
              developers specify what they want their application to do, and
              React takes care of the implementation details. This can make it
              easier for developers to focus on the logic of their application
              rather than getting bogged down in the low-level details of the
              DOM.
            </Text>
            <Text>
              In addition to its performance benefits, React also offers a
              strong developer experience. It has a simple syntax and a
              well-documented API, which makes it easier for developers to learn
              and use. It also has a large and active community of developers
              who contribute to the development of the library and provide
              support to users.
            </Text>
            <Text>
              React is often used for building single-page applications and
              mobile applications. It is a popular choice among developers due
              to its flexibility and performance benefits. In addition, React is
              designed to be easily integrated with other libraries and
              frameworks, which makes it a versatile tool that can be used in a
              variety of different contexts.
            </Text>
            <Text>
              One of the key features of React is its support for components.
              Components are self-contained units of code that represent a
              specific part of an application's UI. They can be easily reused
              and shared across different parts of an application, which makes
              it easier to develop and maintain complex UIs.
            </Text>
            <Text>
              React also makes it easy to manage state within an application.
              State refers to the data that is used to render a component and
              can include things like user input, API responses, and
              application-specific data. React provides a set of tools for
              managing state that make it easier to build and maintain complex
              applications.
            </Text>
            <Text>
              In terms of the future of React, it is likely that it will
              continue to be a popular choice for developing web and mobile
              applications. In addition, the use of React in the development of
              progressive web applications (PWAs) is expected to increase, as
              PWAs are designed to offer a native app-like experience in the web
              browser. As the use of PWAs grows, it is likely that React will
              play a key role in their development.
            </Text>
            <Text>
              Overall, React is a powerful and popular tool for building user
              interfaces that offers a range of benefits to developers. It has a
              simple syntax, efficient updates to the DOM, and a strong
              developer experience, which make it an attractive choice for
              building web and mobile applications. With a large and active
              community of developers supporting its growth and development, it
              is likely that React will continue to be a key player in the world
              of web and mobile development in the coming years.
            </Text>{' '}
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Me;
