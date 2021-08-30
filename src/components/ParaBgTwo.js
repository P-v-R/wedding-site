import { Parallax } from 'react-parallax';
import still from "../assets/stilllife.jpg"
import { motion } from "framer-motion";
import Fade from 'react-reveal/Fade';

function ParaBgTwo() {

  const insideStyles = {
    backgroundColor: "#FFE8D6",
    padding: 40,
    position: "absolute",
    top: "50%",
    left: "70%",

  };


  return (
    <Parallax bgImage={still} strength={300}>
      <div style={{ height: 1200 }}>
      <Fade cascade delay={750}>
        <motion.div 
          style={insideStyles}
          whileHover={{scale:1.1}}
        ><h1 className="cardtext">Registry</h1></motion.div>
        </Fade>
      </div>
    </Parallax>)

}

export default ParaBgTwo