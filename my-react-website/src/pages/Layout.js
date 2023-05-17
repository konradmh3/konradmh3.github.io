import { Outlet, Link } from "react-router-dom";
import "../style/Layout.css";
const Layout = () => {
  return (
    <>
    <div className="top-header-container">

      <div className="title">
        <Link to="/">Konrads Website</Link>
      </div>

      <div className="navigator">

            <Link className = "navButtons" to="/">About</Link>
          
            <Link className = "navButtons" to="projects">Projects</Link>
          
            <a className = "navButtons" href="https://github.com/konradmh3" rel="noreferrer" target="_blank">Github</a>
          
            <a className = "navButtons" href="https://www.linkedin.com/in/konrad-hernandez/" rel="noreferrer" target="_blank">LinkedIn</a>
          
      </div>

      
      </div><Outlet />
    </>
  );
};
export default Layout;
