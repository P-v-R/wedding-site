
import where from "../assets/where2.svg"
import map from "../assets/map.png"
import { Media } from 'reactstrap';
import "./styles.css"
import { Container, Row, Col } from "reactstrap"
import { Parallax } from 'react-parallax';
import matches from "../assets/gradi.svg"
import Fade from 'react-reveal/Fade';


function Where() {

  return (
    <Parallax bgImage={matches} strength={300}>
      <div style={{ height: 1400 }}>
        <Container id="where" className="where-container">
          <Row className="whereImg">
            <Media src={where} style={{width:"90%"}}/>
          </Row>
          <Row className="whereAddress">
            {/* <Col className="where-links"><h2>HOTEL DINGDONG : 123 address Ave, 90210 </h2></Col> */}
            <Fade right big cascade  >
              <h2>HOTEL DINGDONG : 123 address Ave, 90210</h2>
            </Fade>
          </Row>

          <Row className="whereWhen">
            <Fade right big cascade delay={750} >
              <h2>6:00pm Sharp!</h2>
            </Fade>
          </Row>
          <Fade right big cascade delay={1000} >
            <Row >
              <Col className="where-links"><h2>Things To Do</h2></Col>
              <Col className="where-links"><h2>Places To Stay</h2></Col>
              <Col className="where-links"><h2>Where to Eat</h2></Col>
            </Row>
            <Row >
              <Col className="where-links"><h4>-Hiking</h4></Col>
              <Col className="where-links"><h4>-hotel DingDong</h4></Col>
              <Col className="where-links"><h4>-MacDons</h4></Col>
            </Row>
            <Row >
              <Col className="where-links"><h4>-Pool</h4></Col>
              <Col className="where-links"><h4>-Motel 55</h4></Col>
              <Col className="where-links"><h4>-Burger King</h4></Col>
            </Row>
            <Row >
              <Col className="where-links"><h4>-Beach</h4></Col>
              <Col className="where-links"><h4>-Red Roof In</h4></Col>
              <Col className="where-links"><h4>-yumyum donuts</h4></Col>
            </Row>
            <Row >
              <Col className="where-links"><h4>-Museam</h4></Col>
              <Col className="where-links"><h4>-AirBnB</h4></Col>
              <Col className="where-links"><h4>-Seafood Buffet</h4></Col>
            </Row>
            <Row >
              <br></br>
            </Row>
            <Row>
              <Col className="where-links" >
                <Media src={map} style={{ size: "75%" }} />
              </Col>
            </Row>
          </Fade>
        </Container>

      </div>
    </Parallax>


  )
}

export default Where;