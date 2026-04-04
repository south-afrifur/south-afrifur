import {
  IconClipboardCheckFilled,
  IconExclamationCircleFilled,
  IconHelpCircleFilled,
} from '@tabler/icons-react';

type Links = {
  link: string;
  label: string;
  icon?: any;
  registration?: boolean;
  application?: boolean;
  links?: Links[];
  disabled?: string;
};

const links: Links[] = [
  { link: '/registration', label: 'Registration', registration: true },
  {
    link: '#1',
    label: 'Applications',
    icon: IconClipboardCheckFilled,
    links: [
      {
        link: '/applications/dealers',
        label: "Dealer's Den",
        disabled: 'Coming Soon',
        application: true,
      },
      {
        link: 'https://docs.google.com/forms/d/1dSr6ihgD0WWWH-FMPCP975PWb2Tfa8Kwr2zbJX4N9zM/edit',
        label: 'Volunteers (Awoo Crew)',
        application: true,
      },
      {
        link: 'https://docs.google.com/forms/d/1RgBF5qMto3nGz8YurdX-ZvGQcpAQ4yEkFUCTYRpSLzM/edit',
        label: 'Digital Volunteers (DigiWoo Crew)',
        application: true,
      },
      {
        link: 'https://docs.google.com/forms/d/1jzt8ndWRSLRusPT13mn-lm3i_QHMlqx0fajsAxaZGvg/edit',
        label: 'Panelists',
        application: true,
      },
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
      { link: '/learn', label: 'Learn More' },
    ],
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export { links };
