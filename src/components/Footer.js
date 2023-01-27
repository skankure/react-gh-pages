import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function SocialMediaIcons(){
    return<ul className="social-media-links list-unstyled justify-content-center d-flex">
          <li><i className="bi bi-twitter social-media-icon"/></li>
          <li><i className="bi bi-instagram social-media-icon"/></li> 
          <li><i className="bi bi-facebook social-media-icon"/></li>
          <li><a className="" href="mailto:info@jalebijodi.com"> <i className="bi bi-envelope social-media-icon" /></a></li>
          </ul>
}

function FooterLinks(){
  return <div className = 'footer-links d-flex justify-content-center'>
    <ul className="footer-links list-inline text-center footer-font">
         <li className="list-inline-item resources-links"><a>Contact</a></li>
         <li className="list-inline-item resources-links footer-anchor-links"><a href="privacy-policy.html">Privacy Policy</a></li>
         <li className="list-inline-item resources-links footer-anchor-links"><a href="terms.html">Terms of Use</a></li>
    </ul>
  </div>
}

function CopyRight(){
  return <p className="copyright d-flex justify-content-center">© 2023 Jalebi Jodi. All rights reserved.</p>
}

const Footer = () => {
  return (
    <Container className='footer-container box-shadow'>
      <Row className="pt-5 px-5 g-0">
      <SocialMediaIcons></SocialMediaIcons>
      <FooterLinks></FooterLinks>
      <CopyRight></CopyRight>
      </Row>
    </Container>
  )
}

export default Footer;