// components/AnimatedPage.jsx
import { motion } from "framer-motion"; // assuming you're using framer-motion
import React from "react";

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

export default AnimatedPage;
