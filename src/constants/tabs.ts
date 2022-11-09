import { Props } from "../components/Tab/TabPanel";

type Tabs = Partial<Props>;

export const WorkTabs: Array<Tabs> = [
  {
    index: 0,
    position: "Software Engineer",
    employeer: "Equinox",
    date: "August 2019 - Present",
    bullets: [
      "I'm part of a POD in charge of developing highly scalable, PROD ready solutions with high quality and fully tested code.",
      "We're building a React app to be used by stakeholders and Equinox Media employees to simulate programs, workouts and more using AI behind the scenes to make recommendations, create programs and workouts for the clients.",
      "I’m also in charge of Contentful data modeling, a content infrastructure headless CMS that will be used by multiple apps like mobile apps, microservices, our app and the AI microservice to consume a large set of data and resources to display content or use it for business logic. This will give the possibility to content creators/trainers to use the platform to add content in a simple way for later use across multiple apps. Working alongside backend team and data science team to build the best structure possible.",
      "I've also been part of the creation and enhancement of their main Web page almost 100% Marketin driven thanks to NextJS + Contentful.",
    ],
    techStack: ["ReactJS", "NextJS", "NodeJS", "MongoDB", "AWS", "MUI"],
  },
  {
    index: 1,
    position: "Software Engineer",
    employeer: "Xside Solutions",
    date: "January 2019 - August 2022",
    bullets: [
      "In most of the projects I've been part of small agile teams with, usually, a Scrum Master, a couple of Developers and one or two QAs.",
      "The two biggest projects that I were part of were a NextJS + React Web App built for a Kavak-like business which consumed Marketing information through a Contentful integration which is a Headless CMS.",
      "The other one was a React Native application designed as an in-house or built-in Twitter-like Social Network for the client allowing the users to interact among eachothers sharing business related information, congratulations, etc (every interaction a Twitter-like Social Network has such as posting messages, photos or videos, likes, dislikes, threads, etc)",
    ],
    techStack: ["NextJS", "ReactJS", "NodeJS", "MUI", "Jest", "AWS"],
  },
  {
    index: 2,
    position: "Software Engineer",
    employeer: "Intive FDV",
    date: "June 2018 - January 2019",
    bullets: [
      "I was part of a rather large tech team split into several smaller teams but we all worked on the same code base (a monolith at start).",
      "The App was oriented to US lawyers, It provided access and reading and editing capabilities over different kind of public documents provided by the US Government.",
      "Each different kind of document was accessed and stored in each of this different smaller modules in which, each, had different text analysis built‑in tools.",
    ],
    techStack: ["ReactJS", "NodeJS", "Redis", "Jest", "AWS", "SASS"],
  },
];
