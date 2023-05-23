import "../../style/Page.css";
import AnimatedProj from "./AnimatedProj";
import Header from "../Templates/Header.js";

const Projects = () => {
    return (<>
    <Header page = "Projects"/>
    <AnimatedProj projectName = "FooDood" delay={.66}/>
    <AnimatedProj projectName = "KeyLogger" delay={.99}/>
    <AnimatedProj projectName = "Web Remote" delay={1.32}/>
    <AnimatedProj projectName = "Pi Car" delay={1.65}/>

    </>);
  };
  
  export default Projects;
  