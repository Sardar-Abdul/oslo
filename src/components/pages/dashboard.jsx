import React from "react";
import mobileweb from "../../assets/images/mobileweb.png";
import desktopweb from "../../assets/images/desktopweb.png";
import { Container } from "react-bootstrap";
import {
  StyledDashboard,
  DashboardContainer,
  TextContainer,
  ImageContainer,
  FooterText,
  DesktopContainer,
  MobileContainer,
} from "../styles/dashboardStyle";

function Dashboard() {
  return (
    <StyledDashboard>
      <Container>
        <DashboardContainer>
          <TextContainer>
            <p>03 // THE DASHBOARD</p>
            <h2>Everything works better when it looks better</h2>
          </TextContainer>
          <ImageContainer>
            <MobileContainer>
              <img src={mobileweb} className="img-fluid" alt="Responsive" />
            </MobileContainer>
            <DesktopContainer>
              <img src={desktopweb} className="img-fluid" alt="Responsive" />
            </DesktopContainer>
          </ImageContainer>
        </DashboardContainer>
        <FooterText>
          <h6>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            deleniti itaque numquam voluptate nam, quaerat temporibus possimus
            quia dolor veritatis laudantium quibusdam eaque tenetur voluptates.
            Aspernatur corporis
          </h6>
        </FooterText>
      </Container>
    </StyledDashboard>
  );
}

export default Dashboard;
