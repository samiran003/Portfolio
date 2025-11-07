// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import samiranPic from "../assets/samiran.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 md:pt-0 gap-10 bg-[#090013] text-white"
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-3"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I’m <span className="text-[#a855f7]">Samiran Barman</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-[#d8b4fe] mb-6"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          A passionate Web Developer building clean, responsive, and creative web
          experiences.
        </motion.p>

        <motion.a
          href="#projects"
          className="bg-[#a855f7] hover:bg-[#ec4899] text-white px-6 py-3 rounded-full font-medium transition transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.08 }}
        >
          View My Work
        </motion.a>
      </div>

      <motion.div
        className="w-full md:w-auto flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
  src={samiranPic}
  alt="Samiran Barman"
  className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-[#38bdf8] shadow-[0_0_40px_#38bdf8] floating"
/>

      </motion.div>
    </section>
  );
};

export default Hero;
