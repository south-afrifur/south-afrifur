import { createFileRoute } from '@tanstack/react-router';
import { Center, Container, Divider, List, Stack, Text, Title } from '@mantine/core';
import { RouterAnchor } from '../../components/RouterAnchor';

export const Route = createFileRoute('/rules/')({
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
          <Title c="#ffecb3" order={2}>
            Our Policy
          </Title>

          <Text size="xl" fw={500} ta="center">
            The main goal of SAFC is for our attendees to have a fun experience. To that goal, we've
            developed these rules to ensure that everyone has as much fun as possible while staying
            safe and friendly. If you are a member of the media interested in filming,
            photographing, or otherwise capturing our event for publication, please see our{' '}
            <RouterAnchor to="/rules/media">Media Rules page</RouterAnchor> for guidelines.
          </Text>
          <Text ta="center" size="lg">
            For more information about our Privacy Policy -{' '}
            <RouterAnchor to="/privacy">Click here</RouterAnchor>
          </Text>

          <Divider my="xl" mb="lg" w="80%" />
          <Title c="#ffecb3" order={1} mb="xs">
            SAFC RULES
          </Title>
          <Container>
            <Stack mb={50}>
              <Title c="#ffecb3" order={3}>
                General Conduct
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>Follow all laws and be respectful to others</List.Item>
                <List.Item>If you don't have anything nice to say, don't say it.</List.Item>
                <List.Item>
                  Please don't block pathways and high-traffic areas; step to the side.
                </List.Item>
                <List.Item>
                  Actions causing disruption or discomfort to attendees, staff, or venue will result
                  in badge revocation and expulsion.
                </List.Item>
                <List.Item>
                  Placement of fliers, placards, or business cards is not permitted in any public
                  areas, including tables, bars, and hallways. Flyers must be distributed within our
                  convention space. Any postings outside of the con space, as well as any postings
                  that are offensive, inappropriate, or pornographic, will be removed.
                </List.Item>
                <List.Item>
                  Remember that we are hotel guests and must respect both the hotel and our own
                  policies. Please keep in mind that your behavior and appearance will give them
                  their first impression of the furry fandom. Respect their personal space and avoid
                  approaching them unless they welcome you for a photo/hug/etc.
                </List.Item>
                <List.Item>
                  Be respectful to non-convention guests and staff, providing a positive impression
                  of the furry fandom. Avoid approaching them without their consent.
                </List.Item>
                <List.Item>
                  Please think about your own and others' safety; don't throw items, don't tackle
                  individuals from behind, and so on.
                </List.Item>

                <List.Item>
                  Please maintain proper hygiene. If you are the source of a noticeable odor, staff
                  may ask you to leave the con area.
                </List.Item>
                <List.Item>
                  Display of adult materials (such as signs, flyers, business cards, badges,
                  stickers, posters, and drawings, etc.) is not permitted in public areas of the
                  venue.
                </List.Item>
                <List.Item>
                  Lost or stolen items are not the responsibility of SAFC. Attendees should secure
                  their belongings and report any incidents to Con Staff.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Alcohol and Drugs
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Smoking and vaping are not permitted in or around the con space. Smokers are asked
                  to use designated smoking areas, properly dispose of cigarette butts, and comply
                  with any other venue rules.
                </List.Item>
                <List.Item>
                  Drink responsibly. You will be held accountable for your actions, whether under
                  the influence or not. Babysitting someone who has had too much to drink is a pain
                  for everyone. Also, don't drink and drive. Intoxicated persons may be removed from
                  the convention venue and risk expulsion from the convention.
                </List.Item>
                <List.Item>
                  Although marijuana is legal in South Africa, according to venue policy, no
                  marijuana products are permitted anywhere within or outside the premises,
                  including the parking lot.
                </List.Item>
                <List.Item>
                  Never give anyone under the age of 18 access to alcohol or drugs. Possession or
                  distribution of illegal or controlled substances will result in expulsion from the
                  convention and may be reported to local authorities.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Minors
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Anybody under the age of 16 must be accompanied by a legal guardian or adult at
                  all times. The guardian must purchase a badge, however children under the age of
                  16 are free.
                </List.Item>
                <List.Item>
                  Anybody 16 or 17 years old must have a signed and notarized parental consent
                  document to obtain their badge. (No notary is required if your parent(s) can
                  accompany you to registration and sign the form in person.)
                </List.Item>
                <List.Item>
                  Minors are never permitted to enter areas reserved for adults.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Medical Emergencies
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  For life-threatening emergencies, dial 10111. Seek immediate help in cases of
                  dangerous drug reactions or overdoses, including your own.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Harassment, Hate Speech, and Symbols
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Threats, harassment, and stalking will not be tolerated and will result in instant
                  badge revocation and expulsion from the premises.
                </List.Item>
                <List.Item>
                  If you are ever feeling threatened or harassed, clearly tell them to stop, and go
                  to the Con Operation Room and remember that costumes, no matter how they appear,
                  do not indicate consent.
                </List.Item>
                <List.Item>
                  Speech promoting or encouraging discrimination, harassment, or violence based on
                  race, ethnicity, gender identity, sexual orientation, age, religion, or
                  nationality is strictly prohibited.
                </List.Item>
                <List.Item>
                  Wearing, displaying, or propagating symbols associated with hate groups or
                  organizations that promote discrimination, harassment, or violence is not allowed.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Registration and Badges
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Attendees must display their badge at all times in convention-exclusive areas.
                  Fursuiters are not required to wear their badge openly but must have it with them.
                </List.Item>
                <List.Item>
                  SAFC convention-exclusive areas are open only to registered attendees, who are
                  identified by their attendance badge. A badge is valid only for the person to whom
                  it was issued and may not be shared.
                </List.Item>
                <List.Item>
                  Badges must be presented and/or surrendered to staff members upon request.
                  Changing or obscuring information on your badge is not allowed, and the lanyard
                  issued with your badge must not be changed to one of a different color.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Dress Code
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  All attendees, including fursuiters, are required to wear appropriate attire at
                  all times.
                </List.Item>
                <List.Item>
                  Overly revealing, inappropriate to the atmosphere of the convention, or likely to
                  draw reasonable complaints or offense, will not be allowed. This includes clothing
                  or accessories that are obviously fetish-related.
                </List.Item>
                <List.Item>
                  Nudity, partial nudity, or overly revealing costumes are not allowed in any
                  convention areas, including public spaces and the fursuit lounge.
                </List.Item>
                <List.Item>
                  Wearing racist or offensive symbols, such as armbands, constitutes harassment and
                  will be prohibited; you will be asked to remove such objects.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Weapons
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  There will be no firearms of any type. There will be no nerf weapons, water guns,
                  neon-colored guns, bow and arrows, etc.. There are no sharp edges or points
                  allowed.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Fursuiters
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Keep in mind that fursuiters have very restricted visibility and may not see you
                  even if they appear to be looking at you.
                </List.Item>
                <List.Item>
                  Fursuiters must have a handler to assist with navigation and interactions,
                  ensuring their safety and that of others.
                </List.Item>
                <List.Item>
                  Fursuits with large protrusions or extensions should exercise caution when
                  navigating through areas with limited clearance or short entrances. If necessary,
                  remove any detachable or fragile parts of your fursuit before entering areas with
                  low clearance.
                </List.Item>
                <List.Item>
                  Please be mindful of your surroundings and avoid causing any damage to the venue
                  or your fursuit.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Music
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Speakers must be switched off in areas where other people cannot walk away from
                  them, such as inside rooms, when waiting in a line, in the Dealers Den, near a
                  stage, or in a panel room. In areas where people can walk away from you, your
                  music must always be quiet enough to talk over without raising your voice.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Photography and Audiovisual Recording
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  By attending SAFC, you grant our staff members permission to photograph you in the
                  convention area for promotional purposes only. We will always attempt to ask
                  first, but you may still be in the background.
                </List.Item>
                <List.Item>
                  If you see yourself in one of our promotional photos and wish to be removed,
                  please let us know and we will gladly blur you out or use a different image.
                </List.Item>
                <List.Item>
                  You have no claim or ownership over any photographs taken by convention staff for
                  promotional purposes.
                </List.Item>
                <List.Item>
                  Everyone may shoot images and videos for personal and non-commercial purposes.
                  Please make every effort not to photograph or video those who do not wish to be
                  photographed.
                </List.Item>
                <List.Item>
                  Always ask the main subject if a photograph is acceptable, and be prepared to blur
                  or eliminate background individuals if they request it.
                </List.Item>
                <List.Item>
                  Cameras are not permitted in several places of the convention, including the
                  Fursuit Lounge and the Art Gallery. If you witness someone shooting photos or
                  video for commercial purposes (such as news articles), please report them to Con
                  Operations.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Policy Revisions
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  SAFC staff will make every effort to ensure that our attendees are safe. It is,
                  however, impossible to anticipate every potential source of injury or accident. By
                  attending the con, you agree to indemnify and hold harmless the con and its staff
                  from and against any and all claims, demands, actions, causes of action, losses,
                  damages, lawsuits, including reasonable attorneys' fees and court expenses, caused
                  by, related to, or arising out of the con's operation. The liability of SAFC is
                  limited to the cost of attendance.
                </List.Item>
                <List.Item>
                  We reserve the right to change or add to these policies at any time, and you are
                  always responsible for following the most recent version of these policies. We
                  will make every effort to notify you of any significant policy changes.
                </List.Item>
                <List.Item>
                  We want to make the con a pleasant and secure environment for everyone. Report
                  anything you see to Con Staff. The most effective approach to have a problem fixed
                  is to notify Con admins or Con staff members.
                </List.Item>
                <List.Item>
                  These policies extend to SAFC's online presence, including social media platforms
                  like Telegram, Twitter, Facebook, Instagram, and community-based platforms such as
                  Discord.
                </List.Item>
                <List.Item>
                  Respectful behavior, appropriate content sharing, and adherence to
                  platform-specific guidelines are expected. Violations may result in temporary or
                  permanent removal from online spaces associated with SAFC.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Fursuit Lounge Rules
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Be respectful to everyone who uses the lounge. Do not engage in behavior that is
                  disruptive, disrespectful, or inappropriate.
                </List.Item>
                <List.Item>
                  Only fursuiters and their handlers are allowed to enter the lounge. Please do not
                  allow non-fursuiters to enter.
                </List.Item>
                <List.Item>
                  Please keep the lounge clean and tidy. Once you leave the lounge, ensure that you
                  have cleaned up after yourself and put away any items you may have used.
                </List.Item>
                <List.Item>
                  Do not take or use other con-goers' personal belongings without their permission.
                  Please be respectful of other attendees' property.
                </List.Item>
                <List.Item>
                  Please do not peek into any dressing rooms or private areas of the lounge.
                  Everyone deserves their privacy, and invading someone's personal space is not
                  acceptable.
                </List.Item>
                <List.Item>
                  Remember that you are responsible for your own items and fursuit while they are in
                  the lounge. The convention is not liable for any lost or stolen items.
                </List.Item>
                <List.Item>
                  The lounge will be locked at midnight every night and will reopen the next morning
                  at 8AM. Please ensure that you have removed your belongings and fursuit before the
                  lounge is locked.
                </List.Item>
                <List.Item>
                  Finally, please report any suspicious or concerning behavior to a staff member
                  immediately. Safety is our top priority, and we want everyone to feel comfortable
                  and secure in the fursuit lounge.
                </List.Item>
              </List>
            </Stack>
          </Container>
        </Stack>
      </Center>
    </Stack>
  );
}
