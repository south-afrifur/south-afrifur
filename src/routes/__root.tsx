import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Appshell } from '../components/Appshell';

const RootLayout = () => (
  <Appshell>
    <Outlet />
    <TanStackRouterDevtools position="bottom-left" />
  </Appshell>
);

export const Route = createRootRoute({ component: RootLayout });
