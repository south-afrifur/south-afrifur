import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Appshell } from '../components/Appshell';

const RootLayout = () => (
  <Appshell>
    <Outlet />
    <TanStackRouterDevtools />
  </Appshell>
);

export const Route = createRootRoute({ component: RootLayout });
