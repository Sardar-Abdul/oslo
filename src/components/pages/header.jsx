import React from "react";
import {
  StyledHeader,
  HeaderOverlay,
  TextContainer,
  ButtonContainer,
} from "../styles/headerStyle";
import { Button, Container } from "react-bootstrap";

function Header() {
  return (
    <StyledHeader id="header">
      <HeaderOverlay>
        <Container>
          <TextContainer>
            <h2>Unleash Your Potential</h2>
            <p>
              As the great Nelson Mandela said, “There is no passion to be found
              playing small — in settling for a life that is less than the one
              you are capable of living.” Powerful words from a man who left an
              incredible legacy. They challenge you and I to consider the all
              important question: “Am I living up to my full potential?”
            </p>
          </TextContainer>
          <ButtonContainer>
            <Button>
              <a href="#about">Who Are We?</a>
            </Button>
          </ButtonContainer>
        </Container>
      </HeaderOverlay>
    </StyledHeader>
  );
}

export default Header;
