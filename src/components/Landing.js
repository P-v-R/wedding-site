import pa from "../assets/p-a2-01.svg"
import { Media } from 'reactstrap';
import "./styles.css"


function Landing() {
  return (
    <div className="LandingImg">
      <Media src={pa} />
      
    </div>
  )
}

export default Landing;