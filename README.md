# React Application Setup

To manage packages in Node.js, you can use `npm`, similar to how `pip` is used in Python.

## How to Start a React App

To create a new React application, run the following command:

```bash
npx create-react-app <your-app-name>
```

Navigate to your project directory:

```bash
cd <your-app-name>
```

To start the development server, run:

```bash
npm start
```

This will open your React application in the default web browser at `http://localhost:3000`.

## Building the App for Production

To create an optimized production build, run:

```bash
npm run build
```

This will create a `build` directory with all the production files.

## Creating a React App with Vite

The above command can take a long time, so we will create the app with Vite instead:

```bash
npm create vite@latest
```

Follow the prompts to set up your project. Once the setup is complete, navigate to your project directory:

```bash
cd <your-app-name>
```

Install the necessary dependencies:

```bash
npm install
```

To start the development server with Vite, run:

```bash
npm run dev
```

This will open your React application in the default web browser at `http://localhost:3000`.

## Differences Between Create React App and Vite

- **Build Tool**: Create React App uses `react-scripts` to interact with `index.html` and load JavaScript files, while Vite manually loads JavaScript files.
- **File Extensions**: In React, you can use `.js` or `.jsx` based on your requirements. Vite enforces the use of `.jsx` for files containing JSX.
- **Best Practices**: In React, it's a best practice to use `.jsx` for files containing HTML-like syntax.

## Workflow of a React Application

1. **Entry Point**: React applications have an `index.html` that loads `index.js` or `main.jsx`, which renders functions defined in other files like `App.js` or `App.jsx`.
2. **Component Creation**: Create new `.js` files in the `/src` directory (or `.jsx` in Vite) where you define functions and export them. Import these functions in `App.js` or `App.jsx` to render them.
3. **Rendering Elements**: `App.js` renders only one element. To render multiple elements, wrap them in a `<div></div>` or `<> </>`.
4. **Naming Conventions**: Always start the names of your components with a capital letter.

### Example Component

Here is an example of a simple React component:

```jsx
// src/HelloWorld.jsx
import React from 'react';

function HelloWorld() {
    return <h1>Hello, World!</h1>;
}

export default HelloWorld;
```

And how to use it in `App.js`:

```jsx
// src/App.jsx
import React from 'react';
import HelloWorld from './HelloWorld';

function App() {
    return (
        <div>
            <HelloWorld />
        </div>
    );
}

export default App;
```

By following these guidelines, you can set up and manage your React application efficiently.
## Using Evaluated Expressions to Insert Variables in HTML

In React, you can insert variables directly into your HTML using evaluated expressions. This is done by embedding JavaScript expressions within curly braces `{}` inside your JSX code.

### Example

Here is an example of how to use evaluated expressions to insert variables into your HTML:

```jsx
// src/Greeting.jsx
import React from 'react';

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

In the above example, the `Greeting` component takes a `name` prop and inserts it into the `<h1>` element using `{props.name}`.

### Using the Component

You can use the `Greeting` component in your `App.js` like this:

```jsx
// src/App.jsx
import React from 'react';
import Greeting from './Greeting';

function App() {
    const userName = 'John Doe';
    return (
        <div>
            <Greeting name={userName} />
        </div>
    );
}

export default App;
```

In this example, the `userName` variable is passed as a prop to the `Greeting` component, and it will be displayed as "Hello, John Doe!" in the rendered HTML.

By using evaluated expressions, you can dynamically insert and update content in your React components based on the state and props.