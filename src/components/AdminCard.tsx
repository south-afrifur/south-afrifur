import { Avatar, Card, Stack, Text } from '@mantine/core';

type AdminCardProps = {
  person: {
    avatarSrc?: string;
    name: string;
    role: string;
  };
};

const AdminCard = ({ person }: AdminCardProps) => {
  return (
    <Card withBorder radius="md" padding="lg" miw={200} h="100%">
      <Stack align="center" gap={6}>
        <Avatar src={person.avatarSrc} name={person.name} color="initials" size={64} radius="xl" />
        <Text fw={500}>{person.name}</Text>
        <Text size="sm" c="dimmed">
          {person.role}
        </Text>
      </Stack>
    </Card>
  );
};

export { AdminCard };
