import { StrictMode } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider, type MantineColorsTuple } from '@mantine/core';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

import '@mantine/core/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

import { Notifications } from '@mantine/notifications';
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

const noir: MantineColorsTuple = [
  '#F5F5F7', // 1 - Pale Fog
  '#E6E6EA', // 2 - Mist
  '#C9CAD1', // 3 - Silver Smoke
  '#A3A6AF', // 4 - Steel Haze
  '#7C808A', // 5 - Gunmetal Light
  '#585C66', // 6 - Asphalt
  '#3E414A', // 7 - Wet Concrete
  '#2A2C33', // 8 - Midnight Alley
  '#17181C', // 9 - Deep Shadow
  '#0B0C0F', // 10 - Noir
];

const amber: MantineColorsTuple = [
  '#fff8e1',
  '#ffecb3',
  '#ffe082',
  '#ffd54f',
  '#ffca28',
  '#ffc107',
  '#ffb300',
  '#ffa000',
  '#ff8f00',
  '#ff6f00',
];

const theme = createTheme({
  colors: {
    grayBlue,
    noir,
    amber,
  },
  components: {
    Anchor: {
      defaultProps: {
        c: '#ffecb3',
      },
    },
  },
});

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Notifications />
        <RouterProvider router={router} scrollRestoration />
      </MantineProvider>
    </StrictMode>
  );
}
