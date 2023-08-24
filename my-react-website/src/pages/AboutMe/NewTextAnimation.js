// This component will take in a string as an argument and animate it using typewriter effect api

import Typewriter from 'typewriter-effect';
import React from 'react';
import {motion} from 'framer-motion';

const NewTextAnimation = ({ text }) => {
    return (
        <motion.div animate={{ opacity: [0, 1], transition: {delay: 1} }}>
        <Typewriter
        options={{
            strings: text,
            autoStart: true,
            loop: true,
        }}
        />
        </motion.div>
    );
};

export default NewTextAnimation;