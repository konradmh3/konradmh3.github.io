import { forwardRef } from "react";
import "../../style/Projects.css"
import AnimatedProj from "./FooDoodProject"
import {motion} from "framer-motion"
import FooDoodProject from "./FooDoodProject";

const ProjectsNew = (props, ref) => {
  // lets make a variable conditional assignment to decide which project to display based on the project name prop
  const project1 = props.projectName === "FooDood" ? <FooDoodProject position="right"/> : <></>;
return (<>
    <motion.div className="fatherContainer" ref={ref} style={{backgroundColor: props.backgroundColor}}>
      {/* {project1} */}

      
    </motion.div>
    </>);
  };
  
  export default forwardRef(ProjectsNew);
  