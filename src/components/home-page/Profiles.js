import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import url from '../images/swipe.svg';

import Heading from '../utilities/Heading';
import Description from '../utilities/Description';
import Picture from '../utilities/Picture';

const heading = 'Free Profile Reviews';
const description = 'Send us your profiles and we will give you a comprehensive review at no cost to you.';

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
          <Heading heading ={heading} />
          <Description description={description} />
          <Btn />
        </Col>
      </Row>
    </Container>
  )
}

export default Profiles;



