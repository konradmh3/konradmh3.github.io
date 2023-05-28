import { forwardRef } from "react";
import "../style/Projects.css"
import AnimatedProj from "./Projects/AnimatedProj"

const ProjectsNew = (props, ref) => {
    return (<>
    <div className="fatherContainer" ref={ref} style={{backgroundColor: props.backgroundColor}}>
      {/* here i can shoose between different components i want to add to the projects page. */}
      {/* then add all props needed to padd to that component + an additional prop to choose which to display like a boolean.
          we can then take that boolean and use an if else to decide what to display. Example of if else in animatedProject.js
      */}
      {/* <AnimatedProj position="left" delay="0" projectName="fooDoodTitle"/> */}
    </div>
    </>);
  };
  
  export default forwardRef(ProjectsNew);
  