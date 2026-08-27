import { createFileRoute } from '@tanstack/react-router';
import { Center, Container, Stack } from '@mantine/core';
import { FeedbackForm } from '../../components/FedbackForm';

export const Route = createFileRoute('/2026feedback')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Center>
      <Container w="100%" maw={800} pt={50}>
        <Stack w="100%" gap={70} align="center">
          <FeedbackForm />
        </Stack>
      </Container>
    </Center>
  );
}
