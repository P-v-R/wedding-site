import pa from "../assets/p-a2-01.svg"
import wedding from "../assets/caliWed1.svg"
import { Media } from 'reactstrap';
import "./styles.css"
import Fade from 'react-reveal/Fade';


function Landing() {

  return (
    
    <div className="LandingImg">
      <Media src={pa} />
      <h1 style={{marginBottom:"4%" , fontSize:"5vw"}}>
        <Fade right big cascade >
          Are Having A
        </Fade>
      </h1>
      <Fade cascade delay={2000}>
        <Media src={wedding} className="wedding" />
      </Fade>
    </div>
    
    
  )
}

export default Landing;