import { createFileRoute } from '@tanstack/react-router';
import { Center, Grid, Image, Stack, Text, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { InfoCard } from '../components/InfoCard';
import classes from '../styles/Hero.module.css';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <Stack w="100%" gap={70}>
      <div className={classes.hero}>
        <Center h="100%">
          <Image src="/safc-symbol.webp" alt="Hero Image" w={300} />
        </Center>
      </div>
      <Center>
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
          <Title c="gray.1">Welcome to SAFC!</Title>
          <Text size="lg" ta="center" c="gray.3" fw={500}>
            A celebration of creativity, self-expression and community. Bringing together artists,
            makers and fans who share a love for anthropomorphic characters in all their forms.
            Whether you're here to showcase your art, suit up, dance, or simply connect with your
            friends, you'll find a place where everyone belongs and every story has a heartbeat.
          </Text>
        </Stack>
      </Center>
      <Grid
        mx={{
          xs: 100,
          sm: 50,
          md: 70,
          xl: 200,
        }}
        gutter={{
          xs: 20,
          sm: 30,
          md: 50,
        }}
        mt="xl"
      >
        <Grid.Col
          span={{
            xs: 12,
            sm: 12,
            md: 4,
          }}
          mb={80}
        >
          <InfoCard
            title="Venue"
            description="Stay where the action is! Our venue features on-site lodging, dining, and everything you need for a comfortable, unforgettable con experience."
            imageSrc="/venue.jpg"
            imageProps={{ style: { objectPosition: 'top', objectFit: 'cover' } }}
            anchorProps={{
              onClick: (e) => {
                e.preventDefault();
              },
            }}
          />
        </Grid.Col>
        <Grid.Col
          span={{
            xs: 12,
            sm: 12,
            md: 4,
          }}
          mb={80}
        >
          <InfoCard
            title="SAFC 2026: Claw and Order"
            description="Step into a world of shadowy streets, smoky lounges, and whispered secrets. This year's noir detective theme invites you to don your trench coat, flash your badge, and uncover the mystery lurking beneath the city lights."
            imageSrc="/desktop.webp"
            imageProps={{
              style: { objectPosition: 'bottom', objectFit: 'cover' },
            }}
            link="/theme"
            // author="@Man_Of_Talent"
          />
        </Grid.Col>
        <Grid.Col
          span={{
            xs: 12,
            sm: 12,
            md: 4,
          }}
        >
          <InfoCard
            title="Registration!"
            description="Get your badge and join the fun! Find out how to register, what’s included with your pass, and how to make the most of your South Afrifur experience."
            imageSrc="/reg.webp"
            imageProps={{
              style: { objectPosition: 'top', objectFit: 'cover' },
            }}
            link="/"
            anchorProps={{
              target: '_blank',
              onClick: (e) => {
                notifications.show({
                  title: 'Registration opens soon!',
                  message: 'Stay tuned for updates on our registration opening date.',
                  color: '#ffecb3',
                  position: 'top-center',
                });
                e.preventDefault();
              },
            }}
            author="@Man_Of_Talent"
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
