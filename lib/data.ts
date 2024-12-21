import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import SearchPreview from "@/public/SearchPreview.png";
import UserDashboard from "@/public/UserDashboard.png";
import portfolio from "@/public/portfolio.png"
import coolab from "@/public/Coolab.png"

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
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Intern | Samsung Bangalore",
    location: "Bangalore, India",
    description:
      "During my internship at Samsung R&D Bangalore, I developed an Android application in Kotlin for tracking object movements, implemented 3D controllers for orientation and movement visualization, and optimized performance using advanced filter algorithms.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Ed Tech Platform",
    description:
      "StudyNotion simplifies education by providing access to diverse materials, enabling collaboration, and fostering interaction with educators to enhance learning.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "DealScout",
    description:
      "DealScout is an e-commerce scraping site that notifies users of price drops and alerts competitors about stock status, managed via cron jobs.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Headless UI"],
    imageUrl: rmtdevImg,
  },
  {
    title: "ShopAI",
    description:
      "ShopAI is a conversational outfit recommender for personalized fashion suggestions based on trends, budget, and cart history along with Twilio integration for WhatsApp support.",
    tags: ["React.js", "FastAPI","Vertex API"],
    imageUrl: SearchPreview,
  },
  {
    title: "OnlineJudge",
    description:
      "An online judge platform for coding challenges in multiple languages, allowing user submissions and verdicts based on hidden test case evaluations.",
    tags: ["React.js", "MongoDB","Node.js","Tailwind CSS","AWS EC2"],
    imageUrl: UserDashboard,
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio showcasing projects, skills, and achievements, built with Next.js for a modern and responsive design.",
    tags: ["Next.js","Tailwind CSS","TypeScript"],
    imageUrl: portfolio,
  },
  {
    title: "Campus Collaborate",
    description:
      "A collaborative web app for showcasing profiles, exploring projects, seeking help, and contributing to peers.",
    tags: ["React.js", "Firebase","Node.js","Express","Redux"],
    imageUrl: coolab,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C++",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "AWS*",
  "Javascript",
  "TypeScript*",
  "DBMS",
  "OOPS",
  "System Design",
  "DSA",
  "Machine Learning",
  "Blockchain Fundamentals",
  "MySQL"
] as const;
