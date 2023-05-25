import "../../style/Page.css";
import AnimatedProj from "./AnimatedProj";
import Header from "../Templates/Header.js";

const Projects = () => {
    return (<>
    <Header page = "Projects"/>
    <AnimatedProj projectName = "fooDoodTitle" delay={.99} position = "left"/>
    <AnimatedProj projectName = "fooDoodTitle" delay={.99} position = "right"/>
    </>);
  };
  
  export default Projects;
  