// this component will pass in a text string as an argument and split each letter in string to array:

import React from 'react';
import { motion } from 'framer-motion';
import "../../style/Fonts.css";

const TextAnimation = ({ text }) => {
    const letters = Array.from(text);
    // now for each letter in array map to a div
// Variants for Container
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.02, delayChildren: 1 * i },
        }),
    };

    // Variants for each letter
    const child = {
        visible: {
        opacity: 1,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
        },
        hidden: {
        opacity: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
        },
    };

    return (
        <motion.div
      style={{ display: "flex", padding: "2rem", paddingTop: "5rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap", color: "white", fontSize: "1.5rem", height: "2%"}}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
        
    );
};

export default TextAnimation;

