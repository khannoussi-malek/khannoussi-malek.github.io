import React from 'react';

import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { CodeBlock } from '@/components/CodeBlock';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Css = () => {
  return (
    <>
      <Head>
        <title>🚀Malek☄️</title>
        <meta
          name="keywords"
          content="CSS, web design, HTML, responsive design, media queries, web development, text editor, web browser, resources"
        />
        <meta
          name="description"
          content="Learn the basics of CSS, a stylesheet language used for describing the look and formatting of a document written in HTML. Discover the many properties and techniques available in CSS for styling web pages, including font properties, color properties, layout properties, and media queries. Find resources for learning more about this essential web development skill."
        />
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
            <Heading as="h1">
              Introduction to CSS: Adding Style to Your Webpages
            </Heading>
            <Text as="p">
              CSS, or Cascading Style Sheets, is a stylesheet language used for
              describing the look and formatting of a document written in HTML.
              CSS allows you to control the appearance and formatting of your
              webpages, including colors, fonts, layouts, and more.
            </Text>
            <Text as="p">
              Using CSS can help make your website more visually appealing and
              easy to use for your visitors. It is an important tool for web
              design and development, and it can also improve the search engine
              optimization (SEO) of your site. Search engines use the structure
              and formatting of your pages to determine their relevance and
              quality, so using CSS effectively can help improve your website's
              ranking in search results.
            </Text>
            <Heading as="h2">Tips for Using CSS to Improve SEO</Heading>
            <ul>
              <li>
                Use descriptive, relevant titles and headings: Use clear and
                concise headings to describe the content of your pages, and
                include relevant keywords. This will help search engines
                understand the content of your pages and improve their ranking.
              </li>
              <li>
                Use semantic HTML tags: HTML tags, such as{' '}
                <CodeBlock p="1">
                  <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, and{' '}
                  <code>&lt;article&gt;</code>
                </CodeBlock>{' '}
                give structure to your content and help search engines
                understand the hierarchy and meaning of your content.
              </li>
              <li>
                Keep your CSS files small and organized: Large CSS files can
                slow down your website, which can hurt your SEO. Use efficient,
                organized code and minimize the number of external CSS files you
                use.
              </li>
              <li>
                Include internal and external links: Linking to other pages on
                your own website and to relevant external resources can help
                improve the credibility and authority of your site in the eyes
                of search engines.
              </li>
              <li>
                Use alt text for images: Alt text is a description of an image
                that is displayed when the image is not able to be displayed. It
                is important for SEO because search engines use it to understand
                the content of the image and how it relates to the rest of the
                page.
              </li>
            </ul>
            <Heading as="h2">Basic Examples of CSS</Heading>
            <CodeBlock>
              {`/* This is a comment in CSS */

/* Set the font family for the body element */
body {
  font-family: Arial, sans-serif;
}

/* Set the background color and font color for the h1 element */
h1 {
  background-color: blue;
  color: white;
}

/* Set the width and height of the div element */
div {
  width: 500px;
  height: 300px;
}`}
            </CodeBlock>
            <Text as="p">
              As you can see, CSS consists of rules that consist of a selector
              (such as <code>body</code> or <code>h1</code>) and a declaration
              block (enclosed in curly braces). The declaration block contains
              one or more declarations, each consisting of a property (such as{' '}
              <code>font-family</code> or <code>background-color</code>) and a
              value (such as <code>Arial, sans-serif</code> or <code>blue</code>
              ).
            </Text>
            <Text as="p">
              There are many more properties and values that you can use in CSS
              to control the appearance of your webpages. To learn more, check
              out the resources below:
            </Text>
            <ul>
              <li>
                <a href="https://www.w3schools.com/css/css_intro.asp">
                  CSS Basics
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">
                  CSS Reference
                </a>
              </li>
            </ul>
            <Text as="p">
              I hope this introduction to CSS has been helpful! By using CSS,
              you can add style and improve the SEO of your webpages.
            </Text>
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Css;
