import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
import clothShop from "@/public/clothShop.png";
import interiorDesign from "@/public/interiorDesign.png";
import plantShop from "@/public/plantShop.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fashion Files",
    description:
      "An eye-catching clothes shop mobile app designed in Figma, featuring trendy layouts, vibrant product displays, and a smooth shopping experience.",
    tags: ["figma"],
    imageUrl:clothShop,
    demoUrl: "https://www.figma.com/design/lL2D6wedNGsZxDgc7Yyhfd/Untitled?node-id=0-1&p=f&t=JFjoAcgP56aRrDsr-0",
  },
  {
    title: "Golden Designs",
    description:
      "An elegant interior design website crafted in Figma, showcasing modern layouts, stylish portfolios, and a seamless user experience.",
    tags: ["figma"],
    imageUrl: interiorDesign,
    demoUrl: "https://www.figma.com/design/JxzcoGHUBIjhgptPs9rLCQ/Untitled?node-id=1-2&t=NZcueDhdi5yskzm6-0",
  },
  {
    title: "Breath Natural",
    description:
      "A nature-inspired plant nursery website designed in Figma, featuring vibrant greens, user-friendly navigation, and a seamless shopping experience.",
    tags: ["figma"],
    imageUrl: plantShop,
    demoUrl: "https://www.figma.com/design/Bme0kDVYmP5V207ybGeECA/Untitled?node-id=0-1&p=f&t=FU4TXEiM1A0EpXq4-0",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
