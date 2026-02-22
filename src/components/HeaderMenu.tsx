import { IconChevronDown } from '@tabler/icons-react';
import { Center, Group, Menu, type GroupProps } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { links } from '../utils/header-links';
import { RouterAnchor } from './RouterAnchor';
import classes from '../styles/HeaderMenu.module.css';

export function HeaderMenu(props: GroupProps) {
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item
        className={classes.menuItem}
        key={item.link}
        component={RouterAnchor}
        to={item.link}
        styles={{
          itemLabel: {
            fontSize: 'var(--mantine-font-size-lg)',
            fontWeight: 500,
          },
        }}
      >
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="click-hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <RouterAnchor to={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </RouterAnchor>
          </Menu.Target>
          <Menu.Dropdown miw={200} bg="noir.9">
            {menuItems}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <RouterAnchor
        key={link.label}
        className={classes.link}
        data-registration={link.registration ? 'true' : undefined}
        to={link.link}
        onClick={(e) => {
          if (link.registration === true) {
            notifications.show({
              title: 'Registration opens soon!',
              message: 'Stay tuned for updates on our registration opening date.',
              color: '#ffecb3',
              position: 'top-center',
            });

            e.preventDefault();
            // window.open(
            //   'https://www.eventbrite.com/e/south-afrifur-2024-tickets-848368861557',
            //   '_blank'
            // );
          }

          if (link.applications) {
            notifications.show({
              title: 'Applications opening soon!',
              message: 'Stay tuned for updates on our applications opening date.',
              color: '#ffecb3',
              position: 'top-center',
            });
            e.preventDefault();
          }
        }}
      >
        {link.label}
      </RouterAnchor>
    );
  });

  return (
    <Group gap={5} h="100%" visibleFrom="sm" {...props}>
      {items}
    </Group>
  );
}
