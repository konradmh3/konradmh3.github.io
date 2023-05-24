import "../../style/Page.css";
import AnimatedProj from "./AnimatedProj";
import Header from "../Templates/Header.js";

const Projects = () => {
    return (<>
    <Header page = "Projects"/>
    <AnimatedProj projectName = "FooDood" delay={.66}/>
    <AnimatedProj projectName = "Home System" delay={.66}/>
    <AnimatedProj projectName = "Stick Game" delay={.66}/>
    <AnimatedProj projectName = "Key Logger" delay={.66}/>
    </>);
  };
  
  export default Projects;
  