import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Container, Row, Nav, NavItem, NavLink, Col } from 'reactstrap';
import { motion }from "framer-motion"
import Lottie from 'react-lottie';
import animationData from '../lotties/love-letter.json';

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

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
    { href: '#when', text: 'When' },
    { href: '#who', text: 'Who' },
  ];


const variants = {
  whileHover: { scale: 1.1 }
}

  const createNavItem = ({ href, text, className }) => (
    <Col xs="3" className="nav-dropdown-link">
      <a className="dropdown-link" href={href}>
          <motion.div
          variants={variants}
          className="dropdown-link"
           >
            {text}
          </motion.div>
      </a>
    </Col>
  );
  
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar}>
        <div
          className="dropdown-link"
          >
            
        <Lottie
          options={defaultOptions}
          height={100}
          width={100}/>
          
          </div>
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Container>
            <Row >
              {links.map(createNavItem)}
            </Row>
          </Container>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;