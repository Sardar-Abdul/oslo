import React from "react";
import { Container, Card } from "react-bootstrap";
import {
  CardContainer,
  ReviewsContainer,
  StyledReviews,
  TextContainer,
  FirstCard,
  SecondCard,
  ThirdCard,
} from "../styles/reviewsStyle";

import suzy from "../../assets/images/suzy.png";
import mark from "../../assets/images/mark.png";
import lee from "../../assets/images/lee.png";

function Reviews() {
  return (
    <StyledReviews id="reviews">
      <Container>
        <ReviewsContainer>
          <TextContainer>
            <p>04 // REVIEWS</p>
            <h2>
              A few words from our <span>amazing </span>and trusting customers
            </h2>
          </TextContainer>
          <CardContainer>
            <FirstCard>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={suzy} />
                <Card.Body>
                  <Card.Title>Suzy Huller</Card.Title>
                  <Card.Text>
                    I have been an illustrator for over 15 years now. This tool
                    allows me to manage multiple projects at once and it makes
                    my job way easier. Such a time saver.
                  </Card.Text>
                </Card.Body>
              </Card>
            </FirstCard>
            <SecondCard>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={mark} />
                <Card.Body>
                  <Card.Title>Mark Jonhson</Card.Title>
                  <Card.Text>
                    I can now easily keep track of my team and all on-going
                    projects. No need to search through files and folders to see
                    who completed the task. It's great!
                  </Card.Text>
                </Card.Body>
              </Card>
            </SecondCard>
            <ThirdCard>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={lee} />
                <Card.Body>
                  <Card.Title>Kimberly Lee</Card.Title>
                  <Card.Text>
                    This tool is life changing! I can start organized and easily
                    coordinate schedules with my colleagues. I would highly
                    recommend this to anyone!
                  </Card.Text>
                </Card.Body>
              </Card>
            </ThirdCard>
          </CardContainer>
        </ReviewsContainer>
      </Container>
    </StyledReviews>
  );
}

export default Reviews;
