import './App.css';
import Navigation from './components/Navigation';
import { ParallaxProvider } from 'react-scroll-parallax';
import Homepage from './Layout/Homepage';

function App() {


  return (
    <ParallaxProvider>
      <Navigation />  
      <Homepage/>
    </ParallaxProvider>
  );
}

export default App;
