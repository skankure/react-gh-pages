import React from 'react';
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const name = 'Supriya Kankure';
const title = 'CEO of Jalebi Jodi';



function Heading() {
  return <h1 className="py-4 section-header">Terms of Use</h1>
}

function Description() {
  return <p>lorem ipsum</p>
}

function Picture(props) {
  return <Image src={props.url} className='w-100' />
}

function Caption(props) {
  return <figcaption className="blockquote-footer mt-3">
    {props.name},{" "}
    <Cite title ={props.title} />
  </figcaption>
}

function Cite(props) {
  return <cite title="Source Title">
    {props.title}
  </cite>
}

const Terms = () => {
  return (
    <Container className='g-0 p-5 terms box-shadow'>
      <Row className='g-0 py-5'>
        <Col xs={12} className='px-3'>
          <Heading />
          <Description />
        </Col>
      </Row>
    </Container>
  )
}

export default Terms;