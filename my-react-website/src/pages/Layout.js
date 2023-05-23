import { Outlet, Link } from "react-router-dom";
import "../style/Layout.css";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <>
      <div className="top-header-container">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="title"
        >
          <Link to="/">Konrads Website</Link>
        </motion.div>

        <motion.div
          animate={{ opacity: [0, 1], x: [-200, 0], marginRight: [20, 5] }}
          transition={{ duration: 0.75 }}
          className="navigator"
        >
          {/* if we want to use motion for the Link component, we have to use the motion version of the Link component, which is motion.a
           */}
          <Link className="navButtons" to="/">
            About
          </Link>

          <Link className="navButtons" to="projects">
            Projects
          </Link>

          <a
            className="navButtons"
            href="https://github.com/konradmh3"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>

          <a
            className="navButtons"
            href="https://www.linkedin.com/in/konrad-hernandez/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <Outlet />
    </>
  );
};
export default Layout;
