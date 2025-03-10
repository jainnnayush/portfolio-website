import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import UserDashboard from "@/public/UserDashboard.png";
import portfolio from "@/public/portfolio.png"
import coolab from "@/public/Coolab.png"
import deployx from "@/public/deployx.png"

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
  {
    title: "Full Stack Intern | Alphaherd - A SaaS platform for Clinics",
    location: "Remote",
    description:
      "As a Full Stack Intern, I developed RESTful APIs using Next.js, Node.js, and SQL with a focus on query optimization, error handling, and secure data operations. I optimized website performance using Sentry.io, server-side caching, React hooks, and lazy loading. Additionally, I integrated automated Email and WhatsApp messaging for seamless client communication.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  }
] as const;

export const projectsData = [
  {
    title: "DeployX",
    description:
      "DeployX is a scalable and secure deployment platform that automates the build and deployment process using Docker containers, AWS ECS, and ECR.",
    tags: ["Node.js", "Docker", "AWS", "Redis"],
    imageUrl: deployx,
    githubUrl:"https://github.com/jainnnayush/vercel"
  },
  {
    title: "DealScout",
    description:
      "DealScout is an e-commerce scraping site that notifies users of price drops and alerts competitors about stock status, managed via cron jobs.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Headless UI"],
    imageUrl: rmtdevImg,
    githubUrl:"https://github.com/jainnnayush/PriceTracker/tree/main/Pricewise-main"
  },
  {
    title: "OnlineJudge",
    description:
      "An online judge platform for coding challenges in multiple languages, allowing user submissions and verdicts based on hidden test case evaluations.",
    tags: ["React.js", "MongoDB","Node.js","Tailwind CSS","AWS EC2"],
    imageUrl: UserDashboard,
    githubUrl:"https://github.com/jainnnayush/OnlineJudge"
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio showcasing projects, skills, and achievements, built with Next.js for a modern and responsive design.",
    tags: ["Next.js","Tailwind CSS","TypeScript"],
    imageUrl: portfolio,
    githubUrl:"https://github.com/jainnnayush/portfolio-website"
  },
  {
    title: "Campus Collaborate",
    description:
      "A collaborative web app for showcasing profiles, exploring projects, seeking help, and contributing to peers.",
    tags: ["React.js", "Firebase","Node.js","Express","Redux"],
    imageUrl: coolab,
    githubUrl:"https://github.com/jainnnayush/Coolab"
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
  "AWS",
  "Docker",
  "Redis",
  "Kubernetes",
  "Javascript",
  "TypeScript",
  "DBMS",
  "OOPS",
  "High level System Design",
  "Low level System Design",
  "DSA",
  "Machine Learning",
  "Blockchain Fundamentals",
  "MySQL",
] as const;
