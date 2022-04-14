import styled from "styled-components";

export const StyledFooter = styled.div`
  min-height: 18vh;
`;
export const FooterContainer = styled.div`
  height: 18vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767.98px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const IconContainer = styled.div`
  height: 40%;
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 575.98px) {
    display: none;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
export const BrandContainer = styled.div`
  height: 40%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 767.98px) {
    width: 30%;
  }

  @media (max-width: 767.98px) {
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    a {
      text-decoration: none;
      font-size: 40px !important;
      font-weight: 200;
      color: rgb(255, 0, 111) !important;
      letter-spacing: 1px;
    }
  }

  p {
    font-size: 12px;
    font-weight: 300;

    @media (max-width: 991.98px) {
      font-size: 9px;
      font-weight: 500;
    }

    @media (max-width: 767.98px) {
      font-size: 10px;
    }

    @media (max-width: 575.98px) {
      font-weight: 600;
    }
  }
`;
export const LinksContainer = styled.div`
  height: 40%;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767.98px) {
    display: none;
  }

  h3 {
    a {
      font-size: 13px;
      font-weight: 300;
      text-decoration: none;
      color: black;
      :hover {
        border-bottom: 2px solid black;
      }
    }
  }
`;
