import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  mysql,
} from "../assets";

import { d01, d02, d03, d04, d05, d06 } from "../assets/images/dialog";
import {
  h01,
  h02,
  h03,
  h04,
  h05,
  h06,
} from "../assets/images/house_of_fashion";
import { b01, b02, b03, b04 } from "../assets/images/best";
import { e01, e02, e03, e04, e05, e06 } from "../assets/images/evogym";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

export const projects = [
  {
    name: "House Of Fashion",
    description:
      "Ecommerce web application that allows users to find their needs from one place.Buyers can see a catalog of products,filter them and add to the cart.",
    tags: [
      {
        name: "react",
        color: "text-blue-300",
      },

      {
        name: "tailwind",
        color: "text-pink-300",
      },

      {
        name: "redux-toolkit",
        color: "text-yellow-300",
      },
      {
        name: "material_tailwind",
        color: "text-purple-300",
      },
    ],
    images: [h01, h02, h03, h04, h05, h06],
    source_code_link:
      "https://github.com/Studawatta/Basic_Student_Management.git",
  },
  {
    name: "BEST",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    images: [b01, b02, b03, b04],
    source_code_link: "https://github.com/",
  },
  {
    name: "EVOGYM",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    images: [e01, e02, e03, e04, e05, e06],
    source_code_link: "https://github.com/",
  },
  {
    name: "Dialog clone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    images: [d01, d02, d03, d04, d05, d06],
    source_code_link: "https://github.com/",
  },
];
