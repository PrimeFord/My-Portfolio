import { title } from "process";

interface NavData {
  id: number;
  name: string;
  route: string;
}

export const navData: NavData[] = [
  {
    id: 1,
    name: "About",
    route: "#about",
  },
  {
    id: 2,
    name: "Skills",
    route: "#skills",
  },
  {
    id: 3,
    name: "Portfolio",
    route: "#portfolio",
  },
  {
    id: 4,
    name: "Contact",
    route: "#contact",
  },
];

interface UsingData {
  src: string;
  title: string;
  alt: string;
}

export const usingData: UsingData[] = [
  {
    src: "./images/html.svg",
    title: "Html5",
    alt: "Html",
  },
  {
    src: "./images/css.svg",
    title: "Css3",
    alt: "Css",
  },
  {
    src: "./images/js.svg",
    title: "JavaScript",
    alt: "JavaScript",
  },
  {
    src: "./images/tailwind.svg",
    title: "Tailwind",
    alt: "Tailwind",
  },
  {
    src: "./images/react.svg",
    title: "React JS",
    alt: "React",
  },
  {
    src: "./images/redux.png",
    title: "Redux",
    alt: "Redux",
  },
  {
    src: "./images/git.svg",
    title: "Git",
    alt: "Git",
  },
  {
    src: "./images/npm.svg",
    title: "Npm",
    alt: "Npm",
  },
  {
    src: "./images/next.svg",
    title: "Next JS",
    alt: "Next",
  },
];

interface UsingData {
  src: string;
  title: string;
  alt: string;
}

export const learningData: UsingData[] = [
  {
    src: "./images/ts.svg",
    title: "TypeScript",
    alt: "TypeScript",
  },
  // {
  //   src: "./images/python.svg",
  //   title: "Python",
  //   alt: "Python",
  // },
  // {
  //   src: "./images/sass.svg",
  //   title: "Sass",
  //   alt: "Sass",
  // },
];
