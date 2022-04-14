import React from "react";
import fb from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import insta from "../../assets/images/insta.png";
import { Container } from "react-bootstrap";
import {
  StyledFooter,
  FooterContainer,
  IconContainer,
  BrandContainer,
  LinksContainer,
} from "../styles/footerStyle";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterContainer>
          <IconContainer>
            <img src={fb} className="img-fluid" alt="Responsive " />
            <img src={twitter} className="img-fluid" alt="Responsive " />
            <img src={insta} className="img-fluid" alt="Responsive " />
          </IconContainer>
          <BrandContainer>
            <h2>
              <a href="#header">oslo</a>
            </h2>
            <p> &copy; ALL RIGHTS RESERVED 2022</p>
          </BrandContainer>
          <LinksContainer>
            <h3>
              <a href="#features">FEATURES</a>
            </h3>
            <h3>
              <a href="#reviews">REVIEWS</a>
            </h3>
            <h3>
              <a href="#about">ABOUT US</a>
            </h3>
          </LinksContainer>
        </FooterContainer>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
