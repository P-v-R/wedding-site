
import where from "../assets/where.svg"
import { Media } from 'reactstrap';
import "./styles.css"
import { Container, Row, Col } from "reactstrap"
import { Parallax} from 'react-parallax';
import matches from "../assets/gradi.svg"

function Where() {

  return (
    <Parallax bgImage={matches} strength={300}>
      <div style={{ height: 1200 }}>


        <Container id="where" className="where-container">
          <Row className="whereImg">
            <Media src={where} />

          </Row>
          <Row className="whereAddress">
            <Col className="where-links"><h2>HOTEL DINGDONG : 123 address Ave, 90210 </h2></Col>
          </Row>
          <Row className="whereWhen">
            <Col className="where-links"><h3>5:00pm SHARP! </h3></Col>
          </Row>
          <Row >
            <Col className="where-links"><h2>Things To Do</h2></Col>
            <Col className="where-links"><h2>Places To Stay</h2></Col>
            <Col className="where-links"><h2>Where to Eat</h2></Col>
          </Row>
          <Row >
            <Col className="where-links"><h3>-place</h3></Col>
            <Col className="where-links"><h3>-hotel</h3></Col>
            <Col className="where-links"><h3>-yumyums</h3></Col>
          </Row>
          <Row >
            <Col className="where-links"><h3>-place</h3></Col>
            <Col className="where-links"><h3>-hotel</h3></Col>
            <Col className="where-links"><h3>-yumyums</h3></Col>
          </Row>
          <Row >
            <Col className="where-links"><h3>-place</h3></Col>
            <Col className="where-links"><h3>-hotel</h3></Col>
            <Col className="where-links"><h3>-yumyums</h3></Col>
          </Row>
          <Row >
            <Col className="where-links"><h3>-place</h3></Col>
            <Col className="where-links"><h3>-hotel</h3></Col>
            <Col className="where-links"><h3>-yumyums</h3></Col>
          </Row>
          <div style={{ height: "20vh" }}></div>
        </Container>

      </div>
    </Parallax>


  )
}

export default Where;