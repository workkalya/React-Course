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