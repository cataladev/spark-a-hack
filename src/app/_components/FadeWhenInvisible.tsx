"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start off-screen
      whileInView={{ opacity: 1, y: 0 }} // Animate into place
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is in view
      transition={{ duration: 0.6 }} // Fade duration
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
