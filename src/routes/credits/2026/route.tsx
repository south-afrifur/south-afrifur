import { createFileRoute } from '@tanstack/react-router';
import { Center, Grid, Stack, Title } from '@mantine/core';
import { AdminCard } from '../../../components/AdminCard';
import { ArtistCard, type Artist } from '../../../components/ArtistCard';
import { VolunteerCard } from '../../../components/VolunteerCard';

export const Route = createFileRoute('/credits/2026')({
  component: RouteComponent,
});

const artistData: Artist[] = [
  {
    name: 'Ness Onca',
    role: 'Artist',
    socials: [
      {
        platform: 'telegram',
        url: 'https://t.me/ZoeRebocho',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/nessoncathecoffeequeen',
      },
      {
        platform: 'discord',
        url: 'https://discord.com/invite/dbJ5QryzfM',
      },
    ],
  },
  {
    name: 'Blueberry',
    role: 'Artist',
    socials: [
      { platform: 'telegram', url: 'https://t.me/ShysAlley' },
      { platform: 'instagram', url: 'https://www.instagram.com/ShysAlley' },
      { platform: 'discord', url: '@ShysAlley' },
      { platform: 'facebook', url: 'https://www.facebook.com/ShysAlley' },
      { platform: 'bluesky', url: 'https://bsky.app/profile/ShysAlley.bsky.social' },
      { platform: 'x', url: 'https://twitter.com/Shys_Alley' },
      { platform: 'furaffinity', url: 'https://www.furaffinity.net/user/ThatCatObsessedDemon/' },
    ],
  },
  {
    name: 'Crash',
    role: 'Artist',
    avatar: '/Crash.webp',
    socials: [
      { platform: 'telegram', url: 'https://t.me/Crash28' },
      { platform: 'bluesky', url: 'https://bsky.app/profile/CrashZA.bsky.social' },
      { platform: 'furaffinity', url: 'https://www.furaffinity.net/user/rottie/' },
    ],
  },
  {
    name: 'Krowkaws',
    role: 'Artist',
    socials: [
      { platform: 'telegram', url: 'https://t.me/KrowKaws' },
      { platform: 'bluesky', url: 'https://bsky.app/profile/krowkaws.bsky.social' },
      { platform: 'twitch', url: 'https://www.twitch.tv/krowkaws' },
    ],
  },
  {
    name: 'Ash',
    role: 'Artist',
    socials: [
      { platform: 'telegram', url: 'https://t.me/JustAshleyTheSharkHehe' },
      { platform: 'instagram', url: 'https://www.instagram.com/raythesharky/' },
      { platform: 'discord', url: 'https://discord.gg/wUnpMzRkXf' },
      { platform: 'bluesky', url: 'https://bsky.app/profile/justashleytheshark.bsky.social' },
      { platform: 'twitch', url: 'https://www.twitch.tv/JustAshleyTheSharkHehe' },
    ],
  },
  {
    name: 'Aven',
    role: 'Artist',
    socials: [
      { platform: 'telegram', url: 'https://t.me/Witchy_Kitty' },
      { platform: 'x', url: 'https://twitter.com/@WitchyKitty__' },
    ],
  },
];

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
            {artistData.map((artist) => (
              <Grid.Col
                span={{
                  sm: 6,
                  xs: 12,
                }}
                key={artist.name}
              >
                <ArtistCard artist={artist} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Center>
    </Stack>
  );
}
