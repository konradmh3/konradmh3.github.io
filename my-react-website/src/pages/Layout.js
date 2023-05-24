import { Outlet, Link } from "react-router-dom";
import "../style/Layout.css";
import "../style/Fonts.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Layout = () => {


  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };


  const scrollDirection = useScrollDirection();
  const className = scrollDirection === "down" ? "top-header-container-down" : "top-header-container";
  // console.log(scrollDirection);
  // console.log(className);



  return (
    <>
      <div className={className}>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="title"
        >
          <Link id="title" to="/">Konrad's Portfolio</Link>
        </motion.div>

        <motion.div
          animate={{ opacity: [0, 1], x: [-200, 0], marginRight: [20, 5] }}
          transition={{ duration: 0.75 }}
          className="navigator"
        >
          {/* if we want to use motion for the Link component, we have to use the motion version of the Link component, which is motion.a
           */}
          <Link id="titleFont" className="navButtons" to="/">
            About
          </Link>

          <Link id="titleFont" className="navButtons" to="projects">
            Projects
          </Link>

          <a
            id="titleFont"
            className="navButtons"
            href="https://github.com/konradmh3"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>

          <a
            id="titleFont"
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
