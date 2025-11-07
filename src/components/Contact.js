// src/components/Contact.js
import React from "react";
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = {
  instagram: "https://www.instagram.com/_samiran_barman?igsh=MXRlMWN2OHg1ZGFjZg==",
  facebook: "https://www.facebook.com/hrithik.sirohi.7",
  github: "https://github.com/samiran003",
  linkedin: "https://linkedin.com/in/samiran-barman2012",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-950"
    >
      <div className="w-full max-w-3xl bg-gray-900/70 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center shadow-lg">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I’m open to collaborations, freelance work, and exciting opportunities.
          Feel free to connect with me on any of the platforms below!
        </motion.p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
          <motion.a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-500/20 transition shadow-sm text-white"
            whileHover={{ scale: 1.15 }}
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </motion.a>

          <motion.a
            href={socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-500/20 transition shadow-sm text-white"
            whileHover={{ scale: 1.15 }}
            aria-label="Facebook"
          >
            <FaFacebookF size={22} />
          </motion.a>

          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-500/20 transition shadow-sm text-white"
            whileHover={{ scale: 1.15 }}
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </motion.a>

          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-500/20 transition shadow-sm text-white"
            whileHover={{ scale: 1.15 }}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={22} />
          </motion.a>
        </div>

        <motion.a
          href="mailto:samiran3737@gmail.com"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Email Me
        </motion.a>

        <p className="text-gray-500 mt-6 text-sm">
          Prefer messaging? DM me on any of the platforms above.
        </p>
      </div>
    </section>
  );
};

export default Contact;
              