import { createFileRoute } from '@tanstack/react-router';
import { Center, Stack, Text, Title } from '@mantine/core';

export const Route = createFileRoute('/2026feedback')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack w="100%" gap={70}>
      <Center mt={'xl'} w="100%">
        <Stack
          maw={{
            base: '90%',
            sm: 800,
            md: 800,
            lg: 900,
            xl: 1000,
          }}
          align="center"
          gap={40}
        >
          <Title c="#ffecb3">Live Event Feedback</Title>
          <Text size="lg" ta="center" c="gray.3" fw={500}>
            We value your feedback! Please take a moment to fill out our live event feedback form.
            Your input during the convention helps us improve future events and ensure a better
            experience for all attendees.
          </Text>
          <iframe
            src="https://forms.gle/3FpwXpm4jdjdtCpH6?embedded=true"
            width="100%"
            height="800px"
            style={{ border: 'none', maxWidth: '100%' }}
            title="Live Event Feedback"
          >
            Loading…
          </iframe>
        </Stack>
      </Center>
    </Stack>
  );
}
