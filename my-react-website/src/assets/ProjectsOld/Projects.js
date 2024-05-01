// import "../../style/Page.css";
// import ProjectsNew from "./ProjectsNew";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useRef } from "react";

// const Projects = () => {
//   const projectRefs = [useRef(), useRef(), useRef()];
//   const [arrowUpDisplay, setArrowUpDisplay] = useState("none");
//   const [arrowDownDisplay, setArrowDownDisplay] = useState("block");
//   const [displayedPage, setDisplayedPage] = useState(0);

//   useEffect(() => {
//     projectRefs[displayedPage].current?.scrollIntoView({ behavior: "smooth" });
//     if (arrowUpDisplay === "block" && displayedPage === 0) {
//       setArrowUpDisplay("none");
//     }
//     if (arrowDownDisplay === "block" && displayedPage === 2) {
//       setArrowDownDisplay("none");
//     }
//     if (arrowDownDisplay === "none" && displayedPage < 2) {
//       setArrowDownDisplay("block");
//     }
//     if (arrowUpDisplay === "none" && displayedPage > 0) {
//       setArrowUpDisplay("block");
//     }
//   }, [displayedPage]);

//   const executeScrollUp = () => {
//     if (displayedPage > 0) {
//       setDisplayedPage(displayedPage - 1);
//     } else {
//       projectRefs[displayedPage].current?.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   const executeScrollDown = () => {
//     // edit this when you add a project!
//     if (displayedPage < 2) {
//       setDisplayedPage(displayedPage + 1);
//       console.log(displayedPage);
//     } else {
//       projectRefs[displayedPage].current?.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <>
//       {/* ABSOLUTE */}
//       <motion.div
//         style={{ display: arrowUpDisplay }}
//         animate={{ y: [-100], transition: { duration: 1 } }}
//         className="staticScrollerUp"
//       >
//         <motion.div    onClick={executeScrollUp} initial={{rotate: -90}} whileHover={{scale: 1.1, rotate: [-90, -180, -270, -360, -450]}} transition={{duration: .25}} className="imgContainerUp">
//           <img
//             src={require("../../assets/" + "arrowFinal" + ".png")}
//             alt={"arrow"}
//           />
//         </motion.div>
//       </motion.div>
//       <motion.div
//         style={{ display: arrowDownDisplay }}
//         animate={{ y: [-100], transition: { duration: 1 } }}
        
//         className="staticScrollerDown"
//       >
//         <motion.div onClick={executeScrollDown} initial={{rotate: 90}} whileHover={{scale: 1.1, rotate: [90, 180, 270, 360, 450]}} transition={{duration: .25}} className="imgContainerDown">
//           <img
//             src={require("../../assets/" + "arrowFinal" + ".png")}
//             alt={"arrow"}
//           />
//         </motion.div>
//       </motion.div>
//       {/* ^^ABSOLUTE^^ */}
//       <ProjectsNew ref={projectRefs[0]} backgroundColor="blue" projectName="FooDood"/>
//       <ProjectsNew ref={projectRefs[1]} backgroundColor="#f0d817" projectName="none"/>
//       <ProjectsNew ref={projectRefs[2]} backgroundColor="#3eb308" projectName="none"/>
//     </>
//   );
// };

// export default Projects;
