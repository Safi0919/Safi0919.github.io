import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  peer,
  tau,
  writing,
  gov,
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Machine Learning',
    icon: frontend,
  },
  {
    title: 'Database Management',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: "Vice President",
    company_name: "Tau Beta Pi",
    icon: tau,
    iconBg: "#333333",
    date: "May 2024 - Present",
  },
  {
    title: "Teaching Assistant, Data Structures and Algorithms",
    company_name: "Peer Connections",
    icon: peer,
    iconBg: "#333333",
    date: "Jan 2024 - Present",
  },
  {
    title: "Director of Academic Affairs",
    company_name: "Associated Students",
    icon: gov,
    iconBg: "#333333",
    date: "Jun 2022 - Aug 2023",
  },
  {
    title: "IT Website and Systems Coordinator",
    company_name: "Writing Center",
    icon: writing,
    iconBg: "#333333",
    date: "Jun 2022 - Aug 2022",
  },
];


const projects = [
  {
    id: "project-1",
    name: "Autonomous Navi. System",
    description:
      "A self-driving autonomous robot capable of navigation, mapping and environment analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/ROS-Mapping-Localiaztion-Enviroment/ROS_MLES",
    demo: "https://github.com/ROS-Mapping-Localiaztion-Enviroment/ROS_MLES",
  },
  {
    id: "project-2",
    name: "WorkMan",
    description:
      "An application that lets users manage and edit their workout routines, and build a health community",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://shaqdeff.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "HeriTaste",
    description:
      "An application to preserve family recipes, foster connections through food, and celebrate the cultural heritage woven into each dish.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/Safi0919/HeriTaste",
    demo: "https://devpost.com/software/heritaste?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  {
    id: "project-4",
    name: "Study Hub",
    description: `A collaborative platform tailored for students seeking a dedicated space to connect, collaborate, and share academic resources.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/Safi0919/StudyHub",
    demo: "https://github.com/Safi0919/StudyHub",
  },
  {
    id: "project-5",
    name: "Weather App",
    description:
      "This app is designed to provide real-time weather updates for any location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/Safi0919/WeatherWebsite",
    demo: "https://github.com/Safi0919/WeatherWebsite",
  },
];

export { services, technologies, experiences, projects };
