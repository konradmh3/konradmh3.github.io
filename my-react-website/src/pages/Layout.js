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
      } else if (currentPage === "/projects") {
        // disable scrolling with mouse wheel and remove scroll bar:
        document.body.style.overflow = "hidden";
      }

      // setCurrentPage(useLocation().pathname);
      // console.log(useLocation().pathname);
    }
    console.log(menuSectionHeight);
  }, [menuIsOpen, currentPage, menuSectionHeight]);

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
          >
            <span style={{ color: "grey" }}>&lt;</span>
            <span style={{color: "rgb(21, 110, 173)"}}>h1</span>
            <span style={{ color: "grey" }}>&gt;</span>
            Portfolio
            <span style={{ color: "grey" }}>&lt;/</span>
            <span style={{color: "rgb(21, 110, 173)"}}>h1</span>
            <span style={{ color: "grey" }}>&gt;</span>
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
        <motion.div
          style={{ top: "15%" }}
          initial={{ width: "0vw" }}
          animate={{ width: menuIsOpen ? "90vw" : "0vw" }}
          transition={{
            delay: menuIsOpen ? 1 : 0.2,
            duration: menuIsOpen ? 0.5 : 0.25,
          }}
          className="linkContainer"
        >
          <Link onClick={OpenMenuAboutMe} className="link" to="/">
            About Me
          </Link>
        </motion.div>
        <motion.div
          style={{ top: "30%" }}
          initial={{ width: "0vw" }}
          animate={{ width: menuIsOpen ? "90vw" : "0vw" }}
          transition={{
            delay: menuIsOpen ? 1.25 : 0.2,
            duration: menuIsOpen ? 0.5 : 0.25,
          }}
          className="linkContainer"
        >
          <Link onClick={OpenMenuProjects} className="link" to="projects">
            Projects
          </Link>
        </motion.div>
        <motion.div
          style={{ top: "45%" }}
          initial={{ width: "0vw" }}
          animate={{ width: menuIsOpen ? "90vw" : "0vw" }}
          transition={{
            delay: menuIsOpen ? 1.5 : 0.15,
            duration: menuIsOpen ? 0.5 : 0.25,
          }}
          className="linkContainer"
        >
          <a
            className="link"
            href="https://www.linkedin.com/in/konrad-hernandez/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </motion.div>
        <motion.div
          style={{ top: "60%" }}
          initial={{ width: "0vw" }}
          animate={{ width: menuIsOpen ? "90vw" : "0vw" }}
          transition={{
            delay: menuIsOpen ? 1.75 : 0.1,
            duration: menuIsOpen ? 0.5 : 0.25,
          }}
          className="linkContainer"
        >
          <a
            className="link"
            href="https://github.com/konradmh3"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </motion.div>
        <motion.div
          style={{ top: "75%" }}
          initial={{ width: "0vw"}}
          animate={{ width: menuIsOpen ? "90vw" : "0vw" }}
          transition={{
            delay: menuIsOpen ? 2 : 0.05,
            duration: menuIsOpen ? 0.5 : 0.25,
          }}
          className="linkContainer"
        >
          <a
            className="link"
            href={require("../assets/Resume_Konrad_Hernandez.pdf")}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </motion.div>





        <motion.div
          initial={{ height: 0 }}
          animate={{ height: menuSectionHeight }}
          transition={{ duration: 1, delay: menuIsOpen ? 0 : 0.75 }}
          className="menuSection"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: menuSectionHeight }}
          transition={{ duration: 1, delay: menuIsOpen ? 0.25 : 0.5 }}
          className="menuSection"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: menuSectionHeight }}
          transition={{ duration: 1, delay: menuIsOpen ? 0.5 : 0.25 }}
          className="menuSection"
        ></motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: menuSectionHeight }}
          transition={{ duration: 1, delay: menuIsOpen ? 0.75 : 0 }}
          className="menuSection"
        ></motion.div>
      </div>
      
      <Outlet />
    </>
  );
};
export default Layout;
