import {
  IconClipboardCheckFilled,
  IconExclamationCircleFilled,
  IconHelpCircleFilled,
} from '@tabler/icons-react';

const links = [
  { link: '/registration', label: 'Registration', registration: true },
  {
    link: '#1',
    label: 'Applications',
    icon: IconClipboardCheckFilled,
    links: [
      { link: '/applications/dealers', label: 'Dealers' },
      { link: '/applications/volunteers', label: 'Volunteers' },
      { link: '/applications/panelists', label: 'Panelists' },
    ],
  },
  {
    link: '#2',
    label: 'About',
    icon: IconHelpCircleFilled,
    links: [
      { link: '/about/safc', label: 'SAFC' },
      { link: '/about/pastevents', label: 'Past Events' },
      { link: '/about/charity', label: 'Charity' },
    ],
  },
  {
    link: '#3',
    label: 'Rules & FAQ',
    icon: IconExclamationCircleFilled,
    links: [
      { link: '/rules', label: 'Rules and guidelines' },
      { link: '/faq', label: 'FAQ' },
      { link: '/rules/media', label: 'Media & Content Creators' },
    ],
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export { links };
