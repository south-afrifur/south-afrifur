import { IconChevronDown } from '@tabler/icons-react';
import { useNavigate } from '@tanstack/react-router';
import {
  Box,
  Center,
  Collapse,
  Divider,
  Group,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { links } from '../utils/header-links';
import classes from '../styles/MobileNavbar.module.css';

const MobileNavbar = () => {
  const navigate = useNavigate();

  const GroupButton = ({ link, links }: { link: any; links?: any[] }) => {
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

    const LinkComponents = links?.map((item: any) => {
      return (
        <UnstyledButton
          className={classes.subLink}
          key={item.label}
          onClick={() => {
            navigate({ to: item.link });
          }}
        >
          <Group wrap="nowrap" align="flex-start">
            {item.icon && (
              <ThemeIcon size={34} variant="default" radius="md">
                {item.icon}
              </ThemeIcon>
            )}
            <div>
              <Text size="sm" fw={500}>
                {item.label}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      );
    });

    return (
      <>
        <UnstyledButton
          onClick={
            links
              ? toggleLinks
              : (e) => {
                  if (link.registration === true) {
                    e.preventDefault();
                    notifications.show({
                      title: 'Registration opens soon!',
                      message: 'Stay tuned for updates on our registration opening date.',
                      color: '#ffecb3',
                      position: 'top-center',
                    });
                    return;
                  }
                  if (link.applications === true) {
                    e.preventDefault();
                    notifications.show({
                      title: 'Applications opening soon!',
                      message: 'Stay tuned for updates on our applications opening date.',
                      color: '#ffecb3',
                      position: 'top-center',
                    });
                    return;
                  }
                  navigate({ to: link.link });
                }
          }
          className={classes.link}
        >
          <Center inline>
            <Box component="span" mr={5}>
              {link.label}
            </Box>
            {links && <IconChevronDown size={16} color="#ffecb3" />}
          </Center>
        </UnstyledButton>
        {links && <Collapse in={linksOpened}>{LinkComponents}</Collapse>}
      </>
    );
  };

  const linkComponents = links.map((item) => <GroupButton link={item} links={item.links} />);

  return (
    <Stack h="100%">
      <Center flex={0}>
        <Title order={4} c="#ffecb3">
          Navigation
        </Title>
      </Center>
      <Divider />
      <ScrollArea flex={1}>
        {linkComponents}
        <Divider my="sm" />
      </ScrollArea>
    </Stack>
  );
};

export { MobileNavbar };
