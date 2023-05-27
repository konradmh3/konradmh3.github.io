import "../../style/Page.css";
import ProjectsNew from "../ProjectsNew";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const projectRefs = [useRef(), useRef(), useRef()];
  const [arrowUpDisplay, setArrowUpDisplay] = useState("none");
  const [arrowDownDisplay, setArrowDownDisplay] = useState("block");
  const [displayedPage, setDisplayedPage] = useState(0);

  useEffect(() => {
    projectRefs[displayedPage].current?.scrollIntoView({ behavior: "smooth" });
    if (arrowUpDisplay === "block" && displayedPage === 0) {
      setArrowUpDisplay("none");
    }
    if (arrowDownDisplay === "block" && displayedPage === 2) {
      setArrowDownDisplay("none");
    }
    if (arrowDownDisplay === "none" && displayedPage < 2) {
      setArrowDownDisplay("block");
    }
    if (arrowUpDisplay === "none" && displayedPage > 0) {
      setArrowUpDisplay("block");
    }
  }, [displayedPage]);

  const executeScrollUp = () => {
    if (displayedPage > 0) {
      setDisplayedPage(displayedPage - 1);
    } else {
      projectRefs[displayedPage].current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const executeScrollDown = () => {
    // edit this when you add a project!
    if (displayedPage < 2) {
      setDisplayedPage(displayedPage + 1);
      console.log(displayedPage);
    } else {
      projectRefs[displayedPage].current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="scrollContainer">
      <motion.div
        style={{ display: arrowUpDisplay }}
        animate={{ opacity: [0, 1], rotate: [0, -90] }}
        transition={{ duration: 1 }}
        initial={{ x: -100, y: -100 }}
        whileHover={{ scale: 1.1, x: -100, y: -100 }}
        onClick={executeScrollUp}
        className="staticScrollerUp"
      >
        <img
          src={require("../../assets/" + "arrow(1)" + ".png")}
          alt={"arrow"}
        />
      </motion.div>
      <motion.div
        style={{ display: arrowDownDisplay }}
        animate={{ opacity: [0, 1], rotate: [0, 90] }}
        transition={{ duration: 1 }}
        initial={{ x: -100, y: -100 }}
        whileHover={{ scale: 1.1, x: -100, y: -100 }}
        onClick={executeScrollDown}
        className="staticScrollerDown"
      >
        <img
          src={require("../../assets/" + "arrow(1)" + ".png")}
          alt={"arrow"}
        />
      </motion.div>
      <ProjectsNew ref={projectRefs[0]} backgroundColor="lightblue" />
      <ProjectsNew ref={projectRefs[1]} backgroundColor="lightgreen" />
      <ProjectsNew ref={projectRefs[2]} backgroundColor="#ffb365" />
    </div>
  );
};

export default Projects;
