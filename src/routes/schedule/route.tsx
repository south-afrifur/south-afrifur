import { createFileRoute } from '@tanstack/react-router';
import { Center, Stack, Title } from '@mantine/core';
import { ConSchedule } from '../../components/ConSchedule';

export const Route = createFileRoute('/schedule')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Center w="100%" h="100%" mt="xl">
      <Stack w="100%" align="center" gap="md">
        <Title c="#ffecb3" order={2} mb="xl">
          Schedule
        </Title>
        <ConSchedule />
      </Stack>
    </Center>
  );
}
