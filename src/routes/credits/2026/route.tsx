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

const awooCrewData = [
  {
    name: 'Crash',
    handle: '@Crash28',
    avatar: '/Crash.webp',
  },
  {
    name: 'Luriga',
    handle: '@Lurigo',
    avatar: '/Luriga.webp',
  },
  {
    name: 'Kyra',
    handle: '@KyraTheDonkey',
    avatar: '/Kyra.webp',
  },
  {
    name: 'Krow',
    handle: '@KrowKaws',
    avatar: '/Krow.webp',
  },
  {
    name: 'Vlad',
    handle: '@vladzight',
    avatar: '/Vlad.webp',
  },
  {
    name: 'Arjuna',
    handle: '@Arjuna_Echo',
    avatar: '/Arjuna.webp',
  },
  {
    name: 'Alex',
    handle: '@Alex_boyy_ZA',
    avatar: '/Alex.webp',
  },
  {
    name: 'Blueberry',
    handle: '@ShysAlley',
    avatar: '/Blueberry.webp',
  },
  {
    name: 'Thabz',
    handle: '@Man_Of_Talent',
    avatar: '/Thabz.webp',
  },
  {
    name: 'Romey',
    handle: '@VanenGrace',
    avatar: '/Romey.webp',
  },
  {
    name: 'Robbie',
    handle: '@Mysterious_RSA',
    avatar: '/Robbie.webp',
  },
];

const adminData = [
  {
    name: 'Scratch',
    role: 'Con Daddy',
    avatar: '/Scratch.webp',
    wide: true,
  },
  {
    name: 'Sudan Red',
    role: 'The Red Queen',
    avatar: '/Sudan.webp',
    wide: true,
  },
  {
    name: 'Badgacat',
    role: 'Scrungly',
    avatar: '/Badge.webp',
  },
  {
    name: 'Lyt',
    role: 'Cat Herder',
    avatar: '/Lyt.webp',
  },
  {
    name: 'Jack',
    role: 'Cripple 07',
    avatar: '/Jack.webp',
  },
];

const digiWooData = [
  {
    name: 'Angel',
    handle: '@AngelFoxMod',
    avatar: '/Angel.webp',
  },
  {
    name: 'Blueberry',
    handle: '@ShysAlley',
    avatar: '/Blueberry.webp',
  },
  {
    name: 'Ember',
    handle: '@CattoEmber',
    avatar: '/Ember.webp',
  },
  {
    name: 'Kakkers',
    handle: 'kakkersfloof',
    avatar: '/Kakkers.webp',
  },
  {
    name: 'Newt',
    handle: '@Frosty_wolfy',
    avatar: '/Newt.webp',
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
            {adminData.map((admin) => (
              <Grid.Col
                span={{
                  sm: admin.wide ? 6 : 4,
                  xs: 12,
                }}
                key={admin.name}
              >
                <AdminCard person={admin} />
              </Grid.Col>
            ))}
          </Grid>
          <Stack w="100%">
            <Grid w="100%" grow>
              {awooCrewData.map((awoo) => (
                <Grid.Col
                  span={{
                    sm: 6,
                    xs: 12,
                  }}
                  key={awoo.name}
                >
                  <VolunteerCard person={awoo} />
                </Grid.Col>
              ))}
            </Grid>
          </Stack>

          <Stack w="100%">
            <Grid w="100%" grow>
              {digiWooData.map((digi) => (
                <Grid.Col
                  span={{
                    sm: 6,
                    xs: 12,
                  }}
                  key={digi.name}
                >
                  <VolunteerCard person={digi} />
                </Grid.Col>
              ))}
            </Grid>
          </Stack>

          <Grid w="100%" grow>
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
