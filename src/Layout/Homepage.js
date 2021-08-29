import Landing from "../components/Landing";
import ParaBg from "../components/ParaBg";
import ParaBgTwo from "../components/ParaBgTwo";
import Where from "../components/Where";



function Homepage() {
  return (
    <div>
      <Landing />
      <ParaBg/>
      <Where name={"where"}/>
      <ParaBgTwo/>
    </div>
  )
}

export default Homepage;