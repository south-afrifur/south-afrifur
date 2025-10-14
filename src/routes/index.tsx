import { createFileRoute } from '@tanstack/react-router';
import { Center, Image, Stack, Text, Title } from '@mantine/core';
import classes from '../styles/Hero.module.css';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <Stack w="100%" gap={50}>
      <div className={classes.hero}>
        <Center h="100%">
          <Image src="/safc-symbol.webp" alt="Hero Image" w={300} />
        </Center>
      </div>
      <Center>
        <Stack maw={800} align="center">
          <Title>Welcome to SAFC!</Title>
          <Text size="lg" ta="center">
            A celebration of creativity, self-expression and community. Bringing together artists,
            makers and fans who share a love for anthropomorphic characters in all their forms.
            Whether you're here to showcase your art, suit up, dance, or simply connect with your
            friends, you'll find a place where everyone belongs and every story has a heartbeat.
          </Text>
        </Stack>
      </Center>
    </Stack>
  );
}
