import { createFileRoute } from '@tanstack/react-router';
import { Center, Container, Divider, List, Stack, Text, Title } from '@mantine/core';

export const Route = createFileRoute('/rules/media')({
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
          <Title c="gray.1" order={2}>
            Media & Content Creators
          </Title>

          <Text size="xl" fw={500} ta="center">
            We welcome members of the media and independent creators who wish to capture the
            atmosphere of the South Afrifur Furry Convention.
          </Text>
          <Text ta="center" size="lg">
            To ensure the comfort, safety, and enjoyment of all attendees, the following rules and
            guidelines apply:
          </Text>

          <Divider my="xl" mb="lg" w="80%" />
          <Container>
            <Stack mb={50}>
              <Title c="gray.1" order={3}>
                Accreditation & Approval
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  All members of the media must register in advance with the SAFC team and receive
                  official accreditation before conducting any filming, photography, or interviews.
                </List.Item>
                <List.Item>
                  Accredited media will be issued a Media Badge, which must be visible at all times
                  while capturing content.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="gray.1" order={3}>
                Consent & Respect
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Consent is mandatory: You must ask for and receive permission before
                  photographing, recording, or interviewing any attendee, staff member, or panelist.
                </List.Item>
                <List.Item>
                  No means no: If someone declines, their decision must be respected immediately.
                </List.Item>
                <List.Item>
                  Do not attempt to capture images or recordings of individuals in vulnerable or
                  compromising situations.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="gray.1" order={3}>
                Restricted Areas
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Filming and photography are not permitted in the following spaces unless
                  explicitly authorized:
                </List.Item>
                <List listStyleType="disc">
                  <List.Item>Hotel rooms, private suites, and closed-door events.</List.Item>
                  <List.Item>Bathrooms, changing areas, and designated fursuit lounges.</List.Item>
                  <List.Item>Any area marked as “No Photography/Filming.”</List.Item>
                </List>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="gray.1" order={3}>
                After Dark (AD) Programming
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  AD events are strictly private. Media coverage of these sessions is prohibited.
                </List.Item>
                <List.Item>
                  No photography, filming, or recording of adult-oriented panels, activities, or
                  after-hours events will be allowed under any circumstances.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="gray.1" order={3}>
                Respect for Minors & Families
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Between 10:00 AM and 6:00 PM, the convention operates in a Safe For Work (SFW)
                  environment, welcoming both minors and families.
                </List.Item>
                <List.Item>
                  Content captured during these hours must reflect a family-friendly setting.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="gray.1" order={3}>
                Publication & Use of Media
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  All media coverage intended for public release (print, digital, or broadcast) must
                  be reviewed and approved by the SAFC Media Team prior to publication.
                </List.Item>
                <List.Item>
                  Content that misrepresents, exploits, or portrays the convention, its attendees,
                  or the furry community in a negative or harmful light may result in revocation of
                  media credentials and removal from the event.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="gray.1" order={3}>
                Enforcement
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  The SAFC team reserves the right to revoke media privileges at any time for
                  violations of these rules.
                </List.Item>
                <List.Item>
                  Failure to comply may result in removal from the event and denial of future
                  access.
                </List.Item>
              </List>
            </Stack>
          </Container>
        </Stack>
      </Center>
    </Stack>
  );
}
