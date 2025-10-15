import { forwardRef, useEffect } from 'react';
import { createLink, useRouterState, type LinkProps } from '@tanstack/react-router';
import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Group,
  Image,
  Stack,
  useMatches,
  type AnchorProps,
  type ImageProps,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { footerLinks } from '../utils/footer-links';
import { socialLinks } from '../utils/social-links';
import { HeaderMenu } from './HeaderMenu';
import { MobileFooter } from './MobileFooter';
import { MobileNavbar } from './MobileNavbar';
import { RouterAnchor } from './RouterAnchor';

const LogoLink = createLink(
  forwardRef((props: LinkProps & AnchorProps & { logoProps?: ImageProps }, ref) => {
    return (
      <Anchor {...props} ref={ref as any}>
        <Image src="/safc-white.png" alt="Logo" w={200} {...props.logoProps} />
      </Anchor>
    );
  })
);

const Appshell = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle, close }] = useDisclosure();
  const footerCollapsed = useMatches({
    base: true,
    md: false,
  });

  const { status } = useRouterState();

  const isDesktop = useMatches({
    md: true,
  });

  useEffect(() => {
    if (status === 'pending' || isDesktop) {
      close();
    }
  }, [status, isDesktop]);

  useEffect(() => {
    document.body.style.overflow = opened ? 'hidden' : 'auto';
  }, [opened]);

  return (
    <AppShell
      header={{
        height: {
          base: 90,
          md: 120,
        },
      }}
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
            logoProps={{
              w: 150,
            }}
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
        <MobileNavbar />
      </AppShell.Navbar>
      <AppShell.Main
        id="main"
        bg="#122131"
        component={Stack}
        pb={{
          md: 100,
        }}
        style={{
          gap: 0,
        }}
      >
        {children}
        <MobileFooter hiddenFrom="md" mt={100} pt={40} pb={60} />
      </AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
      <AppShell.Footer p="xs" bg="grayBlue.9">
        <Group h="100%" justify="space-between">
          <Group ml="xl">
            {footerLinks.map((link, index) => (
              <RouterAnchor
                to={link.link}
                key={index}
                rel="noopener noreferrer"
                size="sm"
                c="gray.5"
              >
                {link.label}
              </RouterAnchor>
            ))}
          </Group>
          <Group gap="xs" h="100%">
            {socialLinks.map((link, index) => (
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
