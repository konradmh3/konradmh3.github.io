// This component will take in a string as an argument and animate it using typewriter effect api
import "../../style/AboutMe.css";
import Typewriter from 'typewriter-effect';
import React from 'react';
import {motion} from 'framer-motion';

const NewTextAnimation = ( props ) => {
    return (
        <motion.div style={{  display: "flex", flexDirection: "row"}} animate={{ opacity: [0, 1], transition: {delay: 1} }}>
        {props.lttag1}
        {props.sth1tag}
        {props.gttag1}
        <Typewriter
        options={{
            strings: props.text,
            autoStart: true,
            loop: true,
            delay: 25,
            deleteSpeed: 20,
        }}
        />
        {props.lttag2}
        {props.endh1tag}
        {props.gttag2}
        </motion.div>
    );
};

export default NewTextAnimation;