import { createFileRoute } from '@tanstack/react-router';
import { Center, Group, Stack } from '@mantine/core';
import { AdminCard } from '../../../components/AdminCard';
import { ArtistCard } from '../../../components/ArtistCard';
import { VolunteerCard } from '../../../components/VolunteerCard';

export const Route = createFileRoute('/credits/2026')({
  component: RouteComponent,
});

const adminTeam = [
  {
    name: 'Jack',
    role: 'IT',
  },
  {
    name: 'Jack',
    role: 'IT',
  },
  {
    name: 'Jack',
    role: 'IT',
  },
  {
    name: 'Jack',
    role: 'IT',
  },
  {
    name: 'Jack',
    role: 'IT',
  },
];

function RouteComponent() {
  return (
    <Center mt={'xl'}>
      <Stack align="center">
        <Group w="100%" grow>
          {adminTeam.map((person, index) =>
            index < 2 ? <AdminCard key={index} person={person} /> : null
          )}
        </Group>
        <Group w="100%" grow>
          {adminTeam.map((person, index) =>
            index >= 2 ? <AdminCard key={index} person={person} /> : null
          )}
        </Group>
        <Group w="100%" grow></Group>
        <Group grow w="100%">
          <VolunteerCard
            person={{
              name: 'Jack',
              role: 'IT',
            }}
          />
          <VolunteerCard
            person={{
              name: 'Jack',
              role: 'IT',
            }}
          />
          <VolunteerCard
            person={{
              name: 'Jack',
              role: 'IT',
            }}
          />
        </Group>
        <Group grow w="100%">
          <VolunteerCard
            person={{
              name: 'Jack',
              role: 'IT',
            }}
          />
          <VolunteerCard
            person={{
              name: 'Jack',
              role: 'IT',
            }}
          />
          <VolunteerCard
            person={{
              name: 'Jack',
              role: 'IT',
            }}
          />
        </Group>
        <Group grow w="100%">
          <ArtistCard
            artist={{
              name: 'Jack',
              role: 'Artist',
              socials: [{ platform: 'furaffinity', url: 'blah', label: 'Blah' }],
            }}
          />
        </Group>
      </Stack>
    </Center>
  );
}
