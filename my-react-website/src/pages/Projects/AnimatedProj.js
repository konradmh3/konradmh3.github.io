import "../../style/Projects.css";
import { motion } from "framer-motion";

const AnimatedProj = (props) => {
  const projectPosition =
    props.position === "right" ? (
      <>
        <motion.div
          animate={{ opacity: [0, 1], transition: { delay: props.delay } }}
          className="projectContainer"
        >
          <div className="projectTitle">
            {/* insert an image here */}
            <img
              src={require("../../assets/" + props.projectName + ".png")}
              alt={props.projectName}
            />
          </div>

          <div className="projectInfo">
            <p>
              Hello my name is konrad. blah blah blah blah blah i like to eat
              food and type random stuff when i dont know what to type so i can
              see how things will look when they are fully typedout and stuff
              and yeah! This padding looks like it will hold well!
            </p>
          </div>
          <div className="parallelogramContainer-right">
            <motion.div
              className="parallelogram"
              initial={{ x: "0%", skew: 10 }}
              whileHover={{ scale: 1.1, x: "-50%", skew: 10 }}
            ></motion.div>
          </div>
        </motion.div>
      </>
    ) : (
      <>
        <motion.div
          animate={{ opacity: [0, 1], transition: { delay: props.delay } }}
          className="projectContainer"
        >
          <div className="projectTitle">
            {/* insert an image here */}
            <img
              src={require("../../assets/" + props.projectName + ".png")}
              alt={props.projectName}
            />
          </div>

          <div className="parallelogramContainer-left">
            <motion.div
              className="parallelogram"
              initial={{ x: "0%", skew: 10 }}
              whileHover={{ scale: 1.1, x: "50%", skew: 10 }}
            ></motion.div>
          </div>
          <div className="projectInfo">
            <p>
              Hello my name is konrad. blah blah blah blah blah i like to eat
              food and type random stuff when i dont know what to type so i can
              see how things will look when they are fully typedout and stuff
              and yeah! This padding looks like it will hold well!
            </p>
          </div>
        </motion.div>
      </>
    );
    console.log(projectPosition);
  // add some code for when it renders the component it will change opacity to 1 like so:

  return projectPosition;
};

export default AnimatedProj;
