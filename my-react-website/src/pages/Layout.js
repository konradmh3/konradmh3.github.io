import { Outlet, Link, useLocation } from "react-router-dom";
import "../style/Layout.css";
import "../style/Fonts.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Layout = () => {
  // here lets add a state var to save if menu is open
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuSectionHeight, setMenuSectionHeight] = useState("0vh");
  const [pageNameDisplayed, setPageNamedisplayed] = useState(1);
  const [nameDelay, setNameDelay] = useState(0);
  const [nameDuration, setNameDuration] = useState(0);
  const [zIndexOfMenu, setZIndexOfMenu] = useState(2);
  const [titleMenuColor, setTitleMenuColor] = useState("rgb(255,255,255)");
  const [currentPage, setCurrentPage] = useState(useLocation().pathname);      


  useEffect(() => {
    if (menuIsOpen) {
      setNameDuration(0);
      setNameDelay(0);
      setMenuSectionHeight("100vh");
      setPageNamedisplayed(0);
      setZIndexOfMenu(2);
      console.log(currentPage);
      setTitleMenuColor("rgb(0, 0, 0)");
      document.body.style.overflow = "hidden";

    } else {
      setNameDuration(1);
      setNameDelay(1);
      setMenuSectionHeight("0vh");
      setPageNamedisplayed(1);
      setZIndexOfMenu(0);
      console.log(currentPage);        
      window.scrollTo(0, 0);

      if (currentPage === "/") {
        setTitleMenuColor("rgb(255,255,255)");      
        // enable scrolling with mouse wheel and add scroll bar:
        document.body.style.overflow = "auto";
      }else if (currentPage === "/projects") {
        // disable scrolling with mouse wheel and remove scroll bar:
        document.body.style.overflow = "hidden";
      }

      // setCurrentPage(useLocation().pathname);
      // console.log(useLocation().pathname);
    }
    console.log(menuSectionHeight);
  }, [menuIsOpen]);

  function OpenMenu() {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
  }
  function OpenMenuAboutMe() {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
    // here we also want to set title color to white
    setTitleMenuColor("rgb(255,255,255)");
    setCurrentPage("/");
    window.scrollTo(0, 0);
    // resets page to top when menu is closed
  }
  function OpenMenuProjects() {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
    // here we also want to set title color to black
    setTitleMenuColor("rgb(0, 0, 0)");
    setCurrentPage("/projects");
    window.scrollTo(0, 0);
    // resets page to top when menu is closed
  }

  return (
    <>
      <div className="top-header-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ color: titleMenuColor, opacity: pageNameDisplayed }}
          transition={{ duration: nameDuration, delay: nameDelay }}
          className="title"
        > 
          <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                id="title"
              >Portfolio
          </motion.div>
        </motion.div>

        <motion.div
          className="MenuButton"
          onClick={OpenMenu}
          whileHover={{ scale: 1.1 }}
          
        >
          <motion.div
            animate={{ backgroundColor: titleMenuColor }}
            transition={{ duration: 1, delay: nameDelay }}
            className="menuButtonLine"
          ></motion.div>
          <motion.div
            animate={{ backgroundColor: titleMenuColor }}
            transition={{ duration: 1, delay: nameDelay }}
            className="menuButtonLine"
          ></motion.div>
          <motion.div
            animate={{ backgroundColor: titleMenuColor }}
            transition={{ duration: 1, delay: nameDelay }}
            className="menuButtonLine"
          ></motion.div>
        </motion.div>
      </div>
      <div style={{ zIndex: zIndexOfMenu }} className="menuContainer">
        {/* lets add nicer animated links to other pages and locations
        and lets position these buttons over all 4 sections of the menu*/}
        



        <motion.div
          initial={{ height: 0 }}
          animate={{ height: menuSectionHeight }}
          transition={{ duration: 1, delay: 0 }}
          className="menuSection"
        >
           <Link
            onClick={OpenMenuAboutMe}
            className="menuContentContainer"
            to="/"
            style={{display: "flex", height: "5vh", marginTop: "10rem", backgroundColor: "red", alignItems: "center"}}
          >
            {/* going to have to change each link to its own component as well as insert a motino div within link to add hover and click animations */}
            About Me
          </Link>
          <Link
            onClick={OpenMenuProjects}
            className="menuContentContainer"
            to="projects"
          >
            Projects
          </Link>
          <a className="menuContentContainer" href="https://www.linkedin.com/in/konrad-hernandez/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="menuContentContainer" href="https://github.com/konradmh3" target="_blank" rel="noreferrer">Github</a>
          <a className="menuContentContainer" href={require("../assets/Resume_Konrad_Hernandez.pdf")} target="_blank" rel="noreferrer">Resume</a>
        </motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: menuSectionHeight }}
          transition={{ duration: 1, delay: 0.25 }}
          className="menuSection"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: menuSectionHeight }}
          transition={{ duration: 1, delay: 0.5 }}
          className="menuSection"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: menuSectionHeight }}
          transition={{ duration: 1, delay: 0.75 }}
          className="menuSection"
        ></motion.div>
      </div>

      <Outlet />
    </>
  );
};
export default (Layout);
