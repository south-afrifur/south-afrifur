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
        link: 'https://forms.gle/aHnVzEjyEbzms4wV7',
        label: 'Panelists',
        application: true,
      },
      {
        link: 'https://forms.gle/hCpd4nMBhmjn2785A',
        label: "Dealers' Den",
        application: true,
      },
      {
        link: 'https://forms.gle/LUxsGac764tnDKvS7',
        label: 'Volunteers (Awoo Crew)',
        application: true,
      },
      {
        link: 'https://forms.gle/juUeERn8MLZmyyAK7',
        label: 'Digital Volunteers (DigiWoo Crew)',
        application: true,
      },
      {
        link: 'https://forms.gle/mwdXbTSCG1odv2wt7',
        label: 'Media Crew',
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
