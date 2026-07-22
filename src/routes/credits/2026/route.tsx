import { createFileRoute } from '@tanstack/react-router';
import { Center, Group, Stack, Title } from '@mantine/core';
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
    <Stack w="100%" gap={70}>
      <Center mt={'xl'}>
        <Stack
          maw={{
            base: '90%',
            sm: 600,
            md: 800,
            lg: 900,
            xl: 1000,
          }}
          align="center"
          gap={40}
        >
          <Title c="#ffecb3">About Us</Title>
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
    </Stack>
  );
}
