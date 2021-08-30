import { Parallax } from 'react-parallax';
import matches from "../assets/matches.jpg"
import Fade from 'react-reveal/Fade';


function ParaBg() {

  const insideStyles = {
    backgroundColor: "#FFE8D6",
    padding: 40,
    position: "absolute",
    top: "50%",
    left: "20%",

  };


  return (
    <Parallax bgImage={matches} strength={300}>
      <div style={{ height: 900 }}>
        <Fade cascade delay={750}>
          <div
            style={insideStyles}>
            <h1 className="cardtext">
              RSVP
              </h1>
              
              </div>
        </Fade>
      </div>
    </Parallax>)

}

      export default ParaBg