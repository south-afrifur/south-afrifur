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
            Welcome to the SAFC FAQ's and Rules. We appreciate you familiarising yourself with them.
            Please note that upon completing registration for an SAFC event, you have consented to
            these rules and to the required privacy data usage as stated in the Privacy Policy &amp;
            Data Usage and the Registration &amp; Badges sections. If you are a member of the media
            interested in filming, photographing, or otherwise capturing our event for publication,
            please see our <RouterAnchor to="/rules/media">Media Rules page</RouterAnchor> for
            guidelines.
          </Text>
          <Text size="md" ta="center">
            SAFC is a privately run entity, and reserves the right of admission for any
            events/socials that it hosts/runs. For the safety of our attendees, we will be
            considerate to the fact that, should there be a reasonable suspicion that any
            prospective attendee will act in ill/poor faith if allowed entry into the convention
            space, they will be barred from purchasing entry to the event or attending if purchase
            has already been made. While it is not our desire to exclude members of the fandom from
            SAFC events and social groups, at times it is sadly necessary. Circumventing a ban could
            lead to all parties involved facing future banning or restrictions.
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
              <Text>
                It is important to note that failure to follow these rules and the severity of the
                encroachment may lead to future bans and/or restrictions occurring after the fact.
              </Text>
              <List type="ordered" spacing={'xs'}>
                <List.Item>Follow all laws set out in this country, South Africa.</List.Item>
                <List.Item>
                  If you don't have anything nice to say, don't say it, be respectful of others and
                  avoid active provocations.
                </List.Item>
                <List.Item>
                  Actions causing disruption or discomfort to attendees, staff, or venue staff, will
                  result in badge revocation and expulsion from the premises.
                </List.Item>
                <List.Item>
                  Placement of flyers, placards, or business cards is not permitted in any of the
                  venue's public areas, including reception, restaurant, tables, bars, doors and
                  hallways. Flyers must be distributed within our convention space. Any postings
                  outside of the con space, as well as any postings that are offensive,
                  inappropriate, or pornographic, will be removed.
                </List.Item>
                <List spacing={'xs'} withPadding mt="xs">
                  <List.Item>
                    Display of adult materials (such as signs, flyers, business cards, badges,
                    stickers, posters, and drawings, etc.) is not permitted outside designated AD
                    ("After Dark") areas of the venue.
                  </List.Item>
                  <List.Item>
                    Pornographic, NSFW ("Not Safe For Work") and/or AD stickers left around the
                    venues will also be removed.
                  </List.Item>
                  <List.Item>
                    Repeated, or serious, infringements may lead to Rule 3 of the General Conduct
                    section taking effect.
                  </List.Item>
                </List>
                <List.Item>
                  Remember that we are hotel guests, and must respect both the hotel's policies as
                  well as our own. Please keep in mind that your behaviour and appearance will give
                  hotel staff, or other guests, their impression of the furry fandom. Respect their
                  personal space and avoid approaching hotel staff, or other guests, unless they
                  give clear indication for interaction with you for a photo/hug/etc. Avoid
                  approaching them without their consent, or initiating any provocations. Failure to
                  follow hotel rules and policies, or being disrespectful to hotel staff, or other
                  guests, may result in expulsion from the premises, badge revocation, and,
                  additionally, may lead to Rule 3 of the General Conduct section taking effect.
                </List.Item>
                <List.Item>
                  Damage or theft to the hotel/venue or its property, or SAFC property, could lead
                  to immediate expulsion and badge revocation, in addition to legal consequences and
                  financial liability. The attendee will be held liable for any financial
                  liability/payments/incurrences due to their negligence/actions.
                </List.Item>
                <List.Item>
                  Please don't block pathways and high-traffic areas; step to the side to allow
                  others to pass.
                </List.Item>
                <List.Item>
                  Please think about your own and others' safety; don't throw items, don't tackle
                  individuals from behind, and so on.
                </List.Item>
                <List.Item>
                  Please maintain proper hygiene. If you are the source of a noticeable odour, staff
                  may ask you to leave the con area.
                </List.Item>
                <List.Item>
                  Lost or stolen items are not the responsibility of SAFC. Attendees should secure
                  their belongings and report any incidents to Con Staff for further investigation.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Smoking, Alcohol &amp; Drugs
              </Title>
              <Text>
                Please note that SAFC does not condone the consumption of alcohol by persons under
                18 years of age. It does not condone the use, consumption or sale of any illegal
                drugs, and such use or sale could lead to immediate expulsion from the venue and
                future bans or restrictions being applied. SAFC will always defer to the rules of
                the venue when dealing with legal/accepted narcotics.
              </Text>
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
                  marijuana products are permitted anywhere within or outside the premises.
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
                Harassment, Hate Speech &amp; Symbols
              </Title>
              <Text>
                Please note that any such infringement in this section is against the laws of South
                Africa, and are thus not covered by freedom of speech. Breaches shall be treated as
                serious encroachments on the SAFC policies and lead to immediate expulsion and
                future bans or restrictions taking place.
              </Text>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Threats, harassment, and stalking will not be tolerated and will result in instant
                  badge revocation and expulsion from the premises.
                </List.Item>
                <List.Item>
                  If you are ever feeling threatened or harassed, clearly tell the offending party
                  to stop, and go to the Con Operations Room to report it. Remember that costumes,
                  no matter how they appear, do not indicate consent. Neither people in fursuit or
                  in normal clothing are permitted to ignore, or be exempt from, these rules.
                  Fursuiters may not use the excuse of wearing a costume to justify poor behaviour.
                </List.Item>
                <List.Item>
                  Speech promoting or encouraging discrimination, harassment, or violence based on
                  race, ethnicity, gender identity, sexual orientation, age, religion, or
                  nationality is strictly prohibited.
                </List.Item>
                <List.Item>
                  Wearing, displaying, or propagating symbols associated with hate groups or
                  organizations that promote discrimination, harassment, or violence is not allowed.
                  Wearing racist or offensive symbols, such as armbands historically associated with
                  any hate groups, constitutes harassment and is prohibited.
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
                <List.Item>
                  Minors and their accompanying guardian(s) are expected to leave the convention
                  venue by 18:00.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Registration &amp; Badges
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Registration requires specific personal data from all attendees for the below
                  reasons:
                  <List spacing={'xs'} withPadding mt="xs">
                    <List.Item>
                      Legal accountability. This is only shared if the attendee commits or is
                      involved in a crime.
                    </List.Item>
                    <List.Item>
                      Hotel policy. Almost all hotels require the legal names and contact details of
                      those using the accommodation or participating in an event on their property.
                    </List.Item>
                    <List.Item>
                      Medical information. This is to let the con know about allergies and medical
                      conditions that an attendee may have, as well as their emergency/next-of-kin
                      contact details. This information is treated as highly private and only used
                      when needed.
                    </List.Item>
                    <List.Item>
                      Financial details, other than bank and account number, are not held by SAFC
                      and are kept with the banks and financial service providers used for payments.
                      All financial entities follow the POPI Act and maintain strict security and
                      privacy protocols.
                    </List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  Attendees must display their badge at all times in convention-exclusive areas.
                  Fursuiters are not required to wear their badge openly but must have it with them.
                </List.Item>
                <List.Item>
                  SAFC convention-exclusive areas are open only to registered attendees, who are
                  identified by their attendance badge/pass. A badge/pass is only valid for the
                  person to whom it was issued and may not be shared.
                </List.Item>
                <List.Item>
                  Badges must be presented and/or surrendered to staff members upon request.
                  Changing or obscuring information on your badge is not allowed, and the lanyard
                  issued with your badge must not be changed to one of a different colour.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Medical Emergencies &amp; Conditions
              </Title>
              <List type="ordered" spacing={'xs'}>
                <List.Item>For life-threatening emergencies, dial 10111.</List.Item>
                <List.Item>
                  Seek immediate help in case you or another person suffers a dangerous drug
                  reaction or overdose.
                </List.Item>
                <List.Item>
                  Con Staff should be notified immediately of any incident so that they can assist
                  where needed. (First Aid, contacting next of kin, calling an ambulance, etc.)
                </List.Item>
                <List.Item>
                  If you have a pre-existing medical condition (asthma, diabetes, hypertension,
                  etc.), you are responsible for carrying with you any treatments or medication
                  needed.
                </List.Item>
                <List.Item>
                  It is highly recommended that you inform the SAFC admins of any medical conditions
                  and allergies upon registration.
                </List.Item>
                <List.Item>
                  SAFC is not legally allowed to dispense prescription or scheduled medications.
                </List.Item>
                <List.Item>
                  SAFC does not accept responsibility for an attendee using another attendee's
                  prescription or scheduled medication.
                </List.Item>
                <List.Item>
                  Medications and their storage and care are the responsibility of their owners.
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
                  Clothing and apparel that is overly revealing, inappropriate to the atmosphere of
                  the convention, likely to draw reasonable complaints or cause offence, will not be
                  allowed. This includes clothing or accessories that are obviously fetish-related
                  (outside of designated AD times, agreed upon areas, and agreed upon fetish).
                </List.Item>
                <List.Item>
                  Nudity, partial nudity, or overly revealing costumes are not allowed in any
                  convention areas, including public spaces and the fursuit lounge.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Weapons
              </Title>
              <Text>
                SAFC is a safe space, and as such, all attendees are required to follow the NO
                WEAPONS policies in public spaces.
              </Text>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  There will be no firearms of any type allowed in any con related venues or
                  accommodations.
                </List.Item>
                <List.Item>
                  There will be no sharp edges or points allowed in public areas.
                </List.Item>
                <List.Item>
                  There will be no projectile weapons or toys such as: NERF weapons, slingshots,
                  water guns, BB guns, bow &amp; arrows, etc.
                </List.Item>
                <List.Item>
                  Remember: If it looks like a weapon, it invokes the same feelings of threat and
                  fear, so cap guns and toy guns (colourful or not) are not allowed without explicit
                  consent from the Con Staff.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Fursuiters
              </Title>
              <Text>
                SAFC encourages the use of safe practices when fursuiting, for the sake of the
                attendee and those around them. All fursuiters will be held financially liable for
                any property damage that results from wearing such costumes/suits and prostheses,
                whether indoors or outdoors.
              </Text>
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
                  Fursuits with attachments that significantly increase the height/width of the
                  wearer (e.g. head attachments, stilts, etc.) should exercise caution when
                  navigating through areas with limited head-clearance or short/narrow entrances. No
                  such attachments will be allowed inside indoor venues for the safety of yourself,
                  other fursuiters, other attendees, and the hotel staff/guests.
                </List.Item>
                <List.Item>
                  In general, all fursuiters are advised to be mindful of their surroundings and
                  avoid causing any damage to the venue, their fursuit, or others' fursuits.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Fursuit Lounge Rules
              </Title>
              <Text>
                The fursuit lounge is the sanctuary and oasis for fursuiters to change, refresh and
                recoup. For that reason, it has to be limited with its access to non-fursuiters. We
                want those fursuiting to feel safe and welcome. Please, to those that do use the
                facility: Keep it clean so that all the other suiters can enjoy the same environment
                that you do.
              </Text>
              <List type="ordered" spacing={'xs'}>
                <List.Item>
                  Be respectful to everyone who uses the lounge. Do not engage in behaviour that is
                  disruptive, disrespectful, or inappropriate.
                </List.Item>
                <List.Item>No photography or recording in the fursuit lounge.</List.Item>
                <List.Item>
                  Only fursuiters and their handlers (and guardians with regard to minors) are
                  allowed to enter the lounge. Please do not allow non-fursuiters to enter.
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
                  Do not steal items or goods provided by SAFC from the lounge. The items and goods
                  are SAFC property. If you are caught stealing from the lounge, it could lead to
                  instant badge revocation and expulsion from the premises, pending future banning
                  or restrictions.
                </List.Item>
                <List.Item>
                  Do not damage items or goods provided by SAFC in the lounge. The items and goods
                  are SAFC property. If you are caught damaging items or making goods unusable for
                  others, it could lead to instant badge revocation and expulsion from the premises,
                  pending future banning or restrictions.
                </List.Item>
                <List.Item>
                  Please do not peek into any dressing rooms or private areas of the lounge.
                  Everyone deserves their privacy, and invading someone's personal space is not
                  acceptable.
                </List.Item>
                <List.Item>
                  Remember that you are responsible for your own items and fursuit while they are in
                  the lounge. The convention is not liable for any lost, stolen or damaged items.
                </List.Item>
                <List.Item>
                  The lounge will be locked after the final event each night and will reopen the
                  next morning at 8AM. Please ensure that you have removed your belongings and any
                  fursuit items you may need before the lounge is locked.
                </List.Item>
                <List.Item>
                  Finally, please report any suspicious or concerning behaviour to a staff member
                  immediately. Safety is our top priority, and we want everyone to feel comfortable
                  and secure in the fursuit lounge.
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
                  music must always be quiet enough to talk over without raising your voice. Enjoy
                  your music, but please be respectful of others.
                </List.Item>
              </List>
            </Stack>
            <Divider my="xl" mb="lg" w="100%" />
            <Stack>
              <Title c="#ffecb3" order={3}>
                Photography &amp; Audiovisual Recording
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
                  Attendees have no claim or ownership over any photographs taken by convention
                  staff for promotional purposes.
                </List.Item>
                <List.Item>
                  Everyone may take photos and videos for personal and non-commercial purposes.
                  Please make every effort not to photograph or video those who do not wish to be
                  photographed.
                </List.Item>
                <List.Item>
                  Always ask the main subject if a photograph is acceptable, and be prepared to blur
                  or eliminate background individuals if they request it.
                </List.Item>
                <List.Item>
                  Cameras are not permitted in several places of the convention, including the
                  Fursuit Lounge, the Dealer's Den and After Dark events. If you witness someone
                  taking photos or video for commercial purposes (such as news articles), please
                  report them to Con Operations.
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
                  attending the con, you agree to indemnify and hold harmless the convention and its
                  staff from and against any and all claims, demands, actions, causes of action,
                  losses, damages, lawsuits, including reasonable attorneys' fees and court
                  expenses, caused by, related to, or arising out of the con's operation. The
                  liability of SAFC is limited to the cost of attendance.
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
                  like Telegram, X (formerly Twitter), Facebook, Instagram, Furaffinity, BARQ,
                  Bluesky, and community-based platforms such as Discord.
                </List.Item>
                <List.Item>
                  Respectful behaviour, appropriate content sharing, and adherence to
                  platform-specific guidelines are expected. Violations may result in temporary or
                  permanent removal from online spaces associated with SAFC.
                </List.Item>
              </List>
            </Stack>
          </Container>
        </Stack>
      </Center>
    </Stack>
  );
}
