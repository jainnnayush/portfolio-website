"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      <span className="font-medium">Hello, I'm Ayush Jain</span>, a final-year undergraduate at 
      <span className="font-medium"> IIT Guwahati</span>, pursuing Btech in 
      <span className="font-medium"> Electronics and Electrical Engineering</span>. I am a passionate 
      <span className="font-medium"> Full-stack Developer</span> specializing in 
      <span className="font-medium"> MERN</span> and <span className="font-medium">Next.js</span>, with 2 years of project experience.
      I have successfully completed internship at <span className="font-medium">Samsung R&D Bangalore</span> where I gained hands-on experience in 
    <span className="font-medium"> Android development</span>, <span className="font-medium">Kotlin</span>, 
    and software engineering practices. My internship at Samsung also led to a 
    <span className="font-medium"> Pre-Placement Offer (PPO)</span>.
      Over the years, I have developed and implemented innovative solutions My technical toolkit includes 
    <span className="font-medium"> React.js, Node.js, MongoDB, Next.js </span> and <span className="font-medium">AWS </span>
    enabling me to build robust and scalable applications. In addition to my development skills, I have a strong foundation in 
    <span className="font-medium"> Data Structures and Algorithms (DSA)</span>. My achievements include being 
    a <span className="font-medium">Top 3 National Finalist in Meesho DICE</span> and a 
    <span className="font-medium"> top performer in Flipkart Grid 6.0, Sparkplug</span>. My journey has been driven by a passion 
    for learning, creating impactful solutions, and contributing to the tech community.
      </p>
      <p>
      <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and playing sports like cricket and badminton. In addition to that I also developed organizational and teamwork skills through my role as Hospitality Head at Alcheringa, IIT Guwahati.
      </p>
    </motion.section>
  );
}
