import React from 'react';

import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Javascript = () => {
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
              JavaScript is a programming language that is commonly used in web
              development to add interactivity and dynamic behavior to websites.
              It is a client-side language, which means that it is executed by
              the user's web browser rather than a server.
            </Text>
            <Text>
              JavaScript is often used in conjunction with HTML and CSS to
              create interactive and animated web pages. It can be used to
              perform a wide range of tasks, such as validating form input,
              creating cookies, and controlling multimedia elements such as
              audio and video.
            </Text>
            <Text>
              One of the key features of JavaScript is its ability to manipulate
              the Document Object Model (DOM). The DOM is a tree-like structure
              that represents the HTML elements on a web page as objects.
              JavaScript can be used to access and modify these objects,
              allowing developers to change the content, style, and layout of a
              web page in real-time.
            </Text>
            <Text>
              JavaScript is a versatile language that can be used to build a
              wide range of applications, including web-based applications,
              mobile apps, and desktop applications. It is also used in
              server-side programming, using platforms such as Node.js.
            </Text>
            <Text>
              To use JavaScript, you will need a text editor and a web browser.
              There are many text editors available, both free and paid, such as
              Sublime Text, Atom, and Visual Studio Code. To test your
              JavaScript code, you can use any modern web browser, such as
              Google Chrome, Mozilla Firefox, or Microsoft Edge.
            </Text>
            <Text>
              There are many resources available for learning JavaScript,
              including online tutorials, books, and video courses. Some popular
              resources include the JavaScript section of the W3Schools website,
              the Mozilla Developer Network, and the Codecademy website.
            </Text>
            <Text>
              Overall, JavaScript is an essential language for web development
              and is a valuable skill to have in today's tech industry. Whether
              you are just starting out in programming or are an experienced
              developer looking to improve your skills, learning JavaScript is a
              great investment in your career.
            </Text>{' '}
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Javascript;
