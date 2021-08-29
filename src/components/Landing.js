import pa from "../assets/p-a2-01.svg"
import wedding from "../assets/caliWed.svg"
import Where from "../assets/where.svg"
import { Media } from 'reactstrap';
import "./styles.css"
import ParaBg from "./ParaBg";


function Landing() {

  return (
    
    <div className="LandingImg">
      <Media src={pa} />
      <Media src={wedding} className="wedding" />
    </div>
    
    
  )
}

export default Landing;