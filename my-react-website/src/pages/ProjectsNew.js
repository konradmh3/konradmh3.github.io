import { forwardRef } from "react";
import "../style/Projects.css"

const ProjectsNew = (props, ref) => {
    return (<>
    <div className="fatherContainer" ref={ref} style={{backgroundColor: props.backgroundColor}}>

    </div>
    </>);
  };
  
  export default forwardRef(ProjectsNew);
  