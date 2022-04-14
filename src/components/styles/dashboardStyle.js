import styled from "styled-components";

export const StyledDashboard = styled.div`
  min-height: 120vh;
  background-color: rgb(243, 243, 243);

  @media (max-width: 1199.98px) {
    min-height: 150vh;
  }

  @media (max-width: 1199.98px) {
    min-height: 100vh;
  }
`;
export const DashboardContainer = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1199.98px) {
    min-height: 150vh;
  }
`;
export const TextContainer = styled.div`
  p {
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
  }
  h2 {
    color: rgb(255, 0, 111);
    font-weight: 200;
    font-size: 36px;
    text-align: center;
    padding-left: 20px;
  }
`;
export const ImageContainer = styled.div`
  height: 50%;
  width: 50vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;

  @media (max-width: 1199.98px) {
    height: 140vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: 1199.98px) {
    min-height: 100vh;
  }
`;
export const MobileContainer = styled.div`
  img {
    border-radius: 5%;
    padding: 5px;
    border: 2px solid rgb(255, 0, 111);
  }
`;
export const DesktopContainer = styled.div`
  img {
    border-radius: 5%;
    padding: 5px;
    border: 2px solid rgb(255, 0, 111);

    height: 300px;
    width: 400px;
  }
`;

export const FooterText = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  h6 {
    width: 80%;
    text-align: justify;
    text-align-last: center;
    font-weight: 300;
    padding-bottom: 20px;

    @media (max-width: 1199.98px) {
      padding-top: 40px;
    }
  }
`;
