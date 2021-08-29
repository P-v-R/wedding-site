import './App.css';
import Navigation from './components/Navigation';
import Lottie from 'react-lottie';
import animationData from './lotties/love-letter.json';
import Landing from './components/Landing';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {


  return (

    <ParallaxProvider>
      <Navigation />
      <Landing/>
    </ParallaxProvider>
  );
}

export default App;
