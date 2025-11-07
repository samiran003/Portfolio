// src/components/Resume.js
import React from "react";
import { motion } from "framer-motion";
import resumeFile from "../assets/samiran_barman_resume.pdf"; // 👈 your resume file

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-950 text-white text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Resume
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
      >
        You can view or download my full resume below to know more about my background,
        education, and experience.
      </motion.p>

      <motion.a
        href={resumeFile}
        download="Samiran_Barman_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition transform hover:scale-105 shadow-lg"
        whileHover={{ scale: 1.08 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        viewport={{ once: true }}
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
};

export default Resume;
