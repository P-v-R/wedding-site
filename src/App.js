import './App.css';
import Navigation from './components/Navigation';
import { ParallaxProvider } from 'react-scroll-parallax';
import Homepage from './Layout/Homepage';
import Landing from './components/Landing';
import Fade from 'react-reveal/Fade';

function App() {


  return (
    <ParallaxProvider>
      <Landing/>
      <Fade>
      <Navigation /> 
      </Fade> 
      <Homepage/>
    </ParallaxProvider>
  );
}

export default App;
