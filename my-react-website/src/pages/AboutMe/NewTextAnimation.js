// This component will take in a string as an argument and animate it using typewriter effect api
import "../../style/AboutMe.css";
import Typewriter from 'typewriter-effect';
import React from 'react';
import {motion} from 'framer-motion';

const NewTextAnimation = ({ sth1tag, text , endh1tag}) => {

    return (
        <motion.div style={{  display: "flex", flexDirection: "row"}} animate={{ opacity: [0, 1], transition: {delay: 1} }}>
        {sth1tag}
        <Typewriter
        options={{
            strings: text,
            autoStart: true,
            loop: true,
        }}
        />
        {endh1tag}
        </motion.div>
    );
};

export default NewTextAnimation;