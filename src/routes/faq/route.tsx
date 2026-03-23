import { createFileRoute } from '@tanstack/react-router';
import { Accordion, Anchor, Center, Container, List, Stack, Text, Title } from '@mantine/core';
import { RouterAnchor } from '../../components/RouterAnchor';

export const Route = createFileRoute('/faq')({
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
          <Title c="#ffecb3" ta="center">
            Frequently Asked Questions
          </Title>
          <Text size="lg" ta="center" c="gray.5" fw={500}>
            What would you like to know?
          </Text>
        </Stack>
        <Container
          mt={30}
          w={{
            base: '100%',
            sm: 600,
            md: 800,
            lg: 900,
            xl: 1000,
          }}
        >
          <Accordion
            chevronPosition="right"
            variant="separated"
            w="100%"
            styles={{
              item: { border: 'none', width: '100%' },
            }}
          >
            <Accordion.Item value="when" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  When is the convention?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  SAFC 2026 is being held from Friday 7th to Monday 10th August 2026. With Monday
                  being a public holiday in South Africa, that weekend is long weekend!
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="venue" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Where is the convention being held?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  SAFC 2026 is hosted at Shumba Valley Lodge, a short distance from Lanseria
                  Airport. Visit Shumba Valleys website here:{' '}
                  <Anchor
                    href="https://shumbavalleylodge.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://shumbavalleylodge.co.za/
                  </Anchor>
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="howmuch" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  How much are tickets?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  The SAFC convention offers accommodation and catering for its attendees for the
                  duration of the weekend. The basic Attendee ticket will secure your entrance to
                  the convention and some basic accreditation, but if you feel like helping out the
                  convention while getting some exclusive swag in return, you can opt for a Sponsor,
                  Super Sponsor or, if you're feeling incredibly generous, a Mythic Sponsor ticket.
                </Text>
                <Text>
                  <p>
                    A few add-ons to customize your stay is also available at our store (
                    <Anchor
                      href="https://portal.south-afrifur.co.za/shop/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://portal.south-afrifur.co.za/shop/
                    </Anchor>
                    ) If you would like to see what SAFC has to offer without needing accommodation,
                    you can purchase our Weekend Pass ticket.
                  </p>
                </Text>
                <List>
                  <List.Item>Weekend Pass: R850</List.Item>
                  <List.Item>Attendee ticket: R4,250</List.Item>
                  <List.Item>Sponsor ticket: R5,500</List.Item>
                  <List.Item>Super Sponsor ticket: R6,750</List.Item>
                  <List.Item>Mythic Sponsor ticket: R12,000</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="morethanone" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Can I buy more than one ticket?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Yes, one person can buy more than one ticket for themselves and others, however,
                  it is vitally important that the information requested when purchasing the ticket
                  be entered as correctly as possible for each individual attendee. We require
                  information such as ID number, emergency contact details and warnings about food
                  allergies or dietary restrictions for each person attending the convention.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="arrivaltime" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  When do we need to arrive at and leave the venue?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Registration and hotel check-in opens at 14:00 on Friday 7th August. If you will
                  be arriving much later, please ask reception to contact one of the admins to check
                  you in, or you can message one of the admins via our Telegram channels. Attendees
                  who are staying at the venue are required to check out at 10:00 on Monday 10th
                  August, per venue regulations. Breakfast is included for Monday.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="shuttleservice" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Are there shuttle services available?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Shumba Valley Lodge offers a shuttle service to and from Lanseria Airport. These
                  shuttles need to be arranged directly with the hotel.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="rules" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Where are the rules?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  The <RouterAnchor to="/rules">rules and guidelines</RouterAnchor> can be found
                  under the "Rules" tab on the main navigation bar. Please make sure to read them
                  carefully before attending the event.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="sales" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  When will tickets go on sale?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  A round of early-bird tickets will go on sale on the 6th of March 2026. These
                  early-bird tickets will be Sponsor, Super Sponsor and Mythic sponsor tickets only,
                  as well as 2 single-room supplements. The full range of tickets, including
                  Attendee and Weekend Visitor tickets, will be available from the 20th of March
                  2026, when tickets of all levels will be available until we can no longer
                  accommodate more guests staying at the venue. When space is no longer available,
                  this information will be announced via our channels.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="partialpayment" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Can I secure my ticket with a partial payment?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Unfortunately, tickets can only be secured upon full payment. We need to secure
                  venue fees and merch as soon as we can, so we prioritize full payments. If you
                  would like to pay in part, though, you can use the "Wallet" feature on your
                  account page to add money to your account, and when you do purchase a ticket,
                  those funds will be subtracted from your total. Please note that all ticket sales
                  and wallet contributions are final and nonrefundable.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="roomwithpartner" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Can I room with my partner/friend?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  When you purchase your ticket, you can enter details on who you want to room with.
                  At Shumba Valley, the majority of the available rooms are suited for 2 people. If
                  you're looking to room with more than one person, we have a very limited amount of
                  group booking options available. If you have any special rooming requirements
                  (such as accessibility for impaired movement, cold storage for medication, etc.),
                  please make sure to specify this information as well.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="securedetails" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Are my private details secure?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  SAFC, it's admin, Hotel Admin, and YOCO do not share any information, outside of
                  that consented in writing by you, due to basic respect for our Attendees and to be
                  in line with the POPI Act.
                </Text>
                <Text mt="md">
                  For more information on our Privacy Policy, please visit the{' '}
                  <RouterAnchor to="/privacy">Privacy Policy page</RouterAnchor>.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="personalinfo" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Why do you need all this personal information?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Some personal details are required to secure your booking. We will need your full
                  legal name, ID number and phone numbers for emergency contacts, so we have someone
                  to call when you need to receive emergency care or to be admitted to a hospital.
                  It’s also important that your emergency contact knows your medical history and
                  insurance details. It is crucial to the safety of our attendees, and these details
                  will only be accessed in case of an emergency.
                </Text>
                <Text mt="md">
                  For more information on our Privacy Policy, please visit the{' '}
                  <RouterAnchor to="/privacy">Privacy Policy page</RouterAnchor>.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="larp" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Can I bring my cosplay props or LARPing equipment?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Yes, you may bring those along, provided that they are not considered a weapon. We
                  do reserve the right to deny entry with props that could inflict grievous bodily
                  injuries. We will rely on our common sense when judging these props and items, and
                  we trust you will too.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="fursuit-handlers" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Do fursuiters really need a handler?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We cannot reasonably expect a handler to accompany a fursuiter everywhere around
                  the con. If you are new to fursuiting, your head/mask has a narrow field of view,
                  or you are traversing tricky terrain, please ask your handler or a nearby person
                  to help you out. We ask that you practice common sense with regards to this rule,
                  but we will be strict about any damage inflicted to property or person alike. If
                  you think you need a handler, get a handler.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="upgrade-ticket" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Can I upgrade my ticket last-minute?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Ticket upgrades are not handled automatically. If you wish to upgrade a ticket,
                  please reach out to us at admin@south-afrifur.co.za or via one of our digital
                  channels. There will be a hard cut-off to finalize your ticket level (roughly the
                  start of June 2026), after which no more upgrades will be accepted. Our custom
                  merchandise that is offered as gifts to sponsors requires a lot of lead time, and
                  getting these completed before the con is important to us. We want to ensure that
                  everyone who helps out the con by sponsoring us, gets the rewards they were
                  promised.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="custom-badges" bg="transparent">
              <Accordion.Control>
                <Title c="#ffecb3" order={4} mb="sm">
                  Will there be custom badges?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Organizing custom name badges with individually submitted art proved to be a
                  nightmare! You will receive a badge for the con with your fursona name and some
                  important information on it, but no custom or submitted art will be printed on it.
                  We do strongly encourage you to contact one of our local artists (even your
                  favourite international artist!) to commission a custom badge for you.
                </Text>
                <Text mt="lg">
                  If you have any special needs that you would like staff members or
                  convention-goers to note, consider having a badge for that as well. These could be
                  statements like, "Please ask before hugging," "No physical contact," "I am hearing
                  impaired," or "No photos without permission." If it will make your interactions
                  with others easier, consider making a badge for it to help us make you more
                  comfortable!
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </Stack>
    </Center>
  );
}
