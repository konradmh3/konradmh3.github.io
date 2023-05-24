import "../../style/Header.css";
import "../../style/Fonts.css";
import { motion } from "framer-motion";

const Header = (props) => {
  return (
    <>
      <div
        className="about-me-header"
        style={{
          backgroundImage: `url(${require("../../assets/monstera.jpg")})`,
        }}
      >
        <motion.div
          animate={{ opacity: [0, 1], x: [-200, 0] }}
          transition={{ duration: .75, delay: 0.33 }}
          className="about-me-header-text"
          id="headerTitle"
        >
          <p>{props.page}</p>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1], x: [200, 0] }}
          transition={{ duration: .75, delay: 0.33 }}
          className="about-me-header-rnd-image"
        >
          <img src={require("../../assets/profilepic.png")} alt="profile pic" />
        </motion.div>
      </div>
    </>
  );
};

export default Header;
