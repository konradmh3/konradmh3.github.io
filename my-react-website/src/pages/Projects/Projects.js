import "../../style/Page.css";
import ProjectsContent from "./ProjectsContent.js";
import Header from "../Templates/Header.js";

const Projects = () => {
    return (<>
    <Header page = "Projects"/>
    <h1>Projects</h1>
    <ProjectsContent />
    </>);
  };
  
  export default Projects;
  