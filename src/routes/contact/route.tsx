import { IconBrandDiscordFilled, IconBrandTelegram, IconBrandX } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';
import {
  Center,
  Container,
  Grid,
  Paper,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { ContactCard } from '../../components/ContactCard';

import 'bsky-embed/dist/bsky-embed.es.js';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Center mt={'xl'}>
      <Stack w="100%" gap={70} align="center">
        <Title c="gray.1" ta="center">
          Join our community!
        </Title>
        <Text size="lg" ta="center" c="gray.5" fw={500} maw={500}>
          You can find us on most social media platforms! Our con admin team is active on all of
          these platforms, so if you have any questions, please reach out to us.
        </Text>
        <Container size="xl" w={'100%'}>
          <Grid
            gutter={{
              xs: 20,
              sm: 30,
              md: 50,
            }}
          >
            <Grid.Col
              span={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
              mt="sm"
            >
              <ContactCard
                title="The official SAFC Discord"
                description="Join us on our Discord server! This is the main point of contact for all staff members and con attendees, and we will be making all major announcements on this platform as well."
                icon={
                  <ThemeIcon size={60} variant="transparent" color="gray">
                    <IconBrandDiscordFilled size={'100%'} />
                  </ThemeIcon>
                }
              />
            </Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
              mt="sm"
            >
              <ContactCard
                title="Join the Telegram group"
                description="Furries are all over Telegram, so why not join us there! Talk to participants, con staff, artists and content creators that might be joining us at the convention!"
                icon={
                  <ThemeIcon size={60} variant="transparent">
                    <IconBrandTelegram size={'100%'} />
                  </ThemeIcon>
                }
              />
            </Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
              mt="sm"
            >
              <ContactCard
                title="Follow us on X"
                description="We will be making announcements on X about convention information, and events on our Discord, so be sure to follow us on both to stay up to date with the latest news."
                icon={
                  <ThemeIcon size={60} variant="transparent" color="gray">
                    <IconBrandX size={'100%'} />
                  </ThemeIcon>
                }
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Paper bg="grayBlue.9" withBorder mt={'xl'}>
                <ScrollArea h={800}>
                  {/* @ts-ignore */}
                  <bsky-embed
                    username="did:plc:bituwwgvzmodeulxw4fj3lx5"
                    mode="dark"
                    limit="5"
                    link-target="_blank"
                    link-image="true"
                    load-more="true"
                  />
                </ScrollArea>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Stack>
    </Center>
  );
}
