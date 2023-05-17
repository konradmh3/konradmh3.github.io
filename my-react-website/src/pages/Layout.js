import { Outlet, Link } from "react-router-dom";
import "../style/Layout.css";
const Layout = () => {
  return (
    <>
      <div className="navigator">
        
            <Link to="/">About</Link>
          
            <Link to="projects">Projects</Link>
          
            <a href="https://github.com/konradmh3" target="_blank">Github</a>
          
            <a href="https://www.linkedin.com/in/konrad-hernandez/" target="_blank">LinkedIn</a>
          
      </div>

      <Outlet />
    </>
  );
};
export default Layout;
