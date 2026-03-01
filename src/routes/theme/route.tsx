import { createFileRoute } from '@tanstack/react-router';
import { Center, Image, Stack, Text, Title } from '@mantine/core';
import classes from '../../styles/Hero.module.css';

export const Route = createFileRoute('/theme')({
  component: RouteComponent,
});

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
          <Title c="#ffecb3" order={2}>
            Our Theme
          </Title>

          <Image
            src="/banner_wide.png"
            alt="Banner"
            mah={{ base: 300, sm: 500, md: 500, lg: 700, xl: 700 }}
            fit="contain"
          />
          <Text ta="center" size="xl" fw={500}>
            “I didn’t even look up as the beaten manilla folder slid across my desk. I stood up,
            picked it up from the floor and opened it. Another dead-end case, so cold you’d think it
            was taking a midnight shower, and the geyser was solar-powered. No suspects, no leads;
            all any of the witnesses can say is, ‘it used to be there, now it’s gone.’ In my line of
            work, that’s usually a good sign that something was stolen. But as luck would have it, I
            know a guy. Someone who could finger the perpetrator, and maybe even help me find who’s
            responsible.”
          </Text>
          <Text ta="center" size="xl" fw={500}>
            Enter the smoky offices and cold, lonely streets of the film noir private investigator.
            Trench coats and fedoras. Shadows cast down gloomy alleyways. Silhouettes of an
            unforgiving city’s skyline. And you, a private eye with an unsolved case, and a few
            dozen suspects.
          </Text>
          <Text ta="center" size="xl" fw={500}>
            You’ve been tasked with solving the mystery of the stolen McGuffin. Sniff out clues,
            collaborate with other investigators, and piece together information on the big board of
            clues (red string included). Will you solve the case, or will the perp walk away with
            the McGuffin scot-free?
          </Text>
        </Stack>
      </Center>
      <div className={classes.footer}></div>
    </Stack>
  );
}
