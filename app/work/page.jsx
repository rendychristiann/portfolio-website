"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "AI",
    title: "Posyandu Line",
    description:
      "This project, final project of the IBM Advance AI course (Studi Independen Kampus Merdeka), focuses on developing a digital posyandu platform and using AI algorithms (KNN) to predict infant stunting. I was responsible for leading the development of the AI model algorithm, deploying the AI model using Flask, and developing the web frontend.",
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "React" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/posyanduLine.jpg",
    live: "",
    github: "https://github.com/putrialuthfi/Cut-Nyak-Dien-Repository",
  },
  {
    num: "02",
    category: "fullstack",
    title: "AirSense (Undergraduate Thesis Project)",
    description:
      "This project, which is my thesis assignment at the University of Indonesia's Electrical Engineering department, involved creating a website to monitor air pollutant levels (PM2.5) at the university. I used React and Tailwind CSS for the frontend and Node.js (Express) for the backend development.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Tailwind CSS"},
      { name: "C/C++" },
    ],
    image: "/assets/airsense.png",
    live: "airsense-ftui.vercel.app",
    github: "https://github.com/rendychristiann/airsense",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Fluzz Team",
    description:
      "This Electrical Engineering Capstone Project was created to monitor toilet usage ethics, specifically whether toilets were flushed after use at FT UI. It utilized ESP32, a vibration sensor to monitor flush activity, an ultrasonic sensor to detect user presence, and web development with HTML, Bootstrap, JavaScript, and CSS.",
    stack: [
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "C/C++" },
    ],
    image: "/assets/fluzzTeam.png",
    live: "",
    github: "https://github.com/rendychristiann/toilet-monitoring-system",
  },
  {
    num: "04",
    category: "AI",
    title: "Sign Language (SIBI) Recognition System",
    description:
      "This project, part of the IBM Advance AI (Studi Independen Kampus Merdeka) course, focuses on developing an algorithm to detect SIBI sign language using Convolutional Neural Networks (CNNs).",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "Mediapipe" },
    ],
    image: "/assets/sibi.png",
    live: "",
    github:
      "https://github.com/rendychristiann/sibi-sign-language-recognition-cnn",
  },
  {
    num: "05",
    category: "signal processing",
    title: "Image Processing for Brain Tumor Detection",
    description:
      "This project, the culmination of the Signal Processing and Multimedia course, aims to use signal processing techniques to detect brain tumors in MRI images. It involves implementing image filtering and edge detection algorithms in MATLAB.",
    stack: [{ name: "MATLAB" }],
    image: "/assets/brain.png",
    live: "",
    github:
      "https://github.com/rendychristiann/sibi-sign-language-recognition-cnn",
  },
  {
    num: "06",
    category: "IoT",
    title: "Smart Air Quality and Sunlight Exposure Monitoring System",
    description:
      "As the final project of the Embedded Systems course, this project aimed to create a system for agriculture that detects air quality and sunlight exposure. It utilized ESP32, DHT11, LDR sensors, and integrated them with a web server.",
    stack: [
      { name: "C/C++" },
      { name: "Proteus" },
      { name: "Electrical Wiring" },
    ],
    image: "/assets/airquality.png",
    live: "",
    github:
      "https://github.com/rendychristiann/Air-Quality-and-Sunlight-Exposure-Monitoring-System-using-ESP32-for-IoT-Implementation",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //current slide index
    const currentIndex = swiper.activeIndex;
    //update project state from current slide
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease:"easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name} {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt=""/>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
