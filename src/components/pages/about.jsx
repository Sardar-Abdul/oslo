import React from "react";
import { Button, Container } from "react-bootstrap";
import womanlaughing from "../../assets/images/womanlaughing.jpeg";
import {
  StyledAbout,
  Wrapper,
  TextContainer,
  ImageContainer,
} from "../styles/aboutStyle";

function About() {
  return (
    <StyledAbout id="about">
      <Container>
        <Wrapper>
          <TextContainer>
            <p>01 // ABOUT US</p>
            <h2>We all want our jobs to run smoothly</h2>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              doloribus quaerat praesentium, perspiciatis assumenda natus nihil
              veniam, rem culpa dignissimos repellat vero non perferendis
            </h4>
            <Button>
              <a href="#contact">Get Started</a>{" "}
            </Button>
          </TextContainer>
          <ImageContainer>
            <img
              src={womanlaughing}
              className="img-fluid"
              alt="Responsive imge"
            />
          </ImageContainer>
        </Wrapper>
      </Container>
    </StyledAbout>
  );
}

export default About;
