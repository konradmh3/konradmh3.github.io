import "../../style/Projects.css";
import { motion } from "framer-motion";

const AnimatedProj = (props) => {
  // add some code for when it renders the component it will change opacity to 1 like so:

  return (
    <>
      <div className="projectContainer">
        <h1>{props.projectName}</h1>

        <motion.div id="parallelogram" initial={{x: "60%", skew: 10}} whileHover={{scale: 1.1, x: "0%", skew: 10 }}>
          <div className="projectContentContainer">
            <p>display is set to none for content container</p>
          </div>

        </motion.div>
      </div>
    </>
  );
};

export default AnimatedProj;
