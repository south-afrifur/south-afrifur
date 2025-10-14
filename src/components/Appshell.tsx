import { forwardRef } from 'react';
import {
  IconBrandBluesky,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandX,
} from '@tabler/icons-react';
import { createLink, type LinkProps } from '@tanstack/react-router';
import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Flex,
  Group,
  Image,
  useMatches,
  type AnchorProps,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderMenu } from './HeaderMenu';

const footerLinks = [
  {
    label: 'Convention Conduct',
    link: '/rules',
  },
  {
    label: 'Privacy Policy',
    link: '/privacy',
  },
  {
    label: 'Click me',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

const socialMediaLinks = [
  {
    icon: <IconBrandX size={18} />,
    link: 'https://x.com/southafrifur',
    color: 'white',
  },
  {
    icon: <IconBrandInstagram size={18} />,
    link: 'https://www.instagram.com/southafrifur/',
    color: '#E4405F',
  },
  {
    icon: <IconBrandFacebook size={18} />,
    link: 'https://www.facebook.com/southafrifur',
    color: '#1877F2',
  },
  {
    icon: <IconBrandTiktok size={18} />,
    link: 'https://www.tiktok.com/@southafrifur',
    color: '#69C9D0',
  },
  {
    icon: <IconBrandBluesky size={18} />,
    link: 'https://bsky.app/profile/southafrifur.bsky.social',
    color: '#1185FE',
  },
];

const LogoLink = createLink(
  forwardRef((props: LinkProps & AnchorProps, ref) => {
    return (
      <Anchor {...props} ref={ref as any}>
        <Image src="/safc-white.png" alt="Logo" w={200} />
      </Anchor>
    );
  })
);

const Appshell = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const footerCollapsed = useMatches({
    base: true,
    md: false,
  });
  return (
    <AppShell
      header={{ height: 120 }}
      footer={{ height: 60, collapsed: footerCollapsed }}
      navbar={{
        width: 300,
        breakpoint: 'md',
        collapsed: { mobile: !opened, desktop: true },
      }}
      aside={{
        width: 300,
        breakpoint: 'md',
        collapsed: { desktop: true, mobile: true },
      }}
    >
      <AppShell.Header withBorder={false} bg="grayBlue.9">
        <Group
          h="100%"
          px="md"
          visibleFrom="md"
          mx={{
            md: 50,
            lg: 100,
          }}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <LogoLink to="/" />
          <HeaderMenu
            flex={1}
            style={{
              justifyContent: 'end',
            }}
          />
        </Group>
        <Group h="100%" px="md" hiddenFrom="md" justify="center" w="100%">
          <Burger opened={opened} onClick={toggle} size="sm" flex={0} />
          <LogoLink
            to="/"
            flex={1}
            style={{
              marginRight: '44px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" hiddenFrom="md">
        Navbar
      </AppShell.Navbar>
      <AppShell.Main component={Flex}>{children}</AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
      <AppShell.Footer p="xs" bg="grayBlue.9">
        <Group h="100%" justify="space-between">
          <Group>
            {footerLinks.map((link, index) => (
              <Anchor
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                c="gray.5"
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
          <Group gap="xs" h="100%">
            {socialMediaLinks.map((link, index) => (
              <ActionIcon
                key={index}
                variant="transparent"
                component="a"
                href={link.link}
                size={'lg'}
                target="_blank"
                rel="noopener noreferrer"
                color={link.color}
              >
                {link.icon}
              </ActionIcon>
            ))}
          </Group>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
};

export { Appshell };
