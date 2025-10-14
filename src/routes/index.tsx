import { createFileRoute } from '@tanstack/react-router';
import { Box, Center, Grid, Group, Image, Stack, Text, Title } from '@mantine/core';
import { InfoCard } from '../components/InfoCard';
import classes from '../styles/Hero.module.css';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <Stack w="100%" gap={70} bg="#122131" pb={150}>
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
      <Grid mx={300} gutter={100} mt="xl">
        <Grid.Col span={4}>
          <InfoCard
            title="Venue and Accommodation"
            description="Stay where the action is! Our venue features on-site lodging, dining, and everything you need for a comfortable, unforgettable con experience."
            imageSrc="/venue.jpg"
            imageProps={{ style: { objectPosition: '0px -100px', objectFit: 'cover' } }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <InfoCard
            title="Registration!"
            description="Get your badge and join the fun! Find out how to register, what’s included with your pass, and how to make the most of your South Afrifur experience."
            imageSrc="/reg.jpg"
            imageProps={{
              style: { objectPosition: '0px -100px', objectFit: 'cover' },
            }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <InfoCard
            title="First Furry Convention?"
            description="New to the fandom or attending your first con? Don't worry, we've got tips, guides, and friendly advice to help you feel right at home from day one."
            imageSrc="/nervous.jpg"
            imageProps={{
              style: { objectPosition: '0px -100px', objectFit: 'cover' },
            }}
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
