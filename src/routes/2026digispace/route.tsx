import { createFileRoute } from '@tanstack/react-router';
import { Anchor, Button, Center, Image, List, Stack, Text, Title } from '@mantine/core';
import { RouterAnchor } from '../../components/RouterAnchor';

export const Route = createFileRoute('/2026digispace')({
  component: RouteComponent,
});

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
          <Title c="#ffecb3">Digispace</Title>
          <Text size="lg" ta="center" c="gray.3" fw={500}>
            A quick index of useful information for the convention. On this page, you can find links
            to the event schedule, emergency contacts, and sitemap.
          </Text>
          <Title c="#ffecb3" order={2}>
            Quick access
          </Title>
          <List>
            <List.Item>
              <Anchor href="#emergency-contacts">View Emergency Contacts</Anchor>
            </List.Item>
            <List.Item>
              <RouterAnchor to="/schedule">View Schedule</RouterAnchor>
            </List.Item>
            <List.Item>
              <RouterAnchor to="/2026feedback">View Event Feedback Form</RouterAnchor>
            </List.Item>
            <List.Item>
              <RouterAnchor to="/rules">View Rules</RouterAnchor>
            </List.Item>
            <List.Item>
              <RouterAnchor to="/credits/2026">View Credits</RouterAnchor>
            </List.Item>
          </List>

          <Title c="#ffecb3" order={2}>
            Sitemap
          </Title>
          <Button
            variant="subtle"
            c="#ffecb3"
            color="dark"
            size="md"
            component="a"
            target="_blank"
            href="https://ywd9khef0yddiioq.public.blob.vercel-storage.com/Documents/SAFC_Map_2026.png?download=1"
          >
            Download High Resolution Sitemap
          </Button>
          <Image src="/sitemap.webp" />
          <Title c="#ffecb3" order={2} id="emergency-contacts">
            Emergency Contacts
          </Title>
          <Title order={3}>Police Assistance</Title>
          <List>
            <List.Item>SAPS Call Center: 10111</List.Item>
            <List.Item>SAPS Lanseria: 011 213 6000</List.Item>
            <List.Item>SAPS Muldersdrift: 011 952 4600</List.Item>
            <List.Item>SAPS Krugersdorp: 011 951 1151</List.Item>
          </List>
          <Title order={3}>Hospital Assistance</Title>
          <List>
            <List.Item>Netcare Pinehaven Hospital: 011 950 5400</List.Item>
            <List.Item>Netcare Krugersdorp Hospital: 011 951 0200</List.Item>
            <List.Item>Dr. Yusuf Dadoo Hospital: 011 951 6000</List.Item>
          </List>
          <Title order={3}>Ambulance Assistance</Title>
          <List>
            <List.Item>Netcare 911: 082 911</List.Item>
            <List.Item>ER 24: 084 124</List.Item>
          </List>
        </Stack>
      </Center>
    </Stack>
  );
}
