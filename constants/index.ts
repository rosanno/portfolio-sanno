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
    title: "POS System",
    slug: "pos",
    year: "2024",
    type: "Web development",
    live: "",
    technologies: ["php", "laravel", "mysql", "bootstrap"],
    description:
      "In particular, this PHP Laravel-based Point of Sale (POS) system places transaction record-keeping at the forefront of its capabilities, making it an indispensable tool for businesses. This all-encompassing solution effortlessly manages products, sales, and customer interactions. To be more precise, the system helps to keep track of all the products along with their sales and so on(codeastro.com). The system’s admin panel provides complete control over product details, from names to images, enabling a seamless user experience. Notably, the system’s focus on a narrow target audience sets it apart, emphasizing essential features over complex integrations, a refreshing alternative to the market’s broad-spectrum offerings. In an overview of this web application, this project utilizes all the necessary aspects and outlines the features of the POS system.",
    image: "/assets/pos.png",
  },
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
    year: "2023",
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
