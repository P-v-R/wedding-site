import './App.css';
import Navigation from './components/Navigation';
import { ParallaxProvider } from 'react-scroll-parallax';
import Homepage from './Layout/Homepage';
import Landing from './components/Landing';
import Fade from 'react-reveal/Fade';


import {isMobile} from 'react-device-detect';
import MobileLanding from './components/MobileLanding';

function mobileCheck() {
    if(isMobile) {
        return (
            console.log("mobile")
        )
    }
    return (
        console.log("webpage")
    );
};
mobileCheck()

// function isMobile() {
//   // some js way to detect if user is on a mobile device
// }

// class Root extends Component {
//   render() {
//     return isMobile() ? ( <MobileLayout /> ) : ( <DesktopLayout /> )
//   }
// }

function App() {


  return (
    <ParallaxProvider>
      {isMobile && <MobileLanding/>}
      {!isMobile && <Landing/>}
      <Fade>
      <Navigation /> 
      </Fade> 
      <Homepage/>
    </ParallaxProvider>
  );
}

export default App;
