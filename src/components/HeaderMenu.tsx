import { IconChevronDown } from '@tabler/icons-react';
import { Center, Group, Menu, type GroupProps } from '@mantine/core';
import classes from '../styles/HeaderMenu.module.css';

const links = [
  { link: '/registration', label: 'Registration' },
  {
    link: '#1',
    label: 'Applications',
    links: [
      { link: '/applications/dealers', label: 'Documentation' },
      { link: '/applications/volunteers', label: 'Volunteers' },
    ],
  },
  {
    link: '#2',
    label: 'About',
    links: [
      { link: '/about/safc', label: 'SAFC' },
      { link: '/about/pastevents', label: 'Past Events' },
      { link: '/about/charity', label: 'Charity' },
    ],
  },
  {
    link: '#3',
    label: 'Rules & FAQ',
    links: [
      { link: '/rules', label: 'Rules and guidelines' },
      { link: '/faq', label: 'FAQ' },
    ],
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export function HeaderMenu(props: GroupProps) {
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Group gap={5} visibleFrom="sm" {...props}>
      {items}
    </Group>
  );
}
