import React from 'react';

import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { CodeBlock } from '@/components/CodeBlock';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Javascript = () => {
  return (
    <>
      <Head>
        <title>JavaScript Basics: A Beginner's Guide</title>
        <meta
          name="description"
          content="Learn the fundamentals of JavaScript and get started building interactive, dynamic websites. This beginner's guide covers the basics of JavaScript syntax and concepts."
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
            <Heading as="h1">JavaScript Basics: A Beginner's Guide</Heading>
            <Text as="p">
              JavaScript is a popular programming language that is used to build
              interactive, dynamic websites. It allows developers to add
              features such as animations, form validation, and interactivity to
              websites.
            </Text>
            <Heading as="h2">Getting Started</Heading>
            <Text as="p">
              To get started with JavaScript, you will need a text editor and a
              web browser. There are many text editors available, such as
              Sublime Text or Notepad++. You can use any text editor that you
              are comfortable with.
            </Text>
            <Text as="p">
              To write JavaScript code, you will need to create a new file with
              a .js extension. Then, you can start writing your code using the
              basic JavaScript syntax.
            </Text>
            <Heading as="h2">JavaScript Syntax</Heading>
            <Text as="p">
              JavaScript uses a syntax similar to other programming languages.
              It uses statements, variables, and functions to perform tasks.
              Here is an example of a simple JavaScript statement:
            </Text>
            <CodeBlock>console.log("Hello, World!");</CodeBlock>
            <Text as="p">
              This statement prints the text "Hello, World!" to the console. The
              console is a tool that developers use to see the output of their
              code and to debug any problems that may arise.
            </Text>
            <Heading as="h2">Variables</Heading>
            <Text as="p">
              Variables are used to store data in JavaScript. They are like
              containers that hold a value, such as a number or a string of
              text. Here is an example of how to declare a variable in
              JavaScript:
            </Text>
            <CodeBlock>var name = "John";</CodeBlock>
            <Text as="p">
              In this example, we have declared a variable called "name" and
              assigned it the value "John". We can then use the variable "name"
              in our code to refer to the value "John".
            </Text>
            <Heading as="h2">Functions</Heading>
            <Text as="p">
              Functions are blocks of code that can be called and executed at
              any time. They are often used to perform a specific task or to
              perform a series of tasks. Here is an example of a simple function
              in JavaScript:
            </Text>
            <CodeBlock>
              {`function greet(name) {
      console.log("Hello, " + name + "!");
    }`}
            </CodeBlock>
            <Text as="p">
              This function takes in a parameter called "name" and prints a
              greeting to the console using the value of the parameter. To call
              this function, we can use the following code:
            </Text>
            <CodeBlock>greet("John");</CodeBlock>
            <Text as="p">This will print "Hello, John!" to the console.</Text>
            <Heading as="h2">Conclusion</Heading>
            <Text as="p">
              These are just a few of the basic concepts of JavaScript. There is
              much more to learn, but these are the building blocks that will
              help you get started with the language. With a little practice and
              some determination, you will be on your way to building dynamic,
              interactive websites with JavaScript.
            </Text>
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Javascript;
