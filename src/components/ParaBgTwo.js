import { Parallax } from 'react-parallax';
import still from "../assets/stilllife.jpg"
import Fade from 'react-reveal/Fade';

function ParaBgTwo() {

  const insideStyles = {
    backgroundColor: "#FFE8D6",
    padding: 40,
    position: "absolute",
    top: "50%",
    left: "60%",

  };


  return (
    <Parallax bgImage={still} strength={300}>
      <Fade cascade delay={750}>
        <div style={{ height: 1200 }}>
          <div
            style={insideStyles}
          ><h1 className="cardtext">Registry</h1></div>
        </div>
      </Fade>
    </Parallax>)

}

export default ParaBgTwo