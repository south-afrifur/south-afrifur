import { createFileRoute } from '@tanstack/react-router';
import { Accordion, Center, Container, Stack, Text, Title } from '@mantine/core';

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
          <Title c="gray.1" ta="center">
            Frequently Asked Questions
          </Title>
          <Text size="lg" ta="center" c="gray.5" fw={500}>
            What would you like to know?
          </Text>
        </Stack>
        <Container mt={30} maw={700}>
          <Accordion
            chevronPosition="right"
            variant="separated"
            w="100%"
            styles={{
              item: { border: 'none' },
            }}
          >
            <Accordion.Item value="rules" bg="transparent">
              <Accordion.Control>
                <Title order={4} mb="sm">
                  Where are the rules?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  The rules can be found under the "Rules" tab on the main navigation bar. Please
                  make sure to read them carefully before attending the event.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="attendeesoldout" bg="transparent">
              <Accordion.Control>
                <Title order={4} mb="sm">
                  It says that attendee level is sold out!
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  The attendee level tickets will go on sale on 20 April. Tickets of all levels will
                  be available until we can no longer accommodate more guests staying at the venue.
                  When space is no longer available, this information will be announced.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="paymentsecure" bg="transparent">
              <Accordion.Control>
                <Title order={4} mb="sm">
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
                <Title order={4} mb="sm">
                  Can I room with my partner/friend?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  When you purchase your ticket, you can enter details on who you want to room with.
                  For the most part, rooms accommodate 3 or 4 people, so it will be inevitable that
                  you might encounter some new faces. However, we will honor rooming requests as
                  much as possible when specified, even across ticket tiers. If you have any special
                  rooming requirements (such as accessibility for impaired movement, cold storage
                  for medication, etc.), please make sure to specify this information as well.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="securedetails" bg="transparent">
              <Accordion.Control>
                <Title order={4} mb="sm">
                  Are my private details secure?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We collect some private information (legal name, phone number, etc.) purely for
                  administrative purposes and in case of emergency. As for banking or credit card
                  details, our payment provider, YOCO, is a trusted and fully compliant payment
                  platform, and your payment details will not be kept on our personal records.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="larp" bg="transparent">
              <Accordion.Control>
                <Title order={4} mb="sm">
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
                <Title order={4} mb="sm">
                  Do fursuiters really need handlers?
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
                <Title order={4} mb="sm">
                  Can I upgrade my ticket last-minute?
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We do not allow for upgrading of tickets at this time. We have custom merchandise
                  that is offered as gifts to sponsors, and getting these completed before the con
                  is important to us. Especially with loadshedding, we need a lot of lead time on
                  these products. We want to ensure that everyone who helps out the con by
                  sponsoring us, gets the rewards they were promised.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="custom-badges" bg="transparent">
              <Accordion.Control>
                <Title order={4} mb="sm">
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
