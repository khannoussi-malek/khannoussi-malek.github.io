import React from 'react';

import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { CodeBlock } from '@/components/CodeBlock';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Html = () => {
  return (
    <>
      <Head>
        <title>An In-Depth Introduction to HTML</title>
        <meta
          name="description"
          content="Learn the ins and outs of HTML, the building blocks of the web."
        />
        <meta name="keywords" content="HTML, web development, coding" />
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
            <Heading as="h1">An In-Depth Introduction to HTML</Heading>
            <Text as="p">
              HTML (HyperText Markup Language) is the standard markup language
              for creating web pages. It's used to structure and format content
              on the web, and is the foundation of all web development. If you
              want to build websites, it's essential to have a solid
              understanding of HTML.
            </Text>
            <Heading as="h2">The Basics of HTML</Heading>
            <Text as="p">
              HTML is made up of elements, which are represented by tags. These
              tags are used to structure and format the content of a web page.
              For example, the <strong>&lt;h1&gt;</strong> tag is used to create
              a top-level heading, while the <strong>&lt;p&gt;</strong> tag is
              used to create a paragraph of text.
            </Text>
            <Text as="p">Here's a simple example of some HTML code:</Text>
            <CodeBlock>
              &lt;h1&gt;Welcome to My Website&lt;/h1&gt; &lt;p&gt;This is my
              personal website, where I share my thoughts and
              interests.&lt;/p&gt;
            </CodeBlock>
            <Text as="p">
              In this example, the <strong>&lt;h1&gt;</strong> tag is used to
              create a heading, and the <strong>&lt;p&gt;</strong> tag is used
              to create a paragraph of text. When this code is rendered in a web
              browser, it will look like this:
            </Text>
            <Heading as="h1">Welcome to My Website</Heading>
            <Text as="p">
              This is my personal website, where I share my thoughts and
              interests.
            </Text>
            <Text as="p">
              There are many different types of HTML tags, each with its own
              specific purpose. Some common tags include:
            </Text>
            <ul>
              <li>
                <strong>&lt;a&gt;</strong>: used to create a hyperlink to
                another web page or a specific location on the same page
              </li>
              <li>
                <strong>&lt;img&gt;</strong>: used to insert an image into a
                page
              </li>
              <li>
                <strong>&lt;form&gt;</strong>: used to create a form for user
                input
              </li>
              <li>
                <strong>&lt;table&gt;</strong>: used to create a table of data
              </li>
            </ul>
            <Text as="p">
              In addition to these basic tags, HTML also includes a number of
              attributes that can be used to provide additional information
              about an element. For example, the <strong>src</strong> attribute
              is used to specify the source of an image in an{' '}
              <strong>&lt;img&gt;</strong> tag, like this:
            </Text>
            <CodeBlock>
              &lt;img src="image.jpg" alt="A description of the image"&gt;
            </CodeBlock>
            <Text as="p">
              The <strong>alt</strong>
            </Text>
            <Text as="p">
              The <strong>alt</strong> attribute specifies alternative text to
              be displayed if the image is unable to be displayed for any
              reason. This is important for accessibility and also for search
              engine optimization (SEO), as search engines use this text to
              understand the content of the image.
            </Text>
            <Heading as="h2">HTML5</Heading>
            <Text as="p">
              HTML5 is the latest version of HTML, and it introduces a number of
              new elements and features. Some of the notable features of HTML5
              include:
            </Text>
            <ul>
              <li>
                Improved support for multimedia, including the ability to play
                audio and video natively in the browser
              </li>
              <li>
                New semantic elements, such as <strong>&lt;header&gt;</strong>,{' '}
                <strong>&lt;footer&gt;</strong>, and{' '}
                <strong>&lt;article&gt;</strong>, which make it easier to
                structure and organize content
              </li>
              <li>
                Improved support for web graphics, with the addition of the{' '}
                <strong>&lt;canvas&gt;</strong> element and SVG (Scalable Vector
                Graphics) support
              </li>
              <li>
                Offline storage capabilities, which allow web apps to work
                offline or in low-connectivity environments
              </li>
            </ul>
            <Text as="p">
              HTML5 is the future of the web, and it's important for web
              developers to have a strong understanding of its capabilities and
              features.
            </Text>
            <Heading as="h2">Resources for Learning HTML</Heading>
            <Text as="p">
              There are many resources available for learning HTML, including
              online tutorials, books, and video courses. Some popular resources
              include:
            </Text>
            <ul>
              <li>
                <a href="https://www.w3schools.com/html/">
                  W3Schools HTML Tutorial
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                  Mozilla Developer Network HTML Guide
                </a>
              </li>
              <li>
                <a href="https://www.codecademy.com/learn/learn-html">
                  Codecademy HTML Course
                </a>
              </li>
            </ul>
            <Text as="p">
              By learning HTML, you'll be well on your way to becoming a web
              developer and building your own websites.
            </Text>
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Html;
