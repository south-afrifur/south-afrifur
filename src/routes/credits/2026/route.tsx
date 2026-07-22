import { createFileRoute } from '@tanstack/react-router';
import { Center, Grid, Stack, Title } from '@mantine/core';
import { AdminCard } from '../../../components/AdminCard';
import { ArtistCard } from '../../../components/ArtistCard';
import { VolunteerCard } from '../../../components/VolunteerCard';

export const Route = createFileRoute('/credits/2026')({
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
          <Title c="#ffecb3">SAFC 2026 Team</Title>
          <Grid w="100%">
            <Grid.Col
              span={{
                sm: 6,
                xs: 12,
              }}
            >
              <AdminCard
                person={{
                  name: 'Scratch',
                  role: 'Con Daddy',
                  avatarSrc: '/Scratch.webp',
                }}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                sm: 6,
                xs: 12,
              }}
            >
              <AdminCard
                person={{
                  name: 'Sudan Red',
                  role: 'The Red Queen',
                  avatarSrc: '/Sudan.webp',
                }}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                sm: 4,
                xs: 12,
              }}
            >
              <AdminCard
                person={{
                  name: 'Badgacat',
                  role: 'Scrungly',
                  avatarSrc: '/Badge.webp',
                }}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                sm: 4,
                xs: 12,
              }}
            >
              <AdminCard
                person={{
                  name: 'Lyt',
                  role: 'Cat Herder',
                  avatarSrc: '/Lyt.webp',
                }}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                sm: 4,
                xs: 12,
              }}
            >
              <AdminCard
                person={{
                  name: 'Jack',
                  role: 'Cripple 07',
                  avatarSrc: '/Jack.webp',
                }}
              />
            </Grid.Col>
          </Grid>
          <Stack w="100%">
            <Grid w="100%">
              <Grid.Col
                span={{
                  sm: 4,
                  xs: 6,
                  base: 6,
                }}
              >
                <VolunteerCard
                  person={{
                    name: 'Crash',
                    handle: '@Crash28',
                    avatarSrc: '/Crash.webp',
                  }}
                />
              </Grid.Col>
              <Grid.Col
                span={{
                  sm: 4,
                  xs: 6,
                  base: 6,
                }}
              >
                <VolunteerCard
                  person={{
                    name: 'Kyra',
                    handle: '@KyraTheDonkey',
                    avatarSrc: '/Kyra.webp',
                  }}
                />
              </Grid.Col>
              <Grid.Col
                span={{
                  sm: 4,
                  xs: 6,
                  base: 6,
                }}
              >
                <VolunteerCard
                  person={{
                    name: 'Luriga',
                    handle: '@Lurigo',
                    avatarSrc: '/Luriga.webp',
                  }}
                />
              </Grid.Col>
              <Grid.Col
                span={{
                  sm: 4,
                  xs: 6,
                  base: 6,
                }}
              >
                <VolunteerCard
                  person={{
                    name: 'Vlad',
                    handle: '@Vladzight',
                    avatarSrc: '/Vlad.webp',
                  }}
                />
              </Grid.Col>
              <Grid.Col
                span={{
                  sm: 4,
                  xs: 6,
                  base: 6,
                }}
              >
                <VolunteerCard
                  person={{
                    name: 'Jack',
                    handle: 'IT',
                  }}
                />
              </Grid.Col>
              <Grid.Col
                span={{
                  sm: 4,
                  xs: 6,
                  base: 6,
                }}
              >
                <VolunteerCard
                  person={{
                    name: 'Jack',
                    handle: 'IT',
                  }}
                />
              </Grid.Col>
            </Grid>
          </Stack>

          <Grid w="100%">
            <Grid.Col
              span={{
                sm: 6,
                xs: 12,
              }}
            >
              <ArtistCard
                artist={{
                  name: 'Jack',
                  role: 'Artist',
                  socials: [{ platform: 'furaffinity', url: 'blah', label: 'Blah' }],
                }}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                sm: 6,
                xs: 12,
              }}
            >
              <ArtistCard
                artist={{
                  name: 'Jack',
                  role: 'Artist',
                  socials: [{ platform: 'furaffinity', url: 'blah', label: 'Blah' }],
                }}
              />
            </Grid.Col>
          </Grid>
        </Stack>
      </Center>
    </Stack>
  );
}
