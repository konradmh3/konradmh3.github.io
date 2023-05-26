import "../../style/Page.css";
import AnimatedProj from "./AnimatedProj";
import Header from "../Templates/Header.js";
import ProjectsNew from "../ProjectsNew";
import { useEffect, useState } from "react";
import { motion, useUnmountEffect } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
    const projectRefs = [useRef(), useRef(), useRef()];
    var displayedPage = 0;

    const executeScrollProject1 = () => {
      projectRefs[0].current?.scrollIntoView({behavior: 'smooth'})

    };

    const executeScrollProject2 = () => {
      projectRefs[1].current?.scrollIntoView({behavior: 'smooth'})
    };

    const executeScrollProject3 = () => {
      projectRefs[2].current?.scrollIntoView({behavior: 'smooth'})
    };



    return (
    <div className="scrollContainer">
      <motion.div whileHover={{scale: 1.1}} onClick={executeScrollProject1} className="staticScrollerProject1"></motion.div>
      <motion.div whileHover={{scale: 1.1}} onClick={executeScrollProject2} className="staticScrollerProject2"></motion.div>
      <motion.div whileHover={{scale: 1.1}} onClick={executeScrollProject3} className="staticScrollerProject3"></motion.div>
      <ProjectsNew ref={projectRefs[0]} backgroundColor="lightblue"/>
      <ProjectsNew ref={projectRefs[1]} backgroundColor="lightgreen"/>
      <ProjectsNew ref={projectRefs[2]} backgroundColor="lightred"/>
    </div>
    );
  };
  
  export default Projects;
  