import styled from "styled-components";
import header from "../../assets/images/header.jpeg";

export const StyledHeader = styled.div`
  background-image: url(${header});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  width: 100%;
  height: 70vh;
`;

export const HeaderOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(255, 0, 111, 0.6);

  .container {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 767.98px) {
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const TextContainer = styled.div`
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;

  @media (max-width: 767.98px) {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: white;
    font-weight: 300;
    text-align: center;
  }

  p {
    color: white;
    font-weight: 400;
    text-align: justify;
    text-align-last: center;
  }
`;

export const ButtonContainer = styled.div`
  Button {
    background-color: white !important;
    border: none;
    font-weight: 600;

    a {
      text-decoration: none !important;
      color: rgb(255, 0, 111, 0.6);
    }
    :hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
    }
  }
  .btn:focus {
    outline: none;
    box-shadow: none;
  }
`;
