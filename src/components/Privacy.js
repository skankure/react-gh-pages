import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Heading() {
  return <h1 className="py-4 section-header">Privacy Policy</h1>
}

function Description() {
  return <p>lorem ipsum</p>
}

const Privacy = () => {
  return (
    <Container className='g-0 p-5 terms'>
      <Row className='g-0 py-5'>
        <Col xs={12} className='px-3'>
          <Heading />
          <Description />
        </Col>
      </Row>
    </Container>
  )
}

export default Privacy;