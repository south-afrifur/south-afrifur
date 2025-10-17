import { createFileRoute } from '@tanstack/react-router';
import { Center, Container, Image, Stack, Text, Title } from '@mantine/core';
import { PastEventCard } from '../../../components/PastEventCard';

export const Route = createFileRoute('/about/charity')({
  component: RouteComponent,
});

const charityData = {
  twoOceans: {
    title: 'Two Oceans Aquarium Foundation',
    mediaComponent: (
      <Center h="100%">
        <Image bg="white" src="/twooceans.svg" w="100%" />
      </Center>
    ),
    descriptionLines: [
      `Founded in 2019 by the Two Oceans Aquarium, the Two Oceans Aquarium Foundation is a registered non-profit and public benefit organisation dedicated to ocean education, conservation, and research. The Foundation provides engaging, curriculum-based marine education for learners, as well as sustainability-focused programmes for adults. Its conservation efforts support the protection of five of the world’s seven sea turtle species, advance marine animal welfare, and foster collaborative research with universities and conservation partners.`,
      `Funds went to adopting four adorable turtle hatchlings. Khornflakes, Plakkie, Zakhile and Indaba, who will be rehabilitated and eventually released into the wild. When we receive any future updates on their progress, we will pass it on to the community. Join our community to stay updated on their journey!`,
    ],
    subTitle: 'Total Raised: R28,000',
  },
  imagine: {
    title: 'Imagine Animal Dreams',
    mediaComponent: (
      <Center h="100%">
        <Image src="/imagine-animal-dreams.jpg" w="100%" />
      </Center>
    ),
    descriptionLines: [
      `Imagine Animal Dreams (Kuilsrivier, Western Cape) is a small, heartfelt shelter run from a farm by a dedicated retiree. Despite limited resources, this haven opens its doors to abandoned and neglected animals and pets from the surrounding areas, giving them a safe place to rest, heal, and eventually find their forever homes.`,
      `Their mission is built on empathy and action, showing that every small effort can create meaningful change, not only for the animals but also for the people who love them.`,
    ],
    subTitle: 'Total Raised: R20,000',
  },
  pact: {
    title: 'P.A.C.T - (Phoenix Animal Care & Treatment)',
    subTitle: 'Total Raised: R8,580',
    mediaComponent: (
      <Center h="100%">
        <Image src="/pact.png" w="100%" />
      </Center>
    ),
    descriptionLines: [
      `Phoenix Animal Care & Treatment (P.A.C.T) was established in March 2012 as a non profit organisation dedicated to providing care and medical treatment for animals in the Phoenix area.`,
      `Mission Statement: `,
      `What we aim for. If an animal is found to be abused or neglected we will remove the animal from the home. Where homing or re-homing is required we will enlist the assistance of our animal network (consisting of a number of animal organisations in South Africa), and will relentlessly do our best to find a home.`,
    ],
  },
  cheetah: {
    title: 'Cheetah Experience',
    subTitle: 'Total Raised: R6,820',
    mediaComponent: (
      <Center h="100%">
        <Image src="/cheetah.png" w="100%" bg="white" maw={500} />
      </Center>
    ),
    descriptionLines: [
      `Cheetah Experience is a registered non-profit endangered species breeding centre, originally based in Bloemfontein but in March 2021 we finalized the move of the facility to to Bela Bela, Limpopo.`,
      `Mission Statement:`,
      `We are home to a number of endangered and threatened species, including cheetahs, leopards, male non-breeding lions, servals, caracals, African wildcats, wolves, meerkats and a Siberian tiger. Our project takes in rescued animals from the local area, so we also have various animals from time to time, including a goat and chickens.`,
      `At Cheetah Experience, our animals come first, and everything we do is for our animals. Our current focus is to ensure that our Cheetah Breeding project aids in the conservation of the Cheetah, by using the DNA samples taken from our Cheetahs to maintain genetic diversity.`,
      `We work along-side other ethical and responsible projects to help secure the Cheetahs future survival. From a study in 2016, the global population of the cheetah is estimated at ~7,100 individuals, and confined to 9% of their historical distributional range.`,
    ],
  },
  jagumaro: {
    title: 'Jugomaro Predator Park',
    subTitle: 'Total Raised: R6,600',
    mediaComponent: (
      <Center h="100%">
        <Image src="/jagumaro.png" w="100%" bg="white" maw={500} />
      </Center>
    ),
    descriptionLines: [
      `Jugomaro has relocated to Vaalwater, based in the Limpopo province from the old premises which was previously located in Krugersdorp. It's been a long process but we've successfully set up all the cat's enclosures and are now officially opened to the public as of Sept 2018.`,
      `Mission Statement:`,
      `Each and every one of our animals forms part of our Jugomaro Pride, and we treasure the opportunity that we are granted to appreciate their quirks and uniqueness on a daily basis. Once you've met our "Pride", you'll know what we're talking about….`,
    ],
  },
  huskyRescue: {
    title: 'Husky Rescue',
    subTitle: 'Total Raised: R12,000',
    mediaComponent: (
      <Center h="100%">
        <Image src="/husky.jpg" w="100%" bg="white" maw={500} />
      </Center>
    ),
    descriptionLines: [
      `Husky Rescue SA is a non-profit, all-volunteer rescue and adoption organization that has developed a rescue program to accommodate unwanted, abandoned and very often abused dogs.  We work across South Africa and have a Haven situated in Farmall, Johannesburg, the animals featured on our website are in our Haven and also across various locations around the country.`,
      `Mission Statement:`,
      `We aim to provide a better alternative to euthanasia through utilizing our Haven, Kennels and Foster Homes to care and rehabilitate animals while a suitable home is found for them. HRSA aims to build awareness around the specific needs of these breeds in a proactive drive to decrease the amount of stray, abandoned and abused Huskies.`,
      `Together we can achieve Husky Rescue SA’s vision to encourage more widespread and extensive use of reproductive control strategies to reduce the numbers of unwanted, abandoned, and neglected Huskies and other Nordic Breeds; to foster greater awareness and appreciation among the public for the value of animals in society and the human animal bond and to enhance and improve the delivery of education on proper care and husbandry of Huskies to the public.`,
    ],
  },
  huskyRescueKZN: {
    title: 'Husky Rescue KZN',
    subTitle: 'Total Raised: R17,000',
    mediaComponent: (
      <Center h="100%">
        <Image src="/huskyKZN.png" w="100%" bg="white" maw={500} />
      </Center>
    ),
    descriptionLines: [
      `Husky Rescue KZN rescues stray and unwanted huskies as far as our capacity and financial resources allows us to, and facilitates great Public Walks with the Huskies, Schools Educational Visits and Corporate events. We treat, sterilize, microchip, rehabilitate and foster these huskies until we can find appropriate homes for them.`,
      `Mission Statement:`,
      `Given their unique nature and needs, our adoption process is very strict. We take care of an average of 50 huskies at any given time. The running costs of taking care of our dogs are nothing short of R52 000 a month.`,
      `Sometimes they are with us for as short a time as a week. Most of our dogs are with us for several months before we find them a good home. Some of our rescues have been with us since 2010 – we call them our Golden Oldies.`,
    ],
  },
};

function RouteComponent() {
  return (
    <Center mt={'xl'}>
      <Stack w="100%" gap={70} align="center">
        <Stack>
          <Title c="gray.1" ta="center">
            Our Charities
          </Title>
          <Text size="lg" ta="center" c="gray.5" fw={500}>
            Supporting Love ❤️
          </Text>
          <Container mt="xl">
            <Text size="xl" fw={500} ta="center">
              All donations were collected from the convention, raffles and donations...The
              convention aims to support at least one deserving small charity organisation each year
              with funds raised through the generous donations, raffles and auctions at the event.
              These charities often rely heavily on local communities to keep doing their tireless
              work, and SAFC would like to recognize and assist in these efforts!
            </Text>
          </Container>
        </Stack>

        <Container size="xl" w={'100%'}>
          <Stack gap={50}>
            <PastEventCard {...charityData.twoOceans} />
            <PastEventCard {...charityData.imagine} />
            <PastEventCard {...charityData.pact} />
            <PastEventCard {...charityData.cheetah} />
            <PastEventCard {...charityData.jagumaro} />
            <PastEventCard {...charityData.huskyRescue} />
            <PastEventCard {...charityData.huskyRescueKZN} />
          </Stack>
        </Container>
      </Stack>
    </Center>
  );
}
