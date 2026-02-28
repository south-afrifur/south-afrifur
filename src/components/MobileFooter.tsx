import { ActionIcon, Anchor, Group, Stack, type StackProps } from '@mantine/core';
import { footerLinks } from '../utils/footer-links';
import { socialLinks } from '../utils/social-links';

const MobileFooter = (props: StackProps) => {
  return (
    <Stack bg="grayBlue.9" align="center" py="xs" {...props}>
      <Group gap="xs" h="100%">
        {socialLinks.map((link, index) => (
          <ActionIcon
            disabled={link.disabled}
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
      {footerLinks.map((item, index) => (
        <Anchor
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          c={item.troll ? 'gray.9' : 'gray.5'}
        >
          {item.label}
        </Anchor>
      ))}
    </Stack>
  );
};

export { MobileFooter };
