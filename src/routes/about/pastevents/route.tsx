import { createFileRoute } from '@tanstack/react-router';
import { Center, Container, Image, Stack, Text, Title } from '@mantine/core';
import { PastEventCard } from '../../../components/PastEventCard';

export const Route = createFileRoute('/about/pastevents')({
  component: RouteComponent,
});

const pastEventData = {
  2025: {
    title: 'SAFC 2025',
    mediaComponent: <Image src="/safc2025cosmo.webp" h="100%" />,
    descriptionLines: [
      `Our 2025 theme, Underwater Odyssey, transformed Valverde into an aquatic wonderland, complete with rippling lights, floating jellyfish decorations, and immersive oceanic experiences. With our excellent volunteer crew, as always, we hosted a fantastic event with 99 resident attendees and 58 day or weekend visitors.`,
      `This year, we used Pine Valley as a full overflow venue and introduced a standardized transport shuttle. The continued growth of the convention is a testament to the dedication of our team and the enthusiasm of our community.`,
      `We raised R28,000 through our charity drive, which was donated to the Two Oceans Aquarium Foundation. The funds went towards adopting four adorable rescued turtle hatchlings, lovingly named through a mix of community votes and mascot names: Zakhile, Plakkie, Khorneflakes, and Indaba.`,
    ],
  },
  2024: {
    title: 'SAFC 2024',
    descriptionLines: [
      `The circus came to town in 2024 with the theme “Midnight’s Edge.” It was presented as a vibrant daytime carnival that transformed into a spooky nighttime amusement park after sunset. For the first time, SAFC expanded beyond our main venue, Valverde Eco Hotel, welcoming a spillover venue at Pine Valley to accommodate our growing number of attendees.`,
      `The charity drive this year focused closer to home, raising R18,020, which was donated directly to the Valverde staff, who have supported us tirelessly over the years to make our convention a success. We are incredibly grateful for their dedication and hard work.`,
    ],
    mediaComponent: <Image src="/2024.jpg" h="100%" />,
  },
  2023: {
    title: 'SAFC 2023',
    descriptionLines: [
      `The 2023 convention saw a return to Valverde Eco Hotel with a spellbinding weekend themed “Magic Unleashed.” The venue was transformed into a glowing woodland wonderland, with lights twinkling through the trees and enchanting decorations creating a truly magical atmosphere. After the challenges of rebuilding in 2022, this fifth convention marked a turning point filled with creativity, laughter, and community.`,
      `From late-night chats under the fairy lights to the magic-themed fursuit parade, every moment was infused with wonder. Together, our attendees raised an incredible R20,000 for Imagine Animal Dreams.`,
    ],
    mediaComponent: <Image src="/2023.jpg" h="100%" />,
  },
  2022: {
    title: 'SAFC 2022',
    descriptionLines: [
      `The 2022 Convention was held at Valverde Eco Hotel and themed "Cyberpunk". After a 2-year involuntary break (thanks to the pandemic), we had an amazing 4th convention! Times were also challenging, after the recent loss of our founder, Ivic Wulfe, who will be dearly missed, but we managed to pull it off and look forward to an even better 2023 convention.`,
      `In 2018 we were officially listed as the highest donating furry convention in the world, we didn't look into this in 2019 but hope to get the official title again this year 🙂`,
    ],
    mediaComponent: <Image src="/2022.jpg" h="100%" />,
  },
  2019: {
    title: 'SAFC 2019',
    descriptionLines: [
      `The 2019 Convention was held at Ekudeni Exclusive Country Venue and themed 80's. We really raised the bar on this one and had great feedback from the attendees as a result! We managed to raise R17,000 that was donated to Husky Rescue KZN (last year we donated to Husky Rescue in Johannesburg), what an amazing improvement on an already amazing donation from last year!`,
      `In 2018 we were officially listed as the highest donating "per head" furry convention in the world, with R12,000 from 42 furs! This year we've broken our own record, raising an amazing R17,000 from only 52 furs that attended!`,
    ],
    mediaComponent: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/EAv5MlCtRvo"
        title="SAFC 2019 | South Afrifur Furry Convention"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  2018: {
    title: 'SAFC 2018',
    descriptionLines: [
      `The 2018 Convention was held at Getaway Coaches, situated 30 mins east of Pretoria (50 mins drive from Johannesburg O.R. Thambo Airport).`,
      `The venue offered accommodation in refurbished trains which fit in splendidly with the “Wild West” theme of the convention!`,
      `R3540 was raised between raffles and auctions held at the convention, and the committee contributed another R8640, making a total of R12,000 that was donated to Husky Rescue, thank you everyone!`,
    ],
    mediaComponent: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UYDZJ7S-ndM"
        title="SAFC 2018 | South Afrifur Furry Convention"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  2017: {
    title: 'SAFC 2017',
    descriptionLines: [
      `After months of planning, the 2017 convention went forward successfully - It was held at Magalies Retreat in Magaliesburg and had 28 attendees.`,
      `Activities included a welcoming braai and speech on the first evening, a small artists alley on Saturday followed by a scavenger hunt, obstacle course and gladiator arena, a games and social evening including cards against furmanity and a few others, followed by a movie night. On Sunday we had panels on furry literature and publishing (Erdwolf_TVL), Social Media and Furry.fm (Bravura from Switzerland, Ivic Wulfe and Scratch) and a panel on Fursuiting (Yote Fox). We also had a fursuit photoshoot, quiz afternoon and a raffle.`,
    ],
    mediaComponent: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3rhqa8ZcRTs"
        title="South Afrifur con 2017 official video|ZAFurries|Fursuits|"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
};

function RouteComponent() {
  return (
    <Center mt={'xl'}>
      <Stack w="100%" gap={70} align="center">
        <Stack>
          <Title c="gray.1" ta="center">
            Previous Events
          </Title>
          <Text size="lg" ta="center" c="gray.5" fw={500}>
            Amazing memories from our past conventions
          </Text>
        </Stack>

        <Container size="xl" w={'100%'}>
          <Stack gap={50}>
            <PastEventCard {...pastEventData[2025]} />
            <PastEventCard {...pastEventData[2024]} />
            <PastEventCard {...pastEventData[2023]} />
            <PastEventCard {...pastEventData[2022]} />
            <PastEventCard {...pastEventData[2019]} />
            <PastEventCard {...pastEventData[2018]} />
            <PastEventCard {...pastEventData[2017]} />
          </Stack>
        </Container>
      </Stack>
    </Center>
  );
}
