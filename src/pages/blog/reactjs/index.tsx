import React from 'react';

import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { CodeBlock } from '@/components/CodeBlock';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';

const Reactjs = () => {
  return (
    <>
      <Head>
        <title>A Beginner's Guide to React</title>
        <meta
          name="description"
          content="Learn the basics of React, a popular JavaScript library for building user interfaces. This guide covers the fundamental concepts of React, including components, state, and props, and includes examples of how to use React for common tasks such as rendering dynamic lists and handling user input."
        />

        <meta
          name="keywords"
          content="React, JavaScript, UI, components, props, state, user input, dynamic lists"
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
            <Heading as="h1">A Beginner's Guide to React</Heading>
            <Text as="p">
              React is a JavaScript library for building user interfaces. If
              you're new to React, this guide will help you get started with the
              basics. We'll cover the fundamental concepts of React, including
              components, state, and props, and include examples of how to use
              React for common tasks such as rendering dynamic lists and
              handling user input.
            </Text>
            <Heading as="h2">What is React?</Heading>
            <Text as="p">
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces. It was developed by Facebook, and is
              often used in combination with other libraries or frameworks, such
              as Redux and React Router. React allows you to build reusable UI
              components, manage the state of your application, and efficiently
              update the UI in response to user actions.
            </Text>
            <Heading as="h2">Getting Started with React</Heading>
            <Text as="p">
              To start using React, you will need to have a recent version of
              Node.js and the Node.js package manager (npm) installed on your
              machine. You can then create a new React project using the Create
              React App tool by running the following command:
            </Text>
            <CodeBlock>npx create-react-app my-app</CodeBlock>
            <Text as="p">
              This will create a new directory called "my-app" with a basic
              React setup, including a development server and scripts for
              building and testing the app. You can then navigate to the project
              directory and start the development server by running the
              following commands:
            </Text>
            <CodeBlock>cd my-app npm start</CodeBlock>
            <Text as="p">
              This will open a new browser window with the default React app,
              which displays a message saying "Edit src/App.js and save to
              reload." You can edit the app by modifying the code in the "src"
              directory and the changes will be reflected in the browser as you
              save the files.
            </Text>
            <Heading as="h2">Components</Heading>
            <Text as="p">
              In React, a component is a piece of UI that can be reused
              throughout an app. Components are typically defined as functions
              or classes that return a React element. Here is an example of a
              functional component that displays a simple message:
            </Text>
            <CodeBlock>
              {`import React from 'react';
function Greeting(props) {
return <h1>Hello, {props.name}!</h1>;
}`}
            </CodeBlock>

            <Text as="p">
              This component takesa single prop, <code>name</code>, and returns
              a React element that displays a greeting with the name. You can
              use this component in another component or in the root component
              of your app by importing it and using the JSX syntax to include it
              in the render method:
            </Text>
            <CodeBlock>
              {`import React from 'react';
import Greeting from './Greeting';
function App() {
return (
<div>
<Greeting name="John" />
<Greeting name="Jane" />
<Greeting name="Joe" />
</div>
);
}`}
            </CodeBlock>

            <Text as="p">
              This will render three greetings, one for each name provided as a
              prop. You can also define components as classes that extend the{' '}
              <code>React.Component</code> base class. Here is an example of a
              class-based component that displays a list of items:
            </Text>
            <CodeBlock>
              {`import React, { Component } from 'react';
class ItemList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}`}
            </CodeBlock>

            <Text as="p">
              This component takes a prop called <code>items</code>, which is an
              array of objects. It uses the <code>map</code> function to render
              a list item for each object in the array. The <code>key</code>{' '}
              prop is used to uniquely identify each list item, which is
              important for performance when rendering dynamic lists.
            </Text>
            <Heading as="h2">State and Props</Heading>
            <Text as="p">
              In React, props are used to pass data from a parent component to a
              child component, while state is used to store and manage data
              within a component. Props are essentially read-only, while state
              can be modified by the component itself. Here is an example of a
              component that has state and uses it to toggle the visibility of a
              message:
            </Text>
            <CodeBlock>
              {`import React, { Component } from 'react';
class ToggleMessage extends Component {
  state = {
    visible: false
  };

  handleClick = () => {
    this.setState(CodeBlockvState => ({
      visible: !CodeBlockvState.visible
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Toggle Message</button>
          {this.state.visible && (
           <p>{this.props.message}</p>
          )}
      </div>
    );
  }
}`}
            </CodeBlock>

            <Text as="p">
              This component has a state variable called <code>visible</code>{' '}
              that determines whether the message is shown or hidden. It has a
              click event handler that toggles the value of <code>visible</code>{' '}
              when the button is clicked. It also renders the message if{' '}
              <code>visible</code> is <code>true</code>, using the JSX syntax
              for a conditional rendering. The message itself is passed as a
              prop called <code>message</code>. You can use this component in
              another component or in the root component of your app by passing
              a value for the <code>message</code> prop:
            </Text>
            <CodeBlock>
              {`import React from 'react';
import ToggleMessage from './ToggleMessage';
function App() {
  return (
    <div>
     <ToggleMessage message="Hello, World!" />
    </div>
  );
}`}
            </CodeBlock>

            <Text as="p">
              This will render a button and a message that can be toggled by
              clicking the button. You can also pass props from a parent
              component to a child component using the JSX syntax. For example:
            </Text>
            <CodeBlock>
              {`import React from 'react';
import ToggleMessage from './ToggleMessage';
  function App() {
    return (
      <div>
       <ToggleMessage message="Hello, World!" />
        <ToggleMessage message="Welcome to React!" />
      </div>
  );
}`}
            </CodeBlock>

            <Text as="p">
              This will render two instances of the <code>ToggleMessage</code>{' '}
              component, each with a different message prop. You can also pass
              props from a child component to a parent component using the{' '}
              <code>props.children</code> prop and the JSX syntax for rendering
              children. For example:
            </Text>
            <CodeBlock>
              {`import React from 'react';
function Card(props) {
  return (
    <div className="card">
     {props.children}
    </div>
  );
  }

  function App() {
    return (
      <div>
        <Card>
          h2>Title</h2 >
         <p>Content</p>
        </Card>
      </div>
    );
}`}
            </CodeBlock>

            <Text as="p">
              This will render a card component with a title and content, passed
              as children to the component. The children will be rendered inside
              the <code>div</code> element with the <code>className</code> of
              "card".
            </Text>
            <Heading as="h2">Handling User Input</Heading>
            <Text as="p">
              React allows you to handle user input using form elements, such as
              input, select, and textarea. You can use the <code>value</code>{' '}
              and <code>onChange</code> props to control the state of the form
              and bind it to the input value. Here is an example of a form
              component that manages its own state and updates the value of an
              input field:
            </Text>
            <CodeBlock>
              {`import React, { Component } from 'react';
class Form extends Component {
  state = {
    inputValue: ''
  };
  handleInputChange = event => {
      this.setState({ inputValue: event.target.value });
    }
  render() {
    return (
      <form>
        <input
        type="text"
        value={this.state.inputValue}
        onChange={this.handleInputChange}
        />
      </form>
    );
}
}`}
            </CodeBlock>

            <Text as="p">
              This component has a state variable called <code>inputValue</code>{' '}
              that stores the value of the input field. It has an event handler
              called <code>handleInputChange</code> that updates the value of{' '}
              <code>inputValue</code> when the input field is changed. The{' '}
              <code>value</code> and <code>onChange</code> props are used to
              bind the input field to the state variable and update it when the
              user types. You can use this component in another component or in
              the root component of your app by including it in the JSX:
            </Text>
            <CodeBlock>
              {`import React from 'react';
import Form from './Form';
function App() {
  return (
    <div>
     <Form />
    </div>
  );
}
`}
            </CodeBlock>

            <Text as="p">
              This will render a form with an input field that you can type in.
              You can also submit the form by adding a submit button and a
              submit event handler:
            </Text>
            <CodeBlock>
              {`import React, { Component } from 'react';
class Form extends Component {
  state = {
   inputValue: ''
  };

  handleInputChange = event => {
   this.setState({ inputValue: event.target.value });
  }

  handleSubmit = event => {
    event.CodeBlockventDefault();
    // Send the input value to the server or do something else here
  }

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input
      type="text"
      value={this.state.inputValue}
      onChange={this.handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
}`}
            </CodeBlock>

            <Text as="p">
              This will add a submit button to the form and a submit event
              handler that CodeBlockvents the default form submission behavior
              and can be used to send the input value to the server or perform
              some other action. You can also use the <code>select</code>{' '}
              element and the <code>option</code> element to create a dropdown
              menu and bind it to the state:
            </Text>
            <CodeBlock>
              {`import React, { Component } from 'react';
class Form extends Component {
  state = {
    selectValue: 'option1'
  };

  handleSelectChange = event => {
   this.setState({ selectValue: event.target.value });
  }

  render() {
    return (
      <form>
      <select value={this.state.selectValue} onChange={this.handle.SelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      </form>
    );
  }
}`}
            </CodeBlock>
            <Text as="p">
              This will create a dropdown menu with three options and bind the
              selected option to the state variable <code>selectValue</code>.
              You can also use the <code>textarea</code> element to create a
              textarea and bind it to the state:
            </Text>
            <CodeBlock>
              {`import React, { Component } from 'react';
class Form extends Component {
  state = {
   textareaValue: ''
  };

  handleTextareaChange = event => {
   this.setState({ textareaValue: event.target.value });
  }

  render() {
    return (
      <form>
       <textarea value={this.state.textareaValue} onChange={this.handleTextareaChange} />
      </form>
    );
  }
}`}
            </CodeBlock>

            <Text as="p">
              This will create a textarea and bind the value to the state
              variable <code>textareaValue</code>. You can then use the state
              variables to access the user input and use it in your app.
            </Text>
            <Heading as="h2">Rendering Dynamic Lists</Heading>
            <Text as="p">
              React allows you to render dynamic lists using the{' '}
              <code>map</code> function and the JSX syntax for rendering lists.
              You can use the <code>key</code> prop to uniquely identify each
              list item, which is important for performance when rendering
              dynamic lists. Here is an example of a component that renders a
              list of items:
            </Text>
            <CodeBlock>
              {`import React from 'react';
function ItemList(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`}
            </CodeBlock>

            <Text as="p">
              This component takes a prop called <code>items</code>, which is an
              array of objects. It uses the <code>map</code> function to render
              a list item for each object in the array. The <code>key</code>{' '}
              prop is used to uniquely identify each list item, which is
              important for performance when rendering dynamic lists. You can
              use this component in another component or in the root component
              of your app by passing an array of items as the <code>items</code>{' '}
              prop:
            </Text>
            <CodeBlock>
              {`import React from 'react';
import ItemList from './ItemList';
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  function App() {
    return (
      <div>
      <ItemList items={items} />
      </div>
      );
      }`}
            </CodeBlock>
            <Text as="p">
              This will render a list of three items, each with a unique{' '}
              <code>id</code> and a <code>name</code>. You can also use the{' '}
              <code>map</code> function to render more complex list items, such
              as components with props:
            </Text>
            <CodeBlock>
              {`
      import React from 'react';
      function Item(props) {
      return (
      <li>
      <strong>{props.item.name}</strong>: {props.item.description}
      </li>
    );
  }

  function ItemList(props) {
  return (
  <ul>
  {props.items.map(item => (
  <Item key={item.id} item={item} />
  ))}
  </ul>
  );
}`}
            </CodeBlock>

            <Text as="p">
              This will render a list of items, each with a name and a
              description. You can also use the <code>map</code> function to
              render a list of components with state and event handlers, such as
              a to-do list:
            </Text>
            <CodeBlock>
              {`import React, { Component } from 'react';
class ToDoItem extends Component {
state = {
done: false
};

handleClick = () => {
this.setState(CodeBlockvState => ({
done: !CodeBlockvState.done
}));
}

render() {
return (
<li onClick={this.handleClick} style={{ textDecoration: this.state.done ? 'line-through' : 'none' }}>
{this.props.item.name}
</li>
);
}
}

class ToDoList extends Component {
render() {
return (
<ul>
{this.props.items.map(item => (
<ToDoItem key={item.id} item={item} />
))}
</ul>
);
}
}`}
            </CodeBlock>

            <Text as="p">
              This will render a list of to-do items that can be marked as done
              by clicking on them. The <code>done</code> state variable is used
              to toggle the line-through style of the list items, and the{' '}
              <code>handleClick</code> event handler is used to toggle the value
              of <code>done</code>. You can use this component in another
              component or in the root component of your app by passing an array
              of items as the <code>items</code> prop:
            </Text>
            <CodeBlock>
              {`import React from 'react';
import ToDoList from './ToDoList';
const items = [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' }
];

function App() {
  return (
    <div>
      <ToDoList items={items} />
    </div>
  );
}`}
            </CodeBlock>
            <Text as="p">
              This will render a list of to-do items that can be marked as done
              by clicking on them. You can use the <code>map</code> function and
              the JSX syntax for rendering lists to create dynamic lists of any
              kind in React.
            </Text>
            <Heading as="h2">Summary</Heading>
            <Text as="p">
              React is a powerful JavaScript library for building user
              interfaces. It allows you to create reusable components, manage
              state and props, handle user input, and render dynamic lists. By
              learning the basics of React, you can build efficient and scalable
              front-end applications that can run on the web, mobile, or server.
            </Text>
          </Stack>
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Reactjs;
