import React from 'react';

import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Css = () => {
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
              CSS (Cascading Style Sheets) is a stylesheet language used for
              describing the look and formatting of a document written in HTML
              (Hypertext Markup Language). It is a widely used technology for
              styling web pages, and is a key component of modern web design.
            </Text>
            <Text>
              CSS allows developers to control the appearance of web pages by
              separating the content of a web page from its style. This allows
              developers to make changes to the look of a website without
              altering the underlying content of the website. This separation of
              content and style makes it easier to maintain and update a website
              over time.
            </Text>
            <Text>
              CSS works by applying styles to elements on a web page. These
              styles can be specified in a number of ways, including using
              inline styles, internal styles, and external stylesheets. Inline
              styles are added directly to the HTML element, internal styles are
              placed in the head of the HTML document, and external stylesheets
              are linked to the HTML document using the "link" element.
            </Text>
            <Text>
              There are many different properties that can be used to style an
              element in CSS, including font properties (such as font-family,
              font-size, and font-weight), color properties (such as color and
              background-color), and layout properties (such as width, height,
              and position).
            </Text>
            <Text>
              One of the benefits of using CSS is that it allows developers to
              create reusable styles that can be applied to multiple elements on
              a website. This means that if you want to change the look of all
              the headings on a website, you can do so by changing a single
              style rule in the CSS file, rather than having to go through each
              heading element and make the change individually.
            </Text>
            <Text>
              CSS also allows developers to create responsive designs, which
              means that a website can automatically adjust its layout and
              styling to look good on different devices, such as desktop
              computers, tablets, and smartphones. This is done using media
              queries, which allow developers to specify different styles for
              different screen sizes.
            </Text>
            <Text>
              In addition to styling HTML elements, CSS can also be used to
              style SVG (Scalable Vector Graphics) elements and XML elements.
              This makes it a versatile language that can be used for styling a
              wide range of content on the web.
            </Text>
            <Text>
              There are many resources available for learning CSS, including
              online tutorials, books, and video courses. Some popular resources
              include the CSS section of the W3Schools website, the Mozilla
              Developer Network, and the CSS Tricks website.
            </Text>
            <Text>
              Overall, CSS is an essential part of modern web design and is a
              skill that is valuable for any web developer to have. Whether you
              are just starting out in web development or are an experienced
              developer looking to improve your skills, learning CSS is a great
              investment in your career.
            </Text>{' '}
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Css;
