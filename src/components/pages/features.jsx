import React from "react";
import run from "../../assets/images/run.png";
import list from "../../assets/images/list.png";
import group from "../../assets/images/group.png";
import { Container } from "react-bootstrap";
import {
  StyledFeatures,
  FeatureContainer,
  TextContainer,
  ItemContainer,
  StayOrganized,
  Productive,
  Collaborate,
} from "../styles/featuresStyle";

function Features() {
  return (
    <StyledFeatures id="features">
      <Container>
        <FeatureContainer>
          <TextContainer>
            <p>02 // FEATURES</p>
            <h2>Be on the same page</h2>
          </TextContainer>
          <ItemContainer>
            <StayOrganized>
              <img src={list} className="img-fluid" alt="Responsive " />
              <h2>Organized</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                laudantium quisquam
              </p>
            </StayOrganized>
            <Productive>
              <img src={run} className="img-fluid" alt="Responsive " />
              <h2>Productive</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                laudantium quisquam
              </p>
            </Productive>
            <Collaborate>
              <img src={group} className="img-fluid" alt="Responsive " />
              <h2>Collaborate</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                laudantium quisquam
              </p>
            </Collaborate>
          </ItemContainer>
        </FeatureContainer>
      </Container>
    </StyledFeatures>
  );
}

export default Features;
