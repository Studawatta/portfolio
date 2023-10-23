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
  evogym,
  house_of_fashion,
  pizzahut,
  sl_railways,
} from "../assets";

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
    image: house_of_fashion,
    source_code_link: "https://github.com/Studawatta/House-Of-Wears.git",
    link: "https://pizza-hut-clone-gamma.vercel.app/",
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
    image: evogym,
    source_code_link: "https://github.com/Studawatta/evogym.git",
    link: "https://evogym.vercel.app/",
  },
  {
    name: "Pizza Hut",
    description: "Online pizza delivery application front-end for Pizza Hut",
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
        name: "redux-toolkit",
        color: "text-yellow-300",
      },

      {
        name: "tailwind",
        color: "text-pink-300",
      },
    ],
    image: pizzahut,
    source_code_link: "https://github.com/Studawatta/PizzaHut-clone.git",
    link: "https://pizza-hut-clone-gamma.vercel.app/",
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
    image: sl_railways,
    source_code_link: "https://github.com/",
  },
];
