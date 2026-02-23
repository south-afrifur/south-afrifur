import { createFileRoute } from '@tanstack/react-router';
import { Center, Container, Group, List, Stack, Text, Title } from '@mantine/core';

export const Route = createFileRoute('/learn/')({
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
          <Container size="md">
            <Stack mb={50}>
              <Group wrap="nowrap">
                <Stack mb={50}>
                  <Title c="#ffecb3" order={2} style={{ alignSelf: 'center' }} mb="md">
                    What To Expect
                  </Title>
                  <Text c="gray.3" size="md">
                    Every year, we strive to make SAFC a great destination for local and
                    international furries to visit. Our event is a space where the members of the
                    local furry fandom can meet new people, reconnect with friends, and spend a
                    weekend reveling in their shared interest in anthropomorphic characters and
                    media. There are events to take part in, photo opportunities with friends and
                    fursuiters, people to trade sketches and stickers with, and fursuiters to admire
                    and take pictures with.
                  </Text>
                  <Text c="gray.3" fw={500} size="md">
                    While some events and services change year to year, you can reliably expect the
                    following:
                  </Text>
                  <List spacing="sm">
                    <List.Item>
                      The Dealers' Den, where local furry artists offer a variety of unique creative
                      wares and services to all convention attendees
                    </List.Item>
                    <List.Item>
                      The Fursuiter Lounge, where those with fursuits can get dressed in private, as
                      well as take a break, cool down, rehydrate and recharge during the day
                    </List.Item>
                    <List.Item>
                      Our yearly raffle, where we sell tickets to win prizes donated by the local
                      furry community, and all proceeds from the raffle are donated to a local
                      charity
                    </List.Item>
                    <List.Item>
                      Karaoke night, for those who want to show off their singing, or get some
                      friends to sing along
                    </List.Item>
                    <List.Item>
                      The Rave, for those who want to shake their tails on the dance floor
                    </List.Item>
                    <List.Item>
                      Panels and talks from folks wanting to share their knowledge of all kinds of
                      furry-adjacent topics
                    </List.Item>
                    <List.Item>
                      Fursuit Games, to pit the fursuiters against each other for prizes and
                      bragging rights
                    </List.Item>
                    <List.Item>
                      Sudan's Quiz, to test your knowledge of all those creatures that make up your
                      hybrid fursona
                    </List.Item>
                    <List.Item>
                      Movie night, to wind down and enjoy some of our favourite films (we also have
                      fresh popcorn!)
                    </List.Item>
                  </List>
                </Stack>
              </Group>
              <Group wrap="nowrap">
                <Stack mb={50}>
                  <Title c="#ffecb3" order={2} style={{ alignSelf: 'center' }} mb="md">
                    Traveling & Budgeting
                  </Title>
                  <Text c="gray.3" size="md">
                    While our event venue is not completely fixed, we try to keep it close to major
                    transport hubs, such as Lanseria airport or Gautrain stations. At worst, a ride
                    from an e-hailing app like Bolt or Uber will get you to the venue. If you are
                    staying at an overflow accommodation venue, you can use the shuttle to travel
                    between it and the event venue. If you choose to purchase a day pass or a
                    weekend pass, you will have to make your way to the convention space by
                    yourself. We do not offer shuttles between the venue and any nearby transit
                    hubs.
                  </Text>

                  <Text c="gray.3" fw={500} size="md">
                    When planning your budget for SAFC, here are a few tips to consider:
                  </Text>
                  <List spacing="sm">
                    <List.Item>
                      The Dealer’s Den has a wide variety of items for sale, ranging from stickers
                      and small trinkets to partial or full fursuits. Take some time to decide what
                      your budget for art, merchandise and other swag will be for the weekend.
                    </List.Item>
                    <List.Item>
                      The hotel or venue will have its own services available for you to make use
                      of. This could include a bar or an a la carte restaurant. If you are planning
                      on purchasing any food or drink from the venue itself (outside of the included
                      meals with select tickets), please budget accordingly. Note that drinks are
                      usually priced slightly higher than standard pub prices.
                    </List.Item>
                    <List.Item>
                      Depending on the venue, other “adventure” activities might also be made
                      available. These activities are paid for separately, and are not handled by
                      SAFC. If any of the activities offered by the venue appeal to you, remember to
                      budget for those as well.
                    </List.Item>
                  </List>
                </Stack>
              </Group>
              <Group wrap="nowrap">
                <Stack mb={50}>
                  <Title c="#ffecb3" order={2} style={{ alignSelf: 'center' }} mb="md">
                    Hotel & Accommodation
                  </Title>
                  <Text c="gray.3" size="md">
                    The accommodation for SAFC is arranged as part of your ticket. All tickets sold
                    at Attendee, Sponsor, Super Sponsor and Mythic Sponsor levels include
                    accommodation and 2 complimentary meals at the event venue. Sometimes, we resort
                    to overflow accommodation, but the meals are still included. When overflow
                    accommodation is used, a shuttle service is provided between the overflow venue
                    and the event venue.
                  </Text>

                  <Text c="gray.3" size="md">
                    Because our accommodation space at the venue is limited, we might limit the
                    number of tickets that include accommodation on-site. Because of the limited
                    space, we also cannot guarantee rooms that will not be shared. But we do allow
                    attendees to mark which other attendees they would like to room with, and we do
                    our utmost to fulfill these requests. If you don’t get accommodation at the
                    event, or prefer to stay on your own, don’t worry! There are usually other
                    accommodation options available in the immediate area.
                  </Text>
                </Stack>
              </Group>
              <Group wrap="nowrap">
                <Stack mb={50}>
                  <Title c="#ffecb3" order={2} style={{ alignSelf: 'center' }} mb="md">
                    First Time At Con
                  </Title>
                  <Text c="gray.3" size="md">
                    If it’s your first time at an SAFC convention event, welcome and thank you for
                    joining us! Our convention is still relatively small, so if you’ve been part of
                    the local furry fandom, you will most likely see some familiar faces. Reach out
                    to friends and ask if any of them are going, and meet them there. Alternatively,
                    sit in on one of our events or panels, or browse around the Dealer’s Den;
                    perhaps you’ll find someone there who shares your interests.
                  </Text>
                </Stack>
              </Group>
              <Group wrap="nowrap">
                <Stack mb={50}>
                  <Title c="#ffecb3" order={2} style={{ alignSelf: 'center' }} mb="md">
                    Things To Pack
                  </Title>
                  <Title c="gray.3" size="md">
                    Packing for a furry convention is not much different than packing for any other
                    getaway. Here is a list of recommended things to bring:
                  </Title>
                  <List spacing="sm">
                    <List.Item>
                      Comfortable shoes: You’ll be walking around quite a bit and maybe even taking
                      part in some of the games or activities, so make sure you have some comfy,
                      well-fitting shoes to wear.
                    </List.Item>
                    <List.Item>
                      Toiletries: While the hotel or venue might offer complimentary soaps and
                      shampoos, it’s best to bring your own toiletries; toothbrush, toothpaste,
                      shower products, deodorant, and anything else to keep you clean.
                    </List.Item>
                    <List.Item>
                      It is vital to pack any important daily medication, and keep them in an
                      easy-to-find, easy-to-reach place. Bringing some common over-the-counter
                      medication is also advised, such as antihistamines, pain killers or aspirin.
                      Only basic first aid is available at the venue.
                    </List.Item>
                    <List.Item>
                      Payment cards or cash: If you’re planning on buying some SAFC merch, we’ve
                      gone fully cashless. Other Dealer’s Den vendors and the venue’s facilities
                      might accept cash, so bringing a few Rand in notes might save you some
                      headache.
                    </List.Item>
                    <List.Item>
                      Chargers and power banks: If you’re planning on taking a lot of photos or
                      videos, it’s important to keep your devices charged, whether that’s in your
                      room or on the go.
                    </List.Item>
                    <List.Item>
                      Folders or books for art: If you’re planning to bring home some artwork, or
                      get someone to do a quick sketch for you, it’s good to keep a sketchbook or a
                      plastic folder on hand to transport artwork.
                    </List.Item>
                    <List.Item>
                      Reusable water bottle: While it might not be the peak of summer, it could
                      still get warm out there. Make sure you stay hydrated!
                    </List.Item>
                  </List>
                  <Title c="gray.1" order={5} mt="md">
                    For fursuiters, we recommend you bring the following:
                  </Title>
                  <List spacing="sm">
                    <List.Item>
                      Fursuit parts, accessories and props: If you’re going to be fursuiting,
                      remember to bring everything you’ll need for your performance and any possible
                      photo ops.
                    </List.Item>
                    <List.Item>
                      Cleaning kit: When you take off your suit, it’s good to give it a good
                      wipe-down and brush. Make sure you bring enough cleaning fluid and something
                      to brush your fur out.
                    </List.Item>
                    <List.Item>
                      Repair kit: Although we hope it doesn’t happen, it’s good to have a small
                      sewing kit or glue gun on hand to fix any minor damage to your suit. Our
                      fursuit lounge offers some basic repair tools for fursuits as well, but it’s
                      good to make sure you’re covered.
                    </List.Item>
                    <List.Item>
                      Cooling wear: Whether it’s “under-skin”, a cooling setup, or even just a
                      bottle of ice-cold water, we recommend you have something on hand to keep the
                      heat in check under all that fluff!
                    </List.Item>
                  </List>
                </Stack>
              </Group>
              <Group wrap="nowrap">
                <Stack mb={50}>
                  <Title c="#ffecb3" order={2} style={{ alignSelf: 'center' }} mb="md">
                    Guide For Kids & Parents
                  </Title>
                  <Text c="gray.3" size="md">
                    For kids and teens (anyone under the age of 18), SAFC gives you the chance to
                    see the local furry community coming together and celebrating the imagination
                    and shared joy of our favourite hobby. You'll be able to buy merchandise from
                    the local furry creators, see fursuiters entertaining people and competing in
                    games, and take part in the activities yourself. You don't need a fursuit to
                    join in, but if you do, this is the chance to show it off!
                  </Text>
                  <Text c="gray.3" size="md">
                    For parents and guardians of furry kids, SAFC offers a safe place where the
                    local furry fandom meet up and see that the hobby is inclusive of all ages and
                    people.
                  </Text>
                </Stack>
              </Group>
              <Group wrap="nowrap">
                <Stack mb={50}>
                  <Title c="#ffecb3" order={2} style={{ alignSelf: 'center' }} mb="md">
                    What is a furry?
                  </Title>
                  <Text c="gray.3" size="md">
                    The label of "furry" can mean many different things to different people, but the
                    most common definition is someone who enjoys media that features animal
                    characters with human characteristics, or anthropomorphic characters. Think of
                    characters like Bugs Bunny or Jake the Dog, movies like The Lion King and
                    Zootopia, and books like the Eragon or Redwall series.
                  </Text>
                  <Text c="gray.3" size="md">
                    Some people like the idea of furry characters so much that they will create an
                    animal-like character of their own, known as a "fursona". This fursona can then
                    be made into stories or art, they could be used as an online moniker or
                    personality, or they can even manifest in the real world as a hand-crafted
                    costume known as a "fursuit".
                  </Text>
                  <Text c="gray.3" size="md">
                    While the idea of "being a furry" seems like a new concept, the furry fandom has
                    been around for decades, even predating the rise of the internet. The rise in
                    popularity over recent years has shone more light on our favourite hobby, and
                    more people from outside the fandom are showing interest or asking questions. If
                    this topic interests you, we recommend checking out FurScience.com, a website
                    maintained by the International Anthropomorphic Research Project (yes, this is
                    real). It offers a lot of resources for newcomers and parents of kids who are
                    getting into the furry scene, as well as hosting peer-reviewed research papers
                    about the furry subculture.
                  </Text>
                </Stack>
              </Group>
            </Stack>
          </Container>
        </Stack>
      </Center>
    </Stack>
  );
}
