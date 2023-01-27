import React from 'react';
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import url from './sitting-couple.svg';

const name = 'Supriya Kankure';
const title = 'CEO of Jalebi Jodi';



function Heading() {
  return <h1 className="py-4 section-header">Why Us</h1>
}

function Description() {
  return <p>"As someone who has personally struggled with dating apps, matrimonial sites, and speed dating events, I understand the difficulties offinding a romantic partner. That's why I founded Jalebi Jodi, aconsulting service to help others navigate the dating process. Our services are open to all individuals regardless of background. We strive to provide the highest quality for our clients while being affordable."</p>
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

const About = () => {
  return (
    <Container className='g-0 p-5 about box-shadow'>
      <Row data-aos="fade-up" className='g-0 py-5'>
        <Col xs={12} md={6} className='px-3'>
          <Heading />
          <Description />
          <Caption name={name} title={title} />
        </Col>
        <Col xs={12} md={6} className='px-3'>
          <Picture url={url} />
        </Col>
      </Row>
    </Container>
  )
}

export default About;