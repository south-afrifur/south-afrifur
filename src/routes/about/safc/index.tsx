import { createFileRoute } from '@tanstack/react-router';
import { Center, Divider, Image, Stack, Text, Title } from '@mantine/core';

export const Route = createFileRoute('/about/safc/')({
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
          <Title c="gray.1">About Us</Title>
          <Text size="lg" ta="center" c="gray.5" fw={500}>
            A brief history
          </Text>
          <Image src="/safc-white.png" alt="Hero Image" w={'80%'} />
          <Text ta="center" size="xl" fw={500}>
            The South Afrifur Furry Convention was started by a group of local furries, with the
            intent of bringing the South African furry community together for a weekend getaway,
            that will bring out the best in everyone. A place where fursuiters can have a chance to
            interact with others, where artists can meet the local patrons, and everyone can have a
            space to enjoy time and activities with like-minded furries from across the country.
          </Text>
          <Text ta="center" size="xl" fw={500}>
            South Afrifur is the only furry convention on the African continent, first hosted in
            2017. It started out as a small event, hosted in a remote venue, with a rag-tag group of
            members heading the task of organizing the convention. We've grown bigger each year,
            with bigger attendance from further and further abroad, and we hope to grow even more in
            the years to come.
          </Text>
          <Text ta="center" size="xl" fw={500}>
            We believe that the furry fandom is all about connecting with like-minded individuals
            who share your passions and interests. That's why our convention is designed to be a
            welcoming and inclusive space for furries of all ages and backgrounds. We strive to
            create an environment where everyone feels comfortable being themselves and expressing
            their furry spirit in their own unique way.
          </Text>
          <Text ta="center" size="xl" fw={500}>
            Today, we're passionate about creating an unforgettable experience for furries from all
            over the world. Our team is made up of dedicated individuals who are committed to
            bringing the magic of the furry fandom to life in a unique and exciting way.
          </Text>
          <Divider my="xl" mb="lg" w="80%" />
          <Stack align="center" gap="xl">
            <Image src="/ivic.webp" alt="Ivic" w={300} mb="xs" />
            <Stack>
              <Title ta="center" c="gray.1" order={2}>
                In memorium to our founder, Ivic
              </Title>
              <Title ta="center" c="gray.6" order={4}>
                23 April 1988 - 22 May 2022
              </Title>

              <Text ta="left" size="md" fw={500}>
                Conrad Albertyn, known to many furs by his fursona, Ivic Wulfe, is the founder of
                our convention. He first had the concept for the South Afrifur Furry Convention in
                the year 2016. He had the idea to bring the furry community of South Africa together
                at one location and have fun and camaraderie as a collective. The first convention
                started in 2017 as a gathering of 28 furries, mostly from the Gauteng region, but it
                brought together furs from as far as Switzerland. Ever since then, under the hand of
                many dedicated and hardworking people, it has grown to the convention you are
                reading about now.
              </Text>
              <Text ta="left" size="md" fw={500}>
                Ivic was a prominent figure in the South African furry community. His friendliness,
                open mindedness, and back-breaking hugs are known well across the country. During
                his professional life, he taught English at a local college, where he frequently
                debated tough topics with his students. Ivic also made good use of his radio show on
                Furry.FM to have thought-provoking interviews with musicians, writers, activists and
                other furs around the world.
              </Text>
              <Text ta="left" size="md" fw={500}>
                To many of us, we've lost a prominent and loving voice in the South African furry
                community. He believed in the goodness inherent in everyone, and he always defended
                those who were seen as outsiders. He spoke out against injustices, prejudice and
                systemic inequalities in many spheres of influence, doing his best to educate those
                who were willing to listen towards being more loving, empathetic and tolerant.
              </Text>
              <Text ta="left" size="md" fw={500}>
                Ivic was 34 when he passed away after a prolonged fight with cancer in May 2022.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </Stack>
  );
}
