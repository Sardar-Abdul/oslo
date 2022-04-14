import React from "react";
import { Container, Button } from "react-bootstrap";
import {
  StyledSignUp,
  TextContainer,
  ButtonCotainer,
  SignUpContainer,
} from "../styles/signUpStyle";

function SignUp() {
  return (
    <StyledSignUp>
      <Container>
        <SignUpContainer>
          <TextContainer>
            <h2>Do you want to be notified when we launch?</h2>
          </TextContainer>
          <ButtonCotainer>
            <Button>
              <a href="#contact">Sign Up Today</a>
            </Button>
          </ButtonCotainer>
        </SignUpContainer>
      </Container>
    </StyledSignUp>
  );
}

export default SignUp;
