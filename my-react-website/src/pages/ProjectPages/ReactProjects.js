import "../../style/ReactProjects.css";
import { useEffect } from 'react';

const ReactProjects = () => {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, []);
    return (
        <div className='reactProjectsContainer'>
        </div>
    )
}

export default ReactProjects;