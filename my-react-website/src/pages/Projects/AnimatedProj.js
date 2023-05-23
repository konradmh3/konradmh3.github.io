import "../../style/Projects.css";
import { motion } from "framer-motion";


const AnimatedProj = (props) => {
  // add some code for when it renders the component it will change opacity to 1 like so:

    return (
      <>
        <h1>{ props.projectName }</h1>
        <div className="projectContainer">
          {/* to add a delay to the animation, we can add a delay property to the transition object like so: */}
          <motion.div animate={{ opacity: [0, 1], x: [-200, 0] }} transition={{ duration: .75, delay:  props.delay  }} className="projectContainerContent">
            <p>blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah</p>
          </motion.div>
          <motion.div animate={{ opacity: [0, 1], x: [200, 0] }} transition={{ duration: .75, delay: props.delay }} className="projectContainerContent">
            <p>blah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blahblah blah blah blah</p>
          </motion.div>
        </div></>
    );
  };
  
export default AnimatedProj;