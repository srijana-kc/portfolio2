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
      <SectionHeading>About Me</SectionHeading>
<p className="mb-3">
  After graduating with a degree in{" "}
  <span className="font-medium">Accounting</span>, I decided to pursue my
  passion for design. I immersed myself in the world of UI/UX design, and
  quickly realized that creating visually engaging, user-centered experiences
  was my true calling. My primary tool is{" "}
  <span className="font-medium">Figma</span>, where I craft intuitive, seamless
  interfaces that enhance user interaction.
</p>

<p className="mb-3">
  <span className="italic">My favorite part of design</span> is the problem-solving
  process, where I can turn abstract concepts into tangible, functional designs.
  I specialize in{" "}
  <span className="font-medium">UI design, UX research, prototyping, and design systems</span>,
  always focusing on the user's needs and creating intuitive digital experiences.
</p>

<p>
  <span className="italic">When I'm not designing</span>, I enjoy exploring my creative
  hobbies, including photography and animation. I also love playing video
  games, watching movies, and spending time with my famliy. I'm constantly learning
  new design techniques and expanding my skills in areas like{" "}
  <span className="font-medium">interaction design</span> and{" "}
  <span className="font-medium">design systems</span>. I am also learning to play the
  guitar and studying topics such as{" "}
  <span className="font-medium">history and philosophy</span>.
</p>

<p>
  I am currently looking for a{" "}
  <span className="font-medium">full-time position</span> as a UI/UX designer, where
  I can contribute to innovative projects and collaborate with a dynamic team.
</p>

    </motion.section>
  );
}
