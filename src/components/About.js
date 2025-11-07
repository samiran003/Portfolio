import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gray-900 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-blue-400 mb-8">About Me</h2>
      <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
        I’m a dedicated web developer specializing in front-end development using React and TailwindCSS.
        I enjoy transforming ideas into visually appealing and functional websites.
        I focus on clean design, performance, and great user experience.
      </p>
    </motion.section>
  );
};

export default About;
