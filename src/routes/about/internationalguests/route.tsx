import { createFileRoute } from '@tanstack/react-router';
import { Anchor, Center, List, Stack, Text, Title } from '@mantine/core';

export const Route = createFileRoute('/about/internationalguests')({
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
          <Stack w="100%" gap={10}>
            <Title c="#ffecb3" ta="center">
              International Guests
            </Title>
            <Text size="lg" ta="center" c="gray.5" fw={500}>
              Helpful information for international attendees traveling to and attending the
              convention.
            </Text>
          </Stack>
          <Stack w="100%">
            <Text fw={500} size="lg">
              If you need mobile data during your visit, here are some eSIM and local SIM card
              options available in South Africa:
            </Text>
            <List>
              <List.Item>
                <Anchor target="_blank" href="https://www.vodacom.co.za/vodacom/shopping/esim">
                  Vodacom eSIM
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor target="_blank" href="https://alosim.com/south-africa-esim/">
                  aloSim
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  target="_blank"
                  href="https://www.mtn.co.za/home/help/content/buy-a-sim-card"
                >
                  MTN SIM Card
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  target="_blank"
                  href="https://www.jetpacglobal.com/product-details/africa-esim/"
                >
                  JetPac Global Africa eSIM
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor target="_blank" href="https://saily.com/esim-south-africa/">
                  Saily Esim
                </Anchor>
              </List.Item>
            </List>
          </Stack>

          <Title ta="center" c="gray.1" order={2}>
            Very Important:
          </Title>
          <Text size="xl" fw={500}>
            To legally use a South African SIM card as an international visitor, you need to
            register it through the RICA process. This involves providing your passport, proof of
            address (like a hotel confirmation), and completing a registration with a mobile network
            operator. You can typically do this at any mobile phone store or authorized retailer.
          </Text>
          <Title ta="center" c="gray.1" order={2}>
            Detailed Breakdown:
          </Title>
          <List type="ordered" spacing={'xs'}>
            <List.Item>
              <Text fw={700}>Obtain a SIM card:</Text>Purchase a SIM card from a mobile network
              provider (like Vodacom, MTN, Cell C, or Virgin) or an authorized retailer.
            </List.Item>
            <List.Item>
              <Text fw={700}>Gather required documents:</Text>
              <List spacing={0}>
                <List.Item>
                  Passport: You will need your original passport as proof of identification.
                </List.Item>
                <List.Item>
                  Proof of Address: This can be a letter from your hotel or accommodation confirming
                  your stay, or a similar document.
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Text fw={700}>Register your SIM:</Text>
              <List spacing={0}>
                <List.Item>
                  In-store registration: Visit a mobile network store or authorized retailer and
                  present your documents. They will guide you through the RICA process.
                </List.Item>
                <List.Item>
                  Self-RICA (if offered): Some providers, like Vodacom, offer online
                  self-registration. You will need to upload photos of your documents and
                  potentially take a selfie for facial recognition.
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              <Text fw={700}>Activate your SIM:</Text> After registration, your SIM card should be
              activated within a few hours or up to 24 hours, depending on the provider.
            </List.Item>
          </List>
          <Stack w="100%" gap={'xs'}>
            <Text>
              <b>RICA is mandatory:</b> It's a legal requirement to register your SIM card in South
              Africa.
            </Text>
            <Text>
              <b>Avoid pre-RICA SIMs:</b> Be cautious of SIM cards that are already registered, as
              they may be illegal.
            </Text>
            <Text>
              <b>Check activation times:</b> Activation times can vary, so be prepared to wait a
              short while before your SIM is fully functional.
            </Text>
          </Stack>
          <Title ta="center" c="gray.1" order={2}>
            Helpful Tips:
          </Title>
          <List spacing={'xl'}>
            <List.Item>
              Most international travel adapters use a 2-pin 'Type C' connector (common in Europe),
              which does fit South African sockets — however, South African wall sockets use a
              chunky 3-pin 'Type M' design. If your adapter only has Type C pins, pick up a cheap
              Type M adapter at a local supermarket or hardware store.
            </List.Item>
            <List.Item>
              It is suggested that you try to fly in to Lanseria airport if possible. If
              international flights don't serve Lanseria, we recommend flying into OR Tambo
              International and taking the Gautrain to Centurion or Midrand station, which are the
              closest stops to the convention venue.
            </List.Item>
            <List.Item>
              <Anchor href="/TravellersGuide.pdf" target="_blank" download>
                Download SARS Traveller's Guide (PDF)
              </Anchor>
            </List.Item>
          </List>
        </Stack>
      </Center>
    </Stack>
  );
}
