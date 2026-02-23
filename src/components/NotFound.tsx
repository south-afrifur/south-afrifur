import { Container, Image, Stack, Title } from '@mantine/core';

const NotFound = () => {
  return (
    <Stack w="100%" h="100%" gap={70} justify="center" pt={100} flex={1}>
      <Title size={100} ta="center" flex={0}>
        404
      </Title>
      <Container maw={600} flex={0}>
        <Title ta="center" order={3} c="#ffecb3">
          We couldn't find what you're looking for, but it's probably in here somewhere!
        </Title>
      </Container>
      <Stack
        h="100%"
        flex={1}
        justify="end"
        mb={{
          md: -50,
          base: -110,
        }}
      >
        <Image src="/dumbass.png" alt="Hero Image" w={200} mx="auto" />
      </Stack>
    </Stack>
  );
};

export { NotFound };
