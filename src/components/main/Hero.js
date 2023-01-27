import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row';

import url from './hero.svg';

function Heading() {
  return <h1 className=" py-4 hero-header section-header">Ready for Love?</h1>
}

function Btn() {
  return <Button variant="outline-light">Learn More</Button>
}

function Picture(props) {
  return <Image src={props.url} className='w-100' />
}

const Hero = () => {
  return (
    <Container className="hero box-shadow g-0">
      <Row className=' hero-section-container g-0'>
        <Col xs={12} xl={6} className='px-3' data-aos="fade-up">
          <Heading />
          <Btn />
        </Col>
        <Col xs={12} xl={6}>
          <Picture url={url} />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;