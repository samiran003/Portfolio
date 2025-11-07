// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Personal Portfolio Website",
    desc: "A responsive personal portfolio built using React for the front-end and Node.js for the back-end. Includes sections for personal info, skills, projects, and a contact form connected to a backend server.",
    link: "https://github.com/samiran003/samiran-portfolio"
  },
  {
    name: "Railway Reservation System",
    desc: "A Django-based railway reservation system featuring secure two-factor authentication, separate user and admin panels, real-time train info, and features to search, book, and manage journeys.",
    link: "https://github.com/samiran003/Railway-Reservation-System"
  },
  {
    name: "React Native Mobile App",
    desc: "A mobile application built with React Native, demonstrating cross-platform features and real-time updates for users while on the move.",
    link: "https://github.com/samiran003/React-Native-Mobile-App"
  },
  {
    name: "CodSoft Internship Project",
    desc: "Developed during my Web Development Internship at CodSoft (June–July 2025). Built responsive web pages and worked with React, HTML, CSS and JavaScript to deliver tasks such as landing pages, portfolio layouts and calculator apps.",
    link: "https://github.com/samiran003/CODSOFT"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-10">Projects</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Here are a few of my academic, personal and internship projects that highlight my web and mobile development skills and creativity.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-blue-500/30 transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{p.name}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
