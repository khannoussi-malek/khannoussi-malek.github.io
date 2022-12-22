import React from 'react';

import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Html = () => {
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
              HTML, or Hypertext Markup Language, is the standard markup
              language for creating web pages. It is used to structure and
              format the content of a website, including text, images, and other
              multimedia elements. HTML is a crucial part of the web development
              process and is used to create the structure and layout of a
              website.
            </Text>

            <Text>
              HTML consists of a series of elements that are used to define the
              content and structure of a webpage. These elements are represented
              by tags, which are enclosed in angle brackets. For example, the{' '}
              {'<p>'} tag is used to define a paragraph, while the {'<img>'} tag
              is used to insert an image.
            </Text>
            <Text>
              HTML also allows for the creation of hyperlinks, which allow users
              to navigate between different webpages. Hyperlinks are created
              using the {'<a>'} tag and are typically displayed as text or
              images. When a user clicks on a hyperlink, they are taken to the
              webpage that the link is pointing to.
            </Text>
            <Text>
              In addition to text and images, HTML can also be used to embed
              multimedia elements such as videos and audio files. This allows
              for the creation of interactive and engaging websites that can
              offer a rich user experience.
            </Text>
            <Text>
              HTML is a crucial part of the web development process and is used
              to create the structure and layout of a website. It is important
              for web developers to have a strong understanding of HTML in order
              to create effective and well-structured websites.
            </Text>
            <Text>
              HTML is constantly evolving, and new versions are released
              periodically to improve the capabilities of the language. The
              current version of HTML is HTML5, which was released in 2014 and
              introduced a number of new features and capabilities.
            </Text>
            <Text>
              One of the main benefits of HTML is that it is widely supported by
              web browsers, which means that websites created with HTML can be
              accessed by a wide range of users. In addition, HTML is a
              relatively simple language to learn, which makes it accessible to
              developers of all skill levels.
            </Text>
            <Text>
              In terms of the future of HTML, it is likely that it will continue
              to be a crucial part of the web development process. As the web
              continues to evolve and new technologies are introduced, HTML will
              likely continue to be updated and improved to meet the needs of
              developers and users.
            </Text>
            <Text>
              Overall, HTML is a fundamental part of the web development process
              and is used to create the structure and layout of a website. It is
              a widely supported and easy-to-learn language that allows
              developers to create engaging and interactive websites. As the web
              continues to evolve, HTML is likely to play a key role in the
              development of a wide range of websites.
            </Text>
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Html;
