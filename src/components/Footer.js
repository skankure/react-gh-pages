import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function SocialMediaIcons(){
    return<ul className="list-unstyled social-media-links d-flex">
          <li><i className="bi bi-twitter social-media-icon" /></li>
          <li><i className="bi bi-instagram social-media-icon" />{" "}</li> 
          <li><i className="bi bi-facebook social-media-icon" /></li>
          <li><a className="footer-anchor-links" href="mailto:info@jalebijodi.com"> <i className="bi bi-envelope social-media-icon" /></a></li>
          {/* <i class="bi bi-tiktok"></i> */}
          </ul>
}

function FooterLinks(){
  return <ul className="list-inline text-center footer-font">
         <li className="list-inline-item resources-links"><a>Contact</a></li>
         <li className="list-inline-item resources-links footer-anchor-links"><a href="privacy-policy.html">Privacy Policy</a></li>
         <li className="list-inline-item resources-links footer-anchor-links"><a href="terms.html">Terms of Use</a></li>
        </ul>
}

function CopyRight(){
  return <p className="footer-font-2">© 2023 Jalebi Jodi. All rights reserved.</p>
}

const Footer = () => {
  return (
    <Container className='custom-footer box-shadow'>
      <Row className="pt-5 px-5 g-0">
      <SocialMediaIcons></SocialMediaIcons>
      <FooterLinks></FooterLinks>
      </Row>
    </Container>
  )
}

export default Footer;