import { Parallax } from 'react-parallax';
import perryanne from "../assets/perryanne.jpg"

const Us = () => (
  <Parallax bgImage={perryanne} strength={-10}>
    <div style={{ height: 1000 }}>
    </div>
  </Parallax>
);

export default Us
