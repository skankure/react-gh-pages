import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import url from '../images/swipe.svg';


function Heading() {
  return <h1 className="py-4 section-header">Free Profile Reviews</h1>
}

function Description() {
  return <p> Send us your profiles and we will give you a comprehensive review at no cost to you.</p>
}

function Picture(props) {
  return <Image src={props.url} className='w-100' />
}

function Btn() {
  return <Button variant="outline-light">Send Now</Button>
}

const Profiles = () => {
  return (
    <Container className='g-0 profile p-5 box-shadow'>
      <Row data-aos="fade-up" className="g-0 py-5">
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

export default Profiles;



