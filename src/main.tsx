import { StrictMode } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider, type MantineColorsTuple } from '@mantine/core';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

import '@mantine/core/styles.layer.css';

import { NotFound } from './components/NotFound';

// Create a new router instance
const router = createRouter({ routeTree, defaultNotFoundComponent: NotFound });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const grayBlue: MantineColorsTuple = [
  '#f2f4f8',
  '#e3e5e9',
  '#c3c9d4',
  '#a0acc0',
  '#8393af',
  '#7083a4',
  '#667ba1',
  '#55698d',
  '#4a5e7e',
  '#0f141c',
];

const theme = createTheme({
  colors: {
    grayBlue,
  },
});

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <RouterProvider router={router} scrollRestoration />
      </MantineProvider>
    </StrictMode>
  );
}
