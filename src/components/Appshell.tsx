import { forwardRef } from 'react';
import { createLink, type LinkProps } from '@tanstack/react-router';
import {
  Anchor,
  AppShell,
  Burger,
  Center,
  Flex,
  Group,
  Image,
  type AnchorProps,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderMenu } from './HeaderMenu';

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
  return (
    <AppShell
      header={{ height: 120 }}
      footer={{ height: 60 }}
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
      <AppShell.Header withBorder={false} bg="dark.8">
        <Group h="100%" px="md" visibleFrom="md" mx={200}>
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
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
};

export { Appshell };
