import React from 'react';
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import url from '../images/wedding.svg';



function Heading() {
  return <h1 className="py-4 section-header">1:1 Consulting</h1>
}

function Description() {
  return <p>Navigating real-life scenarios, dating apps, and matrimony apps can be overwhelming, but with our expert consulting, we can help you navigate your situation effectively and be one step closer to your perfect match.
  </p>
}

function Picture(props) {
  return <Image src={props.url} className='w-100' />
}

function Btn() {
  return <Button variant="outline-light">Book Now</Button>
}

const Consulting = () => {
  return (
    <Container className='g-0 consulting p-5 box-shadow'>
      <Row data-aos="fade-up" className='g-0 py-5'>
        <Col xs={12} md={6} className='px-3'>
          <Picture url={url} />
        </Col>
        <Col xs={12} md={6} className='px-3'>
          <Heading />
          <Description />
          <Btn />
        </Col>
      </Row>
    </Container>
  )
}

export default Consulting;