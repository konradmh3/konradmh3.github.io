import { Outlet, Link } from "react-router-dom";
import "../style/Layout.css";
import "../style/Fonts.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Layout = () => {
  // here lets add a state var to save if menu is open
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [menuSectionHeight, setMenuSectionHeight] = useState("0vh")
  const [pageNameDisplayed, setPageNamedisplayed] = useState(1)
  const [nameDelay, setNameDelay] = useState(0)
  const [nameDuration, setNameDuration] = useState(0)
  const [zIndexOfMenu, setZIndexOfMenu] = useState(2)

  // ALSO we are going to need to add a variable for the collor of the title of page and menu button to turn white



  useEffect(()=>{
    if (menuIsOpen){
      setNameDuration(0)
      setNameDelay(0)
      setMenuSectionHeight("100vh")
      setPageNamedisplayed(0)
      setZIndexOfMenu(2)
    }else{
      setNameDuration(1)
      setNameDelay(1)
      setMenuSectionHeight("0vh")
      setPageNamedisplayed(1)
      setZIndexOfMenu(0)
    }
    console.log(menuSectionHeight)
  }, [menuIsOpen])


  function OpenMenu() {
    setMenuIsOpen(menuIsOpen=>!menuIsOpen)
  }




  return (
    <>
      <div className="top-header-container">
        <motion.div
        initial={{opacity: 0}}
          animate={{ opacity: pageNameDisplayed }}
          transition={{ duration: nameDuration, delay: nameDelay }}
          className="title"
        >
          <div id="title">Portfolio</div>
        </motion.div>

        <motion.div className="MenuButton" onClick={OpenMenu} whileHover={{scale: 1.1}}>
          <img src={require("../assets/staticMenu.png")} alt="menu pic" />
        </motion.div>
      </div>
      <div style={{zIndex: zIndexOfMenu}} className="menuContainer">
        <motion.div initial={{height: 0}} animate={{height: menuSectionHeight}} transition={{duration:1, delay: 0}} className="menuSection">

          <div className="menuContentContainer">Menu</div>
          <Link onClick={OpenMenu} className="menuContentContainer" to="/">
            About Me
          </Link>
          <Link onClick={OpenMenu} className="menuContentContainer" to="projects">
            Projects
          </Link>
          <div className="menuContentContainer">LinkedIn</div>
          <div className="menuContentContainer">Github</div>
          <div className="menuContentContainer">Resume</div>


        </motion.div>
        <motion.div initial={{height: 0}} animate={{height: menuSectionHeight}} transition={{duration:1, delay: .25}} className="menuSection">
        </motion.div>
        <motion.div initial={{height: 0}} animate={{height: menuSectionHeight}} transition={{duration:1, delay: .5}} className="menuSection">
          
        </motion.div>
        <motion.div initial={{height: 0}} animate={{height: menuSectionHeight}} transition={{duration:1, delay: .75}} className="menuSection">
          
        </motion.div>
      </div>








        {/* <motion.div
          animate={{ opacity: [0, 1], x: [-200, 0], marginRight: [20, 5] }}
          transition={{ duration: 0.75 }}
          className="navigator"
        >
         
          <Link to="/">
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
        </motion.div> */}
      

      <Outlet />
    </>
  );
};
export default Layout;
