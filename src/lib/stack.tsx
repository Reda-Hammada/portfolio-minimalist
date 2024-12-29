import Nextjs from "./icons/Nextjs";
import ReactIcon from "./icons/ReactIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import Vuejs from "./icons/Vue";
import { Stack } from "./types";
import Nuxtjs from "./icons/Nuxtjs";
import Tailwind from "./icons/Tailwind";
import Nestjs from "./icons/Nest";
import Expressjs from "./icons/Express";
import MongoDB from "./icons/MongoDB";

const stacks: Stack[] = [
  {
    name: "React",
    icon: <ReactIcon />,
  },
  {
    name: "Vue",
    icon: <Vuejs />,
  },
  {
    name: "Nuxt.js",
    icon: <Nuxtjs />,
  },
  {
    name: "Next.js",
    icon: <Nextjs />,
  },
  {
    name: "Tailwind css",
    icon: <Tailwind />,
  },
  {
    name: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    name: "Express.js",
    icon: <Expressjs />,
  },
  {
    name: "Nest.js",
    icon: <Nestjs />,
  },
  {
    name: "MongoDB",
    icon: <MongoDB />,
  },
  {
    name: "SQL",
    icon: <></>,
  },
];

const Stacks = () => {
  return stacks;
};

export default Stacks;
