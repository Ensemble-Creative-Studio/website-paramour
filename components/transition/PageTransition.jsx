// components/Layout/index.js
"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const Layout = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

    useEffect(() => {
      if (lenis && lenis.scrollTo) {
        lenis.scrollTo(0, { duration: 0.01  });       }
  }, []);
  
    

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
