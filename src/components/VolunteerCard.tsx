import { Avatar, Group, Text } from '@mantine/core';

type VolunteerCardProps = {
  person: {
    avatar?: string;
    name: string;
    handle: string;
  };
};

const VolunteerCard = ({ person }: VolunteerCardProps) => {
  return (
    <Group
      gap="sm"
      wrap="nowrap"
      style={{
        border: '0.5px solid var(--mantine-color-default-border)',
        borderRadius: 10,
        padding: '8px 10px',
      }}
    >
      <Avatar src={person.avatar} name={person.name} color="initials" size={60} radius="xl" />
      <div style={{ minWidth: 0 }}>
        <Text size="sm" fw={500} truncate>
          {person.name}
        </Text>
        <Text size="xs" c="dimmed" truncate>
          {person.handle}
        </Text>
      </div>
    </Group>
  );
};

export { VolunteerCard };
