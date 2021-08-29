import { Parallax} from 'react-parallax';
import matches from "../assets/matches.jpg"
import {motion} from "framer-motion"

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
        <motion.div 
          style={insideStyles}
          whileHover={{scale:1.1}}
        ><h1>RSVP</h1></motion.div>
      </div>
    </Parallax>)

}

export default ParaBg