import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Container, Row, Col } from 'reactstrap';
import Lottie from 'react-lottie';
import animationData from '../lotties/love-letter.json';
import InfoModal from "./InfoModal"

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [alert, setAlert] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const links = [
    { href: '#where', text: 'Where' },
    { href: '#what', text: 'What' },
    { href: null, text: 'When', trig : trigger },
    { href: '#who', text: 'Who' },
  ];


  const createNavItem = ({ href, text, trig }) => (
    <Col xs="3" className="nav-dropdown-link" key={text}>
      <a className="dropdown-link" href={href} onClick={trig}>
          {text}
      </a>
    </Col>
  );

  function trigger(){
    console.log("triiiiger")
    setAlert(alert => !alert)
  }

  return (
    <div>
      {alert && <InfoModal trigger={trigger} />}
      <Navbar color="faded" light>
        <Collapse isOpen={!collapsed} navbar>
          <Container>
            <Row>
              {links.map(createNavItem)}
            </Row>
          </Container>
        </Collapse>
        <NavbarToggler onClick={toggleNavbar}>
          <div
            className="dropdown-link">
            <Lottie
              options={defaultOptions}
              height={100}
              width={100} />
          </div>
        </NavbarToggler>
      </Navbar>
    </div>
  );
}

export default Navigation;