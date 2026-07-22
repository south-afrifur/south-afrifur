import {
  IconBrandBluesky,
  IconBrandDeviantart,
  IconBrandInstagram,
  IconBrandMastodon,
  IconBrandTelegram,
  IconBrandTwitch,
  IconBrandX,
  IconBrandYoutube,
  IconLink,
  IconPaw,
  IconWorld,
} from '@tabler/icons-react';
import { ActionIcon, Avatar, Card, Group, Text } from '@mantine/core';

type Artist = {
  avatar?: string;
  name: string;
  role: string;
  attribution?: string;
  credit?: string;
  socials: {
    platform: string;
    url: string;
    label?: string;
  }[];
};

const SOCIAL_ICONS: Record<Artist['socials'][number]['platform'], typeof IconWorld> = {
  website: IconWorld,
  bluesky: IconBrandBluesky,
  mastodon: IconBrandMastodon,
  telegram: IconBrandTelegram,
  instagram: IconBrandInstagram,
  x: IconBrandX,
  twitter: IconBrandX,
  youtube: IconBrandYoutube,
  twitch: IconBrandTwitch,
  deviantart: IconBrandDeviantart,
  furaffinity: IconPaw,
};

const ArtistCard = ({ artist }: { artist: Artist }) => {
  return (
    <Card withBorder radius="md" padding="md">
      <Group gap="sm" wrap="nowrap" align="flex-start">
        <Avatar src={artist.avatar} name={artist.name} color="initials" size={52} radius="xl" />
        <div style={{ minWidth: 0 }}>
          <Text fw={500}>{artist.name}</Text>
          <Text size="sm" c="dimmed">
            {artist.role}
          </Text>
          {artist.attribution && (
            <Text size="xs" c="dimmed" mt={6}>
              {artist.attribution}
            </Text>
          )}
          {artist.credit && (
            <Text size="xs" c="dimmed" fs="italic" mt={2}>
              {artist.credit}
            </Text>
          )}
        </div>
      </Group>

      {artist.socials.length > 0 && (
        <Group
          gap="xs"
          mt="md"
          pt="md"
          style={{ borderTop: '0.5px solid var(--mantine-color-default-border)' }}
        >
          {artist.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.platform] ?? IconLink;
            return (
              <ActionIcon
                key={social.platform + social.url}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                color="gray"
                aria-label={social.label ?? social.platform}
              >
                <Icon size={18} stroke={1.5} />
              </ActionIcon>
            );
          })}
        </Group>
      )}
    </Card>
  );
};

export { ArtistCard };
