import { createFileRoute } from '@tanstack/react-router';
import { Center, Container, Divider, List, Stack, Text, Title } from '@mantine/core';

export const Route = createFileRoute('/privacy')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
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
        <Stack>
          <Title c="#ffecb3">Privacy Policy</Title>
          <Text size="lg" ta="center" c="gray.5" fw={500}>
            Last updated: 4 April 2025
          </Text>
        </Stack>
        <Text size="xl" fw={500} ta="center">
          South Afrifur (“we,” “our,” “us”) is committed to protecting your privacy and ensuring the
          security of your personal information in accordance with the Protection of Personal
          Information Act, 2013 (POPIA) and other applicable laws. This Privacy Policy explains how
          we collect, use, store, and protect your information when you register and participate in
          our events.
        </Text>
        <Divider my="xl" mb="lg" w="80%" />
        <Container>
          <Stack mb={50}>
            <Title c="#ffecb3" order={3}>
              1. Information We Collect
            </Title>
            <Text>
              When you register for our event, we may collect the following personal information:
            </Text>
            <List>
              <List listStyleType="disc">
                <List.Item>
                  All members of the media must register in advance with the SAFC team and receive
                  official accreditation before conducting any filming, photography, or interviews.
                </List.Item>
                <List.Item>
                  Accredited media will be issued a Media Badge, which must be visible at all times
                  while capturing content.
                </List.Item>
              </List>
            </List>
          </Stack>
          <Divider my="xl" mb="lg" w="100%" />
          <Stack mb={50}>
            <Title c="#ffecb3" order={3}>
              2. How We Use Your Information
            </Title>
            <Text>
              Your information is used solely for event administration purposes, including but not
              limited to:
            </Text>
            <List>
              <List listStyleType="disc">
                <List.Item>Managing your event registration and attendance</List.Item>
                <List.Item>
                  Ensuring your safety during the event (e.g., emergency contact)
                </List.Item>
                <List.Item>Accommodating dietary requirements</List.Item>
                <List.Item>Communicating important event updates</List.Item>
              </List>
            </List>
            <Text>
              We do not sell, rent, or use your personal information for marketing purposes without
              your explicit consent.
            </Text>
          </Stack>
          <Divider my="xl" mb="lg" w="100%" />
          <Stack mb={50}>
            <Title c="#ffecb3" order={3}>
              3. Data Storage and Security
            </Title>
            <List>
              <List listStyleType="disc">
                <List.Item>All personal data is encrypted and stored securely.</List.Item>
                <List.Item>
                  Access to your information is strictly limited to event administrators responsible
                  for managing South Afrifur. Not all staff members have access to this data.
                </List.Item>
                <List.Item>Passwords are encrypted and cannot be decrypted by our staff.</List.Item>
              </List>
            </List>
          </Stack>
          <Divider my="xl" mb="lg" w="100%" />
          <Stack mb={50}>
            <Title c="#ffecb3" order={3}>
              4. Data Retention
            </Title>
            <Text>
              We retain personal information for as long as necessary to administer the event and
              for future event participation unless you request its removal. If you would like your
              account and personal data deleted, please send a written request to sales (at)
              south-afrifur.co.za.
            </Text>
          </Stack>
          <Divider my="xl" mb="lg" w="100%" />
          <Stack mb={50}>
            <Title c="#ffecb3" order={3}>
              5. Payment Information
            </Title>
            <Text>
              South Afrifur does not process or store payment card details. All payments are handled
              securely by Yoco. For more details on how Yoco processes your payment information,
              please review their Privacy Policy here:{' '}
              <a href="https://a.storyblok.com/f/111633/x/69994c031e/privacy-policy-23-september-2024.pdf">
                Yoco Privacy Policy (23 September 2024)
              </a>
            </Text>
          </Stack>
          <Divider my="xl" mb="lg" w="100%" />
          <Stack mb={50}>
            <Title c="#ffecb3" order={3}>
              6. Compliance with POPIA
            </Title>
            <Text>
              In compliance with the Protection of Personal Information Act, 2013 (POPIA), South
              Afrifur:
            </Text>
            <List>
              <List listStyleType="disc">
                <List.Item>
                  Collects only the minimum necessary personal information for event purposes.
                </List.Item>
                <List.Item>
                  Uses your information solely for legitimate, explicit, and defined purposes.
                </List.Item>
                <List.Item>Ensures data is kept secure and confidential.</List.Item>
                <List.Item>
                  Provides you the right to request access, correction, or deletion of your personal
                  data.
                </List.Item>
              </List>
            </List>
          </Stack>
          <Divider my="xl" mb="lg" w="100%" />
          <Stack mb={50}>
            <Title c="#ffecb3" order={3}>
              7. Your Rights
            </Title>
            <Text>Under POPIA, you have the right to:</Text>
            <List>
              <List listStyleType="disc">
                <List.Item>Access the personal information we hold about you.</List.Item>
                <List.Item>
                  Request correction of inaccurate, outdated, or incomplete information.
                </List.Item>
                <List.Item>Request deletion of your personal information.</List.Item>
                <List.Item>Withdraw consent where applicable.</List.Item>
              </List>
            </List>
            <Text>
              To exercise these rights, please contact us at sales (at) south-afrifur.co.za.
            </Text>
          </Stack>
          <Divider my="xl" mb="lg" w="100%" />
          <Stack mb={50}>
            <Title c="#ffecb3" order={3}>
              8. Changes to This Policy
            </Title>
            <Text>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or legal obligations. Updates will be posted on this page with the revised
              effective date.
            </Text>
          </Stack>
          <Divider my="xl" mb="lg" w="100%" />
          <Stack mb={50}>
            <Title c="#ffecb3" order={3}>
              9. Contact Us
            </Title>
            <Text>
              If you have any questions about this Privacy Policy or how your data is handled,
              please contact us at:
            </Text>
            <Text>South Afrifur Furry Convention</Text>
            <Text>
              Email: <a href="mailto:conops@south-afrifur.co.za">conops@south-afrifur.co.za</a>
            </Text>
            <Text>
              Website: <a href="https://www.south-afrifur.co.za">www.south-afrifur.co.za</a>
            </Text>
          </Stack>
        </Container>
      </Stack>
    </Center>
  );
}
