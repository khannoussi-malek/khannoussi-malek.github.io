import React from 'react';

import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { CodeBlock } from '@/components/CodeBlock';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Php = () => {
  return (
    <>
      <Head>
        <title>A Beginner's Guide to PHP</title>
        <meta
          name="description"
          content="Learn the basics of PHP, a popular server-side scripting language used for web development. This guide includes examples of how to use PHP for common tasks such as displaying dynamic content, storing and retrieving data from a database, and processing form submissions."
        />
        <meta
          name="keywords"
          content="PHP, server-side, scripting language, web development, dynamic content, database, form submissions"
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
            <Heading as="h1">A Beginner's Guide to PHP</Heading>
            <Text as="p">
              PHP is a popular server-side scripting language used for web
              development. If you're new to PHP, this guide will help you get
              started with the basics. We'll cover common tasks such as
              displaying dynamic content, storing and retrieving data from a
              database, and processing form submissions.
            </Text>
            <Heading as="h2">Hello World Example</Heading>
            <Text as="p">
              Here is a simple example of how to use PHP to output the text
              "Hello World" to a web page:
            </Text>
            <CodeBlock>
              {`<?php
  echo "Hello World";
?>`}
            </CodeBlock>
            <Text as="p">
              In PHP, code is enclosed in opening and closing tags. The opening
              tag is <code>&lt;?php</code>, and the closing tag is{' '}
              <code>?&gt;</code>. The <code>echo</code> statement is used to
              output a string to the web page. When this code is executed, it
              will display the text "Hello World" on the page.
            </Text>
            <Heading as="h2">Variables</Heading>
            <Text as="p">
              PHP supports a variety of data types, including strings, integers,
              floats, and booleans. Variables in PHP are denoted by a dollar
              sign ($) followed by the variable name. Here are some examples of
              declaring variables in PHP:
            </Text>
            <CodeBlock>
              {`$name = "John";
$age = 30;
$isMarried = false;
$salary = 75000.50;`}
            </CodeBlock>
            <Text as="p">
              You can use the <code>var_dump</code> function to output the value
              and data type of a variable, like this:
            </Text>
            <CodeBlock>
              {`var_dump($name);
// Outputs: string(4) "John"`}
            </CodeBlock>
            <Heading as="h2">Arrays</Heading>
            <Text as="p">
              PHP arrays are used to store collections of data. There are two
              types of arrays: indexed arrays and associative arrays. Indexed
              arrays use numeric indices to access the values, while associative
              arrays use string keys. Here are some examples of declaring arrays
              in PHP:
            </Text>
            <CodeBlock>
              {`// Indexed array
$fruits = array("apple", "banana", "orange");
// Associative array
$person = array(
"name" => "John",
"age" => 30,
"isMarried" => false
);`}
            </CodeBlock>
            <Text as="p">
              You can access the values in an array using square brackets and
              the index or key. For example:
            </Text>

            <CodeBlock>
              {`echo $fruits[0]; // Outputs: apple
echo $person["name"]; // Outputs: John`}
            </CodeBlock>
            <Heading as="h2">Control Structures</Heading>
            <Text as="p">
              PHP supports a variety of control structures, including if
              statements, for loops, and while loops. Here is an example of
              using an if statement to output different messages based on the
              value of a variable:
            </Text>
            <CodeBlock>
              {`$age = 30;
if ($age < 18) {
  echo "You are a minor.";
} elseif ($age >= 18 && $age < 65) {
  echo "You are an adult.";
} else {
  echo "You are a senior citizen.";
}`}
            </CodeBlock>
            <Text as="p">
              This code will output "You are an adult." because the value of{' '}
              <code>$age</code> is greater than or equal to 18 and less than 65.
              If the value of <code>$age</code> was less than 18, it would
              output "You are a minor." and if it was 65 or greater, it would
              output "You are a senior citizen."
            </Text>
            <Text as="p">
              Here is an example of using a for loop to iterate through an array
              and output the values:
            </Text>
            <CodeBlock>
              {`$fruits = array("apple", "banana", "orange");
for ($i = 0; $i < count($fruits); $i++) {
  echo $fruits[$i] . "<br>";
}`}
            </CodeBlock>
            <Text as="p">
              This code will output each fruit on a new line. The loop starts by
              initializing the variable <code>$i</code> to 0. It then checks if{' '}
              <code>$i</code> is less than the length of the{' '}
              <code>$fruits</code> array (determined using the{' '}
              <code>count</code> function). If the condition is true, the loop
              will execute the code block and then increment <code>$i</code> by
              1. The loop will continue to execute until <code>$i</code> is no
              longer less than the length of the array.
            </Text>
            <Text as="p">
              Here is an example of using a while loop to output the numbers
              from 1 to 10:
            </Text>
            <CodeBlock>
              {`$i = 1;
while ($i <= 10) {
  echo $i . "<br>";
  $i++;
}`}
            </CodeBlock>
            <Text as="p">
              This code will output each number on a new line. The loop starts
              by initializing the variable <code>$i</code> to 1. It then checks
              if <code>$i</code> is less than or equal to 10. If the condition
              is true, the loop will execute the code block and then increment{' '}
              <code>$i</code> by 1. The loop will continue to execute until{' '}
              <code>$i</code> is no longer less than or equal to 10.
            </Text>
            <Heading as="h2">Functions</Heading>
            <Text as="p">
              PHP functions are blocks of code that can be reusable and modular.
              You can define a function by using the <code>function</code>{' '}
              keyword followed by the function name and a set of parentheses.
              For example:
            </Text>
            <CodeBlock>
              {`function greet($name) {
  return "Hello, $name!";
}`}
            </CodeBlock>
            <Text as="p">
              This function takes a single argument, <code>$name</code>, and
              returns a string that greets the person by name. You can call this
              function by using the function name
            </Text>
            <Text as="p">
              followed by parentheses and any necessary arguments. For example:
            </Text>
            <CodeBlock>echo greet("John"); // Outputs: Hello, John!</CodeBlock>
            <Text as="p">
              You can also define default values for function arguments in case
              they are not provided when the function is called. For example:
            </Text>
            <CodeBlock>
              {`function greet($name = "World") {
  return "Hello, $name!";
}
echo greet(); // Outputs: Hello, World!`}
            </CodeBlock>

            <Text as="p">
              In this case, if no argument is provided when the function is
              called, the default value of "World" will be used. Otherwise, the
              provided argument will be used.
            </Text>
            <Heading as="h2">Including Files</Heading>
            <Text as="p">
              PHP allows you to include code from other files using the{' '}
              <code>include</code> or <code>require</code> statements. This is
              useful if you have code that you want to reuse on multiple pages
              or if you want to separate your code into logical modules. For
              example:
            </Text>
            <CodeBlock>
              {`// header.php
<div id="header">
  <h1>My Website</h1>
  <ul>
    <li><a href="index.php">Home</a></li>
    <li><a href="about.php">About</a></li>
    <li><a href="contact.php">Contact</a></li>
  </ul>
</div>
// index.php
<?php include "header.php"; ?>
<div id="main">
<h2>Welcome to My Website!</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>`}
            </CodeBlock>

            <Text as="p">
              In this example, the <code>header.php</code> file contains the
              HTML for the website header. The <code>index.php</code> file
              includes the <code>header.php</code> file at the top, so the
              header will be displayed on the page. This allows you to update
              the header in a single location and have the changes reflected on
              all pages that include the header file.
            </Text>
            <Text as="p">
              The difference between <code>include</code> and{' '}
              <code>require</code> is that <code>include</code> will produce a
              warning if the file is not found, but the script will continue to
              execute. <code>require</code> will produce a fatal error if the
              file is not found, and the script will stop executing.
            </Text>
            <Heading as="h2">Conclusion</Heading>
            <Text as="p">
              This is just a brief overview of the basics of PHP. There are many
              more features and functions available in PHP, including working
              with databases, handling sessions and cookies, and creating object
            </Text>
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Php;
