import { forwardRef } from "react";
import "../../style/Projects.css"
import AnimatedProj from "./FooDoodProject"
import {motion} from "framer-motion"
import FooDoodProject from "./FooDoodProject";

const ProjectsNew = (props, ref) => {
  // lets make a variable conditional assignment to decide which project to display based on the project name prop
  const project = props.projectName === "FooDood" ? <FooDoodProject position="right"/> : <></>;
return (<>
    <motion.div className="fatherContainer" ref={ref} style={{backgroundColor: props.backgroundColor}}>
      {/* here i can shoose between different components i want to add to the projects page. */}
      {/* then add all props needed to padd to that component + an additional prop to choose which to display like a boolean.
          we can then take that boolean and use an if else to decide what to display. Example of if else in animatedProject.js
      */}
      {project}
      
    </motion.div>
    </>);
  };
  
  export default forwardRef(ProjectsNew);
  