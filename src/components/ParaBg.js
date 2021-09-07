import { Parallax } from 'react-parallax';
import matches from "../assets/matches.jpg"
import Fade from 'react-reveal/Fade';

/**
 * ParaBg
 *  - Paralax segment of page that shows a picture in the background 
 *    and a button that goes to the online RSVP form 
 * 
 */
function ParaBg() {

  const insideStyles = {
    backgroundColor: "#FFE8D6",
    padding: 40,
    position: "absolute",
    top: "50%",
    left: "20%",
  };


  function rsvp(){
    window.open("https://9r0d4g8jfji.typeform.com/to/C4r4Zibb")
  }
  return (
    <Parallax bgImage={matches} strength={300}>
        <Fade cascade delay={750}>
      <div style={{ height: 900 }}>
          <div
            style={insideStyles}>
              
            <h1 className="cardtext" onClick={rsvp} >
              RSVP
            </h1>
              
        </div>
      </div>
        </Fade>
    </Parallax>)

}

      export default ParaBg