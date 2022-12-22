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
              React Native is a framework for building native mobile
              applications using JavaScript and the React library. It was
              developed by Facebook and is now maintained by a community of
              developers. React Native allows developers to build native mobile
              apps for iOS and Android using a single codebase, which can save
              time and resources compared to building separate apps for each
              platform.
            </Text>
            <Text>
              One of the main benefits of using React Native is that it allows
              developers to leverage their existing knowledge of JavaScript and
              the React library to build native mobile apps. This can make it
              easier for developers to learn and use React Native, especially if
              they are already familiar with these technologies.
            </Text>
            <Text>
              React Native utilizes a virtual DOM (Document Object Model)
              similar to that used in React, which allows for efficient updates
              to the native UI components. This means that instead of updating
              the entire UI whenever there is a change, React Native only
              updates the specific components that have been modified. This
              helps to improve the performance of apps built with React Native.
            </Text>
            <Text>
              In addition to its performance benefits, React Native also offers
              a strong developer experience. It has a simple syntax and a
              well-documented API, which makes it easier for developers to learn
              and use. It also has a large and active community of developers
              who contribute to the development of the framework and provide
              support to users.
            </Text>
            <Text>
              React Native is often used for building native mobile apps for
              both iOS and Android. It is a popular choice among developers due
              to its flexibility and performance benefits. In addition, React
              Native is designed to be easily integrated with native APIs and
              features, which makes it a versatile tool that can be used to
              build a wide range of mobile apps.
            </Text>
            <Text>
              One of the key features of React Native is its support for
              components. Components are self-contained units of code that
              represent a specific part of an app's UI. They can be easily
              reused and shared across different parts of an app, which makes it
              easier to develop and maintain complex UIs.
            </Text>
            <Text>
              React Native also makes it easy to manage state within an app.
              State refers to the data that is used to render a component and
              can include things like user input, API responses, and
              app-specific data. React Native provides a set of tools for
              managing state that make it easier to build and maintain complex
              apps.
            </Text>
            <Text>
              In terms of the future of React Native, it is likely that it will
              continue to be a popular choice for developing native mobile apps.
              As the use of mobile apps continues to grow, it is expected that
              React Native will play a key role in the development of a wide
              range of mobile apps across different platforms.
            </Text>
            <Text>
              Overall, React Native is a powerful and popular framework for
              building native mobile apps that offers a range of benefits to
              developers. It allows for the development of native mobile apps
              using a single codebase, has a simple syntax and well-documented
              API, and has a strong developer experience. With a large and
              active community of developers supporting its growth and
              development, it is likely that React Native will continue to be a
              key player in the world of mobile app development in the coming
              years.
            </Text>
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Me;
