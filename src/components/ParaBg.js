import { Parallax} from 'react-parallax';
import matches from "../assets/matches.jpg"
import {motion} from "framer-motion"
import Fade from 'react-reveal/Fade';

function ParaBg() {

  const insideStyles = {
    backgroundColor:"#FFE8D6",
    padding: 40,
    position: "absolute",
    top: "50%",
    left: "20%",
    
  };


  return (
    <Parallax bgImage={matches} strength={300}>
      <div style={{ height: 900 }}>
      <Fade cascade delay={750}>
        <motion.div 
          style={insideStyles}
          whileHover={{scale:1.1}}
        ><h1 className="cardtext">RSVP</h1></motion.div>
        </Fade>
      </div>
    </Parallax>)

}

export default ParaBg