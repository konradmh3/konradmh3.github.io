import "../../style/Page.css";
import AnimatedProj from "./AnimatedProj";
import Header from "../Templates/Header.js";

const Projects = () => {
    return (<>
    <Header page = "Projects"/>
    <AnimatedProj projectName = "FooDood"/>
    <AnimatedProj projectName = "Home System"/>

    </>);
  };
  
  export default Projects;
  