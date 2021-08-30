import Landing from "../components/Landing";
import ParaBg from "../components/ParaBg";
import ParaBgTwo from "../components/ParaBgTwo";
import Where from "../components/Where";
import Us from "../components/Us";
import Filler from "../components/Filler";



function Homepage() {
  return (
    <div>
      <Landing />
      <ParaBg />
      <Where />
      <ParaBgTwo />
      <Filler/>
      <div id="who" />
      <Us />
    </div>
  )
}

export default Homepage;