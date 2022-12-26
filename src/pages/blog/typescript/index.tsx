import React from 'react';

import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { CodeBlock } from '@/components/CodeBlock';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Typescript = () => {
  return (
    <>
      <Head>
        <title>Introduction to TypeScript: A Supercharged JavaScript</title>
        <meta
          name="description"
          content="TypeScript is a popular open-source programming language that extends and enhances JavaScript. In this blog post, we'll cover the basics of TypeScript and show some examples of how it can be used."
        />
        <meta
          name="keywords"
          content="TypeScript, JavaScript, programming language, open-source, examples"
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
              Introduction to TypeScript: A Supercharged JavaScript
            </Heading>
            <Text as="p">
              Are you tired of dealing with the quirks and inconsistencies of
              JavaScript? If so, you might want to give TypeScript a try.
              TypeScript is a popular open-source programming language that
              extends and enhances JavaScript, making it easier to write and
              maintain large, complex codebases.
            </Text>
            <Heading as="h2">What is TypeScript?</Heading>
            <Text as="p">
              TypeScript is a strict syntactical superset of JavaScript, meaning
              that any valid JavaScript code is also valid TypeScript code.
              However, TypeScript adds features that are not found in
              JavaScript, such as static typing and class-based object-oriented
              programming.
            </Text>
            <Text as="p">
              One of the main benefits of TypeScript is that it helps catch
              errors early in the development process, thanks to its static
              typing system. This can save time and reduce frustration by
              alerting you to potential issues before you even run your code.
            </Text>
            <Heading as="h2">Examples of TypeScript</Heading>
            <Text as="p">
              To give you a sense of how TypeScript works, here are a few
              examples of some of its key features:
            </Text>
            <Heading as="h3">Static Typing</Heading>
            <Text as="p">
              With TypeScript, you can specify the type of a variable when you
              declare it. For example:
            </Text>
            <CodeBlock>
              const name: string = 'John'; const age: number = 30;
            </CodeBlock>
            <Text as="p">
              In this code, we've declared a variable called "name" with the
              type "string" and a variable called "age" with the type "number".
              If we tried to assign a non-string value to the "name" variable or
              a non-number value to the "age" variable, TypeScript would give us
              an error.
            </Text>
            <Heading as="h3">Classes</Heading>
            <Text as="p">
              TypeScript supports class-based object-oriented programming, just
              like many other programming languages. Here's an example of how to
              define a simple class in TypeScript:
            </Text>
            <CodeBlock>
              {`class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
    }
  }`}
            </CodeBlock>
            <Text as="p">
              In this code, we've defined a class called "Person" with two
              properties: "name" and "age". We've also defined a constructor
              function that allows us to create new instances of the "Person"
              class, and a "greet" method that logs a greeting to the console.
            </Text>
            <Heading as="h3">Interfaces</Heading>
            <Text as="p">
              TypeScript also supports the use of interfaces, which allow you to
              define a contract for the shape of an object. For example:
            </Text>
            <CodeBlock>
              {`interface Employee {
    name: string;
    salary: number;
  }
  function displayEmployee(employee: Employee) {
    console.log(\`Name: \${employee.name}\`);
    console.log(\`Salary: \${employee.salary}\`);
  }
  const john: Employee = { name: 'John', salary: 40000 };
  displayEmployee(john);`}
            </CodeBlock>
            <Text as="p">
              In this code, we've defined an interface called "Employee" that
              specifies that an employee must have a "name" property of type
              "string" and a "salary" property of type "number". We've also
              defined a function called "displayEmployee" that takes an
              "Employee" object as an argument and logs its name and salary to
              the console. When we call the function with an "Employee" object,
              TypeScript checks that the object has the required properties and
              allows the code to run.
            </Text>
            <Heading as="h2">Conclusion</Heading>
            <Text as="p">
              TypeScript is a powerful and popular programming language that
              adds many useful features to JavaScript. Whether you're a seasoned
              developer or a beginner, learning TypeScript can help you write
              more reliable, maintainable code. Give it a try and see how it can
              improve your workflow!
            </Text>
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Typescript;
