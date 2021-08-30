import React, { useState } from 'react';
import { Modal, ModalBody, Container, Row, Col } from 'reactstrap';


const InfoModal = ({ trigger }) => {


  const [modal, setModal] = useState(true);

  const toggle = () => trigger();

  const popupStyle = {
    width: 500,
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className="popup">
        <ModalBody className="popup-image">
          <Container className = "popup">
            <Row>
              <Col>
                Where : The Hotel Ding Dong 
              </Col>
            </Row>
            <Row>
              <Col>
                When : 5:00PM sharp
              </Col>
            </Row>
            <Row>
              <Col>
                Wear : Formal Casual 
              </Col>
            </Row>
            <Row>
              <Col>
                NO KIDS, NO LAMES
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default InfoModal;