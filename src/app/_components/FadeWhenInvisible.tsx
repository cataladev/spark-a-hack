"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.5 }} 
      transition={{ duration: 0.6 }} 
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
