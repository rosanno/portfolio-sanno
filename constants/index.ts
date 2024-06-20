import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io";
import { FaReact, FaLaravel } from "react-icons/fa";
import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPhp,
} from "react-icons/si";

export const techStacks = [
  {
    name: "html5",
    icon: IoLogoHtml5,
  },
  {
    name: "css3",
    icon: IoLogoCss3,
  },
  {
    name: "javascript",
    icon: IoLogoJavascript,
  },
  {
    name: "typescript",
    icon: SiTypescript,
  },
  {
    name: "react.js",
    icon: FaReact,
  },
  {
    name: "next.js",
    icon: RiNextjsFill,
  },
  {
    name: "tailwindcss",
    icon: RiTailwindCssFill,
  },
  {
    name: "mongodb",
    icon: SiMongodb,
  },
  {
    name: "mysql",
    icon: SiMysql,
  },
  {
    name: "php",
    icon: SiPhp,
  },
  {
    name: "laravel",
    icon: FaLaravel,
  },
];

export const projects = [
  {
    title: "Finance Management System SAAS",
    slug: "finance",
    year: "2024",
    type: "Web development",
    live: "https://github.com/rosanno/finance-saas-demo",
    technologies: [
      "reactjs",
      "nextjs",
      "tailwindcss",
      "shadcn-ui",
      "clerk",
      "typescript",
      "hono.js",
      "postgresql",
      "drizzle orm",
    ],
    description:
      "Finance Management System is a comprehensive Software-as-a-Service (SaaS) solution designed to help individuals and businesses manage their finances efficiently. It offers features such as expense tracking, all within an intuitive and user-friendly interface. ",
    image: "/assets/finance.png",
  },
  {
    title: "GoodFood Ordering Platform",
    slug: "goodfood",
    year: "2024",
    type: "Web development",
    live: "https://food-ordering-platform.vercel.app/",
    technologies: [
      "reactjs",
      "nextjs",
      "tailwindcss",
      "shadcn-ui",
      "clerk",
      "framer-motion",
      "mongodb",
      "prisma orm",
    ],
    description:
      "GoodFood is a cutting-edge food ordering platform built with modern technologies for a seamless user experience.",
    image: "/assets/goodfood.png",
  },
  {
    title: "Movie Mania",
    slug: "movie-mania",
    year: "2023",
    type: "Web development",
    live: "https://moviemania-rosanno.vercel.app/",
    technologies: [
      "reactjs",
      "tailwindcss",
      "react-redux",
      "redux-toolkit",
      "tmdb api",
      "framer-motion",
    ],
    description:
      "Explore the world of cinema with MovieMania, a ReactJS-powered site featuring seamless integration of TMDB API, styled elegantly with TailwindCSS and enhanced by Framer Motion for a captivating user experience.",
    image: "/assets/moviemania.png",
  },
];
