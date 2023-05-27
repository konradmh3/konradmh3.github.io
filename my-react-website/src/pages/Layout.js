import { Outlet, Link } from "react-router-dom";
import "../style/Layout.css";
import "../style/Fonts.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Layout = () => {
  // here lets add a state var to save if menu is open
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [menuSectionHeight, setMenuSectionHeight] = useState("0vh")
  const [pageNameDisplayed, setPageNamedisplayed] = useState("block")
  const [zIndexOfMenu, setZIndexOfMenu] = useState("block")



  useEffect(()=>{
    if (menuIsOpen){
      setMenuSectionHeight("100vh")
      setPageNamedisplayed("none")
      setZIndexOfMenu(2)
    }else{
      setMenuSectionHeight("0vh")
      setPageNamedisplayed("block")
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
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="title"
        >
          <Link style={{display: pageNameDisplayed}} id="title" to="projects">Portfolio</Link>
        </motion.div>

        <motion.div className="MenuButton" onClick={OpenMenu} whileHover={{scale: 1.1}}>
          <img src={require("../assets/staticMenu.png")} alt="menu pic" />
        </motion.div>
      </div>
      <div style={{zIndex: zIndexOfMenu}} className="menuContainer">
        <motion.div initial={{height: 0}} animate={{height: menuSectionHeight}} transition={{duration:1, delay: 0}} className="menuSection">

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
        </motion.div> */}
      

      <Outlet />
    </>
  );
};
export default Layout;
