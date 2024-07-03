"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  {
    num: "01",
    title: "Software Engineering",
    description:
      "I excel in software engineering, with proficiency in JavaScript (React, Node, Express), HTML, CSS, and PHP, from frontend to backend development.",
    href: "",
  },
  {
    num: "02",
    title: "Telecommunication System",
    description:
      "I excel in telecommunication systems, focusing particularly on wireless communication technologies, digital communication, signal processing, and fiber optics network.",
    href: "",
  },
  {
    num: "03",
    title: "Artificial Intelligence",
    description:
      "I have acquired knowledge in artificial intelligence, focusing in classification algorithms, deep learning, and object detection. I am adept at developing AI-driven solutions to address intricate challenges across different fields.",
    href: "",
  },
  {
    num: "04",
    title: "Electrical Engineering",
    description:
      "I have acquired knowledge in electrical engineering, spans from circuit design and power systems to control systems, ensuring robust solutions for diverse technological challenges.",
    href: "",
  },
  {
    num: "05",
    title: "Data Science",
    description:
      "I possess strong interest in data science, including proficiency in data analysis, machine learning, statistical modeling, and data visualization",
    href: "",
  },
  {
    num: "06",
    title: "Internet-of-Things (IoT)",
    description:
      "I specialize in Internet-of-Things (IoT), especially in LPWAN and automation technology, proficient in developing interconnected systems and leveraging IoT technologies to create smart solutions for diverse applications.",
    href: "",
  },
];

const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{skill.num}</div>
                  
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{skill.title}</h2>
                <p className="text-white/60 ">{skill.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
