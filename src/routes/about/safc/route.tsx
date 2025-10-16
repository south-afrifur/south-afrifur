import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/about/safc')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
