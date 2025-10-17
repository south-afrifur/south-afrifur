import {
  IconBrandBluesky,
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandTiktok,
  IconBrandX,
} from '@tabler/icons-react';

export const socialLinks = [
  {
    icon: <IconBrandTelegram size={18} />,
    link: 'https://t.me/+p9JMDIwXZ_8wMmQ0',
    color: 'blue',
    disabled: false,
  },
  {
    icon: <IconBrandDiscord size={18} />,
    link: 'https://discord.gg/sgzdu5T',
    color: 'white',
    disabled: false,
  },
  {
    icon: <IconBrandX size={18} />,
    link: 'https://x.com/SouthAfriFurCon',
    color: 'white',
    disabled: false,
  },
  {
    icon: <IconBrandInstagram size={18} />,
    link: 'https://www.instagram.com/southafrifur/',
    color: '#E4405F',
    disabled: true,
  },
  {
    icon: <IconBrandFacebook size={18} />,
    link: 'https://www.facebook.com/southafrifur',
    color: '#1877F2',
    disabled: true,
  },
  {
    icon: <IconBrandTiktok size={18} />,
    link: 'https://www.tiktok.com/@southafrifur',
    color: '#69C9D0',
    disabled: true,
  },
  {
    icon: <IconBrandBluesky size={18} />,
    link: 'https://bsky.app/profile/southafrifur.bsky.social',
    color: '#1185FE',
    disabled: true,
  },
];
