import { Avatar, Card, Stack, Text } from '@mantine/core';

type AdminCardProps = {
  person: {
    avatar?: string;
    name: string;
    role: string;
  };
};

const AdminCard = ({ person }: AdminCardProps) => {
  return (
    <Card withBorder radius="md" padding="lg" h="100%">
      <Stack align="center" gap={6}>
        <Avatar src={person.avatar} name={person.name} color="initials" size={82} radius="xl" />
        <Text fw={500}>{person.name}</Text>
        <Text size="sm" c="dimmed" ta="center">
          {person.role}
        </Text>
      </Stack>
    </Card>
  );
};

export { AdminCard };
