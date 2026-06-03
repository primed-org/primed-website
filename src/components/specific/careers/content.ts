export interface CoreValue {
  title: string;
  description: string;
}

export interface DepartmentFit {
  name: string;
  description: string;
}

export interface EmployeeTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface OpenRole {
  title: string;
  team: string;
  location: string;
  type: string;
}

export const visionStatement =
  "To become Africa's most trusted digital healthcare operations platform.";

export const whoWeAreStatement =
  'We are a diverse team of passionate and innovative people building something meaningful together. We are bold thinkers, creative problem-solvers, and builders at heart committed to transforming the way healthcare and technology work together, one hospital at a time.';

export const coreValues: CoreValue[] = [
  {
    title: 'Ownership',
    description: 'We take responsibility end-to-end and stand by outcomes.',
  },
  {
    title: 'Data Driven Decision',
    description: 'We trust data over assumptions when making choices.',
  },
  {
    title: 'Clarity and Communication',
    description: 'We say things as they are: clear, direct, and respectful.',
  },
  {
    title: 'Speed with Accuracy',
    description: "We move fast, but we do not break systems.",
  },
  {
    title: 'Patient-Centric',
    description: 'We put patients first in every decision and workflow.',
  },
];

export const departmentFits: DepartmentFit[] = [
  {
    name: 'Engineering',
    description:
      'The builders behind Primed: designing, shaping, and scaling technology that is transforming the future of healthcare. You will have the opportunity to build solutions for the real world.',
  },
  {
    name: 'Operations',
    description:
      'The Operations team sits at the heart of execution at Primed, working closely with hospitals, solving problems in real time, and ensuring our products deliver measurable impact. They bridge the gap between technology and healthcare operations every single day.',
  },
  {
    name: 'People Ops',
    description:
      'Our People Operations team helps build the foundation that keeps Primed moving. From attracting and supporting great talent to strengthening culture and enabling teams to do their best work, they create the systems and people experience that help the business grow sustainably.',
  },
  {
    name: 'Corporate Communication',
    description:
      'If you enjoy telling stories, this is your team. Join a creative team to tell stories that show how we impact the health space in Africa.',
  },
  {
    name: 'Finance and Business',
    description:
      'Get into payments, reconciliation, and financial operations that keep healthcare systems running efficiently.',
  },
];

export const employeeTestimonials: EmployeeTestimonial[] = [
  {
    quote:
      'What I love most is how quickly we can test ideas and ship improvements that help real hospitals operate better every week.',
    name: 'Dara A.',
    role: 'Software Engineer',
  },
  {
    quote:
      'Operations here is deeply collaborative. We are close to customers, and our feedback directly shapes what gets built next.',
    name: 'Maya O.',
    role: 'Operations Lead',
  },
  {
    quote:
      'People and performance are treated with equal importance. We move fast and still make space for learning and growth.',
    name: 'Kene I.',
    role: 'People Operations Associate',
  },
];

export const openRoles: OpenRole[] = [
  {
    title: 'Frontend Engineer',
    team: 'Engineering',
    location: 'Remote (Nigeria)',
    type: 'Full-time',
  },
  {
    title: 'Implementation Operations Associate',
    team: 'Operations',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
  {
    title: 'People Operations Associate',
    team: 'People Ops',
    location: 'Hybrid (Lagos)',
    type: 'Full-time',
  },
  {
    title: 'Corporate Communications Associate',
    team: 'Corporate Communication',
    location: 'Remote (Africa)',
    type: 'Full-time',
  },
  {
    title: 'Finance and Business Analyst',
    team: 'Finance and Business',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
  },
];

export const whatWeOffer = [
  '20 days PTO (public holidays inclusive)',
  '5 days exam leave for employees who pursue continuous education',
  'Data allowance',
  'Work from anywhere',
];
