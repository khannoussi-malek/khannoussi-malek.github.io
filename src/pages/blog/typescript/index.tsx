import React from 'react';

import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Typescript = () => {
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
              TypeScript is a programming language that is a superset of
              JavaScript, meaning that it includes all the features of
              JavaScript and adds additional functionality. It was developed and
              is maintained by Microsoft, and is designed to improve the
              development of large scale applications.
            </Text>
            <Text>
              One of the main benefits of TypeScript is its static typing
              system, which allows developers to specify the data types of
              variables and function arguments. This helps to catch errors
              earlier in the development process and can make code easier to
              understand and maintain.
            </Text>
            <Text>
              TypeScript also includes features such as interfaces, classes, and
              modules, which can help to organize and structure code in a more
              object-oriented way. It also includes features such as decorators,
              which allow developers to add additional behavior to classes and
              methods.
            </Text>
            <Text>
              TypeScript can be used to develop a wide range of applications,
              including web-based applications, mobile apps, and desktop
              applications. It can be used with various frameworks and
              libraries, such as Angular, React, and Vue.js.
            </Text>
            <Text>
              To use TypeScript, you will need a text editor and a compiler.
              There are many text editors available, both free and paid, such as
              Sublime Text, Atom, and Visual Studio Code. The TypeScript
              compiler can be installed using the npm package manager, which is
              included with the Node.js platform.
            </Text>
            <Text>
              There are many resources available for learning TypeScript,
              including online tutorials, books, and video courses. Some popular
              resources include the TypeScript documentation, the TypeScript
              section of the W3Schools website, and the TypeScript in 5 Minutes
              tutorial on the TypeScript website.
            </Text>
            <Text>
              Overall, TypeScript is a powerful and popular programming language
              that is well-suited for developing large scale applications. It
              offers a number of benefits over plain JavaScript, including
              static typing, object-oriented features, and additional
              {/* functionality. Whether you are just starting out in prsogramming or */}
              are an experienced developer looking to improve your skills,
              learning TypeScript is a great investment in your career.
            </Text>{' '}
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Typescript;
