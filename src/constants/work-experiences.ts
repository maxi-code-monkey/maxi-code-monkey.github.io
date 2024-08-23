import { ExperienceCardProps } from "../components/ExperienceCard/types";

export const WorkExperiences: Array<ExperienceCardProps> = [
  {
    position: "Senior Software Engineer",
    employer: "Arionkoder",
    url: 'https://www.arionkoder.com/',
    fromYear: "Jan 2023",
    toYear: "Present",
    description: [
      "Build, style and maintain core base components shared between one Microfrontend and the main website.",
      "Work alongside cross functional teams to keep consistency between the FE components shared among the different business paths/features.",
    ],
    stack: ["ReactJS", "NextJS", "NodeJS", "AWS", "MUI", "SCSS"],
  },
  {
    position: "Senior Software Engineer",
    employer: "DevBase",
    url: 'https://www.devbase.us/',
    fromYear: "Jan 2023",
    toYear: "Aug 2024",
    description: [
      "Build and maintain base core components for one React Native App, two Web Apps and one Microfrontend.",
      "Worked with several cross functional PODs in charge of different features, all of which were part of a rather large/bigger team of 50 Devs aprox.",
    ],
    stack: ["ReactJS", "NextJS", "AWS", "MUI", "SCSS"],
  },
  {
    position: "Senior Software Engineer",
    employer: "Equinox",
    url: 'https://www.equinox.com/',
    fromYear: "Aug 2019",
    toYear: "Dec 2022",
    description: [
      "Build and maintain several Apps and microfrontends across the company, one of them was their main Marketing Driven Web Page.",
      "Worked closely with cross functional teams in order to create custom and customizable base components used across several apps within the organization.",
    ],
    stack: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "MongoDB",
      "AWS",
      "MUI",
      "Contentful",
    ],
  },
  {
    position: "Senior Software Engineer",
    employer: "Xside Solutions",
    url: 'https://xsidesolutions.com/',
    fromYear: "Jan 2019",
    toYear: "Aug 2022",
    description: [
      "In most of the projects I've been part of small agile teams with, usually, a Scrum Master, a couple of Developers and one or two QAs.",
      "The two biggest projects that I were part of were a NextJS + React Web App built for a Kavak-like business which consumed Marketing information through a Contentful integration which is a Headless CMS.",
      "The other one was a React Native application designed as an in-house or built-in Twitter-like Social Network for the client allowing the users to interact among eachothers sharing business related information, congratulations, etc (every interaction a Twitter-like Social Network has such as posting messages, photos or videos, likes, dislikes, threads, etc)",
    ],
    stack: ["NextJS", "ReactJS", "NodeJS", "MUI", "Jest", "AWS"],
  },
  {
    position: "Senior Software Engineer",
    employer: "Intive FDV",
    fromYear: "June 2018",
    toYear: "Jan 2019",
    description: [
      "I was part of a rather large tech team split into several smaller teams but we all worked on the same code base (a monolith at start).",
      "The App was oriented to US lawyers, It provided access and reading and editing capabilities over different kind of public documents provided by the US Government.",
      "Each different kind of document was accessed and stored in each of this different smaller modules in which, each, had different text analysis built‑in tools.",
    ],
    stack: ["ReactJS", "NodeJS", "Redis", "Jest", "AWS", "SASS"],
  },
];
