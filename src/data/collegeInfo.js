import collegeLogo from '../assets/images/college-logo.svg';
import { openSourceImages } from './openSourceImages';

export const collegeInfo = {
  name: 'S G T & J V B DEGREE COLLEGE (149)',
  shortName: 'S G T & J V B Degree College',
  establishedYear: 1996,
  principal: 'B. SUBBARAO',
  affiliation: 'Affiliated to Acharya Nagarjuna University',
  address:
    'D.no:10-116/1, beside KVR ZP High School, near Water Tank, College Road, Thullur (PO & MD), Guntur - 522237',
  phone: '9963638685',
  email: 'sgtjvbdegreecollege@gmail.com',
  location: 'Thullur, Guntur',
  mapUrl: 'https://www.google.com/maps?q=16.5295841,80.4643141',
  mapEmbedUrl:
    'https://www.google.com/maps?q=16.5295841,80.4643141&z=15&output=embed',
  coordinates: {
    latitude: 16.5295841,
    longitude: 80.4643141,
  },
  heroSubtitle: 'Affiliated to Acharya Nagarjuna University',
  heroMotto: 'Empowering students through knowledge, discipline, and opportunity.',
  heroImage: openSourceImages.campusCourtyard,
  logo: collegeLogo,
  socialLinks: [],
  stats: [
    { label: 'Established', value: '1996' },
    { label: 'Affiliation', value: 'ANU' },
    { label: 'Academic Focus', value: 'UG Programs' },
    { label: 'Location', value: 'Thullur' },
  ],
};

export const homeHighlights = [
  {
    title: 'Student-Focused Learning',
    description:
      'A disciplined academic environment designed to help students build strong foundations and confidence.',
    image: openSourceImages.classroom,
  },
  {
    title: 'Regional Accessibility',
    description:
      'Supporting students from Thullur and nearby rural and semi-urban communities with meaningful higher education.',
    image: openSourceImages.campusBuilding,
  },
  {
    title: 'Career Readiness',
    description:
      'Guidance for higher studies, employability, communication, and future professional growth.',
    image: openSourceImages.careerCounseling,
  },
];

export const placementStats = [
  { label: 'Career Guidance Sessions', value: 'Regular', image: openSourceImages.careerCounseling },
  { label: 'Skill Development Focus', value: 'Ongoing', image: openSourceImages.seminarRoom },
  { label: 'Interview Preparation', value: 'Structured', image: openSourceImages.facultyGuidance },
  { label: 'Higher Education Support', value: 'Available', image: openSourceImages.commencement },
];
