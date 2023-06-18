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
