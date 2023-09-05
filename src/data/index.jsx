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
import {
  slr01,
  slr02,
  slr03,
  slr04,
  slr05,
  slr06,
  slr07,
} from "../assets/images/sl_railways";
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
      "Ecommerce web application front-end that allows users to find their needs from one place.Buyers can see a catalog of products,filter them and add to the cart.",
    tags: [
      {
        name: "javaScript",
        color: "text-[#666633]",
      },
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
      "Full-Stack web application that enables users to manage their school's students records",
    tags: [
      {
        name: "javaScript",
        color: "text-[#666633]",
      },
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
        name: "styled-components",
        color: "text-green-800",
      },
      {
        name: "mongoDB",
        color: "text-blue-800",
      },
      {
        name: "Express",
        color: "text-red-600",
      },
      {
        name: "Node",
        color: "text-purple-900",
      },
    ],
    images: [b01, b02, b03, b04],
    source_code_link: "https://github.com/",
  },
  {
    name: "EVOGYM",
    description: "Web application front-end for gymnasium",
    tags: [
      {
        name: "typeScript",
        color: "text-white",
      },
      {
        name: "react",
        color: "text-blue-300",
      },

      {
        name: "tailwind",
        color: "text-pink-300",
      },
      {
        name: "framer-motion",
        color: "text-[#804000]",
      },
    ],
    images: [e01, e02, e03, e04, e05, e06],
    source_code_link: "https://github.com/",
  },
  {
    name: "Dialog clone",
    description: "Clone of Dialog Axiata web-site",
    tags: [
      {
        name: "javaScript",
        color: "text-[#666633]",
      },
      {
        name: "react",
        color: "text-blue-300",
      },

      {
        name: "sass",
        color: "text-[#993333]",
      },
    ],
    images: [d01, d02, d03, d04, d05, d06],
    source_code_link: "https://github.com/",
  },
  {
    name: "Sri Lanka Railways",
    description: "Clone of Sri Lanka Railways ticket booking site",
    tags: [
      {
        name: "javaScript",
        color: "text-[#666633]",
      },
      {
        name: "react",
        color: "text-blue-300",
      },

      {
        name: "tailwind",
        color: "text-pink-300",
      },
    ],
    images: [slr01, slr02, slr03, slr04, slr05, slr06, slr07],
    source_code_link: "https://github.com/",
  },
];
